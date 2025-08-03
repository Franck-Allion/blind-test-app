import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import { SONG_CATALOG } from '../public/audio/mockData';
import { generatePlaylistFromPrompt } from '../services/geminiService';
import { GameSettings, Song } from '../types';
import { SlidersHorizontal, ListMusic, Check, ArrowRight, Eye, EyeOff, Shuffle, Edit, Star, Search, BrainCircuit, Sparkles, Loader } from 'lucide-react';
import { socketService } from '../services/socketService';

const SetupPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useGame();
  
  const [selectionMode, setSelectionMode] = useState<'manual' | 'random' | 'ai'>('manual');
  const [numberOfRandomSongs, setNumberOfRandomSongs] = useState<number>(10);
  const [numberOfAiSongs, setNumberOfAiSongs] = useState<number>(10);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [selectedSongs, setSelectedSongs] = useState<Set<string>>(new Set());
  const [settings, setSettings] = useState<GameSettings>({
    timeToAnswer: 60,
    playsPerSong: 2,
    pauseBetweenPlays: 3,
    showScoresAfterRound: false,
  });
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    SONG_CATALOG.forEach(song => song.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredSongs = useMemo(() => {
    // 1. Filter by tags first
    let songsFilteredByTags = SONG_CATALOG;
    if (activeTags.size > 0) {
      songsFilteredByTags = SONG_CATALOG.filter(song => song.tags.some(tag => activeTags.has(tag)));
    }
    
    // 2. Then filter by search query
    const lowercasedQuery = searchQuery.toLowerCase().trim();
    if (!lowercasedQuery) {
        return songsFilteredByTags;
    }

    return songsFilteredByTags.filter(song =>
        song.title.toLowerCase().includes(lowercasedQuery) ||
        song.artist.toLowerCase().includes(lowercasedQuery)
    );
  }, [activeTags, searchQuery]);

  const handleToggleSong = (songId: string) => {
    setSelectedSongs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(songId)) {
        newSet.delete(songId);
      } else {
        newSet.add(songId);
      }
      return newSet;
    });
  };
  
  const handleToggleTag = (tag: string) => {
    setActiveTags(prev => {
        const newSet = new Set(prev);
        if (newSet.has(tag)) {
            newSet.delete(tag);
        } else {
            newSet.add(tag);
        }
        return newSet;
    });
  };

  const handleSettingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.name]: parseInt(e.target.value, 10) });
  };
  
  const handleSelectAll = () => {
      setSelectedSongs(new Set(filteredSongs.map(s => s.id)));
  };
  
  const handleDeselectAll = () => {
      setSelectedSongs(new Set());
  };

  const handleGeneratePlaylist = async () => {
    if (!aiPrompt || numberOfAiSongs <= 0) {
        setError("Please enter a description and a valid number of songs.");
        return;
    }
    setIsGenerating(true);
    setError('');
    try {
        const songIds = await generatePlaylistFromPrompt(aiPrompt, numberOfAiSongs, SONG_CATALOG);
        if (songIds.length === 0) {
          setError("The AI couldn't find any matching songs. Try a different prompt!");
          setSelectedSongs(new Set());
        } else {
          setSelectedSongs(new Set(songIds));
        }
    } catch (err: any) {
        setError(err.message || "An error occurred while generating the playlist.");
        setSelectedSongs(new Set());
    } finally {
        setIsGenerating(false);
    }
  };

  const handleCreateGame = async () => {
    let songIdsToCreate: string[] = [];

    if (selectionMode === 'manual' || selectionMode === 'ai') {
        if (selectedSongs.size === 0) {
            setError('Please select or generate at least one song.');
            return;
        }
        songIdsToCreate = Array.from(selectedSongs);
    } else { // 'random' mode
        const numSongs = Number(numberOfRandomSongs);
        if (isNaN(numSongs) || numSongs <= 0) {
            setError('Please enter a number of songs greater than 0.');
            return;
        }
        if (numSongs > SONG_CATALOG.length) {
            setError(`You can't select more than the total of ${SONG_CATALOG.length} available songs.`);
            return;
        }
        
        const shuffled = [...SONG_CATALOG].sort(() => 0.5 - Math.random());
        songIdsToCreate = shuffled.slice(0, numSongs).map(s => s.id);
    }

    setError('');
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
        const { gameId, organizerPlayerId } = await socketService.createGame({ settings, songIds: songIdsToCreate });
        
        localStorage.setItem(`blindtest-pro-playerId-${gameId}`, organizerPlayerId);
        localStorage.setItem(`blindtest-pro-isOrganizer-${gameId}`, 'true');

        navigate(`/game/${gameId}`);
    } catch(err) {
        setError('Failed to create game. Please try again.');
        dispatch({ type: 'SET_LOADING', payload: false });
    }
  };
  
  const isCreateButtonDisabled = state.isLoading || (selectionMode !== 'random' && selectedSongs.size === 0);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold text-center mb-2">Game Setup</h1>
        <p className="text-center text-slate-400">Configure your blind test. Choose your songs and set the rules.</p>
      </div>

      {/* Settings */}
      <div className="bg-slate-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><SlidersHorizontal className="text-indigo-400"/> Game Rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label htmlFor="timeToAnswer" className="block text-sm font-medium text-slate-300 mb-1">Time to Answer (sec)</label>
            <input type="number" name="timeToAnswer" value={settings.timeToAnswer} onChange={handleSettingChange} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="playsPerSong" className="block text-sm font-medium text-slate-300 mb-1">Plays per Song</label>
            <input type="number" name="playsPerSong" value={settings.playsPerSong} onChange={handleSettingChange} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="pauseBetweenPlays" className="block text-sm font-medium text-slate-300 mb-1">Pause Between Plays (sec)</label>
            <input type="number" name="pauseBetweenPlays" value={settings.pauseBetweenPlays} onChange={handleSettingChange} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Show Scores to Players?</label>
             <div className="flex rounded-md shadow-sm h-10">
                <button
                  type="button"
                  onClick={() => setSettings(s => ({...s, showScoresAfterRound: true}))}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${settings.showScoresAfterRound ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600' } border border-slate-600 rounded-l-md focus:z-10 focus:ring-2 focus:ring-indigo-500`}
                >
                  <Eye size={16}/> Yes
                </button>
                <button
                  type="button"
                  onClick={() => setSettings(s => ({...s, showScoresAfterRound: false}))}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${!settings.showScoresAfterRound ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600' } border border-y border-r border-slate-600 rounded-r-md focus:z-10 focus:ring-2 focus:ring-indigo-500`}
                >
                  <EyeOff size={16}/> No
                </button>
              </div>
          </div>
        </div>
      </div>
      
      {/* Song Selection */}
      <div className="bg-slate-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><ListMusic className="text-emerald-400"/> Select Playlist</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-md shadow-sm mb-6">
            <button
              type="button"
              onClick={() => setSelectionMode('manual')}
              className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${selectionMode === 'manual' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600' } border border-slate-600 rounded-l-md focus:z-10 focus:ring-2 focus:ring-emerald-500`}
            >
              <Edit size={16}/> Manual Selection
            </button>
            <button
              type="button"
              onClick={() => setSelectionMode('ai')}
              className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${selectionMode === 'ai' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600' } border border-x border-y border-slate-600 focus:z-10 focus:ring-2 focus:ring-emerald-500`}
            >
              <BrainCircuit size={16}/> AI Powered
            </button>
            <button
              type="button"
              onClick={() => setSelectionMode('random')}
              className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${selectionMode === 'random' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600' } border border-slate-600 rounded-r-md focus:z-10 focus:ring-2 focus:ring-emerald-500`}
            >
              <Shuffle size={16}/> Random Selection
            </button>
        </div>

        {selectionMode === 'manual' ? (
            <div className="animate-fade-in">
                <h3 className="text-lg font-medium mb-2 text-slate-300">Filter by Tags: ({selectedSongs.size} selected)</h3>
                <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                        <button key={tag} onClick={() => handleToggleTag(tag)}
                            className={`px-3 py-1 text-sm rounded-full transition-colors ${activeTags.has(tag) ? 'bg-emerald-500 text-white' : 'bg-slate-700 hover:bg-slate-600'}`}>
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="relative my-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by title or artist..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-md py-2 pl-10 pr-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                </div>
            
                <div className="flex gap-2 my-4">
                    <button onClick={handleSelectAll} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-sm rounded-md">Select All Visible</button>
                    <button onClick={handleDeselectAll} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-sm rounded-md">Deselect All</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto pr-2">
                  {filteredSongs.map(song => (
                    <button key={song.id} onClick={() => handleToggleSong(song.id)}
                      className={`p-4 rounded-lg text-left transition-all duration-200 border-2 ${selectedSongs.has(song.id) ? 'bg-slate-700 border-emerald-500' : 'bg-slate-900 border-slate-700 hover:bg-slate-700'}`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-bold text-lg">{song.title}</p>
                                <p className="text-sm text-slate-400">{song.artist} ({song.year})</p>
                            </div>
                            {selectedSongs.has(song.id) && <div className="bg-emerald-500 rounded-full p-1 shrink-0"><Check size={16} className="text-white"/></div>}
                        </div>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex flex-wrap gap-1 mr-2">
                            {song.tags.map(tag => <span key={tag} className="text-xs bg-slate-600 px-2 py-0.5 rounded-full">{tag}</span>)}
                        </div>
                        <div className="flex items-center shrink-0" title={`Difficulty: ${song.difficulty}/5`}>
                            {Array.from({ length: 5 }, (_, i) => (
                                <Star
                                key={i}
                                size={14}
                                className={i < song.difficulty ? 'text-amber-400' : 'text-slate-600'}
                                fill={i < song.difficulty ? 'currentColor' : 'none'}
                                />
                            ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
            </div>
        ) : selectionMode === 'ai' ? (
            <div className="animate-fade-in space-y-4">
                <p className="text-sm text-slate-400 text-center">Describe the quiz you want, and let AI pick the songs for you from the catalog.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <label htmlFor="aiPrompt" className="block text-sm font-medium text-slate-300 mb-1">Describe your quiz theme</label>
                        <textarea
                            id="aiPrompt"
                            value={aiPrompt}
                            onChange={(e) => setAiPrompt(e.target.value)}
                            placeholder="e.g., 'upbeat 80s pop for a party', 'sad rock songs from the 90s', 'songs from Disney movies'"
                            className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            rows={3}
                        />
                    </div>
                    <div>
                        <label htmlFor="numberOfAiSongs" className="block text-sm font-medium text-slate-300 mb-1">Number of Songs</label>
                        <input
                            type="number"
                            id="numberOfAiSongs"
                            value={numberOfAiSongs}
                            onChange={(e) => setNumberOfAiSongs(Math.max(1, parseInt(e.target.value, 10) || 1))}
                            min="1"
                            max={SONG_CATALOG.length}
                            className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>
                </div>
                <button onClick={handleGeneratePlaylist} disabled={isGenerating || !aiPrompt} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 font-semibold rounded-md disabled:opacity-50 disabled:cursor-wait">
                    {isGenerating ? <><Loader size={20} className="animate-spin" /> Generating Playlist...</> : <><Sparkles size={20} /> Generate Playlist</>}
                </button>

                {selectedSongs.size > 0 && (
                    <div className="mt-4 border-t border-slate-700 pt-4">
                        <h4 className="font-semibold text-slate-300 mb-2">Generated Playlist ({selectedSongs.size} songs):</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-52 overflow-y-auto pr-2">
                            {Array.from(selectedSongs).map(songId => {
                                const song = SONG_CATALOG.find(s => s.id === songId);
                                return song ? (
                                    <div key={song.id} className="bg-slate-900/50 p-2 rounded-md text-sm flex items-center gap-2">
                                      <Check size={14} className="text-emerald-400 shrink-0"/>
                                      <div>
                                        <p className="font-bold text-white truncate">{song.title}</p>
                                        <p className="text-slate-400 truncate">{song.artist}</p>
                                      </div>
                                    </div>
                                ) : null;
                            })}
                        </div>
                    </div>
                )}
            </div>
        ) : (
             <div className="animate-fade-in">
              <h3 className="text-lg font-medium mb-2 text-slate-300">Random Playlist</h3>
              <p className="text-sm text-slate-400 mb-4">The game will randomly select the specified number of songs from the entire catalog.</p>
              <div>
                <label htmlFor="numberOfRandomSongs" className="block text-sm font-medium text-slate-300 mb-1">Number of Songs</label>
                <input 
                    type="number" 
                    name="numberOfRandomSongs" 
                    value={numberOfRandomSongs} 
                    onChange={e => setNumberOfRandomSongs(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    min="1"
                    max={SONG_CATALOG.length}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
        )}
      </div>
      
      <div className="flex flex-col items-center justify-center mt-8">
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        <button onClick={handleCreateGame} disabled={isCreateButtonDisabled}
          className="flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-emerald-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 disabled:bg-slate-600 disabled:cursor-not-allowed">
          {state.isLoading ? 'Creating Game...' : 'Start Lobby & Get Link'}
          <ArrowRight size={24}/>
        </button>
      </div>
    </div>
  );
};

export default SetupPage;