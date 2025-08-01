

import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../contexts/GameContext';
import { useGameActions } from '../hooks/useGameActions';
import { Volume2, Send, Clock, Loader, HelpCircle } from 'lucide-react';
import Spinner from './Spinner';

const PlayerView = () => {
  const { state, playSong, pauseSong } = useGame();
  const { handlePlayerAnswer, handleMultipleChoiceAnswer, runBotActions } = useGameActions();
  const { game, playerId, isOrganizer } = state;
  
  const [userAnswer, setUserAnswer] = useState({ title: '', artist: '' });
  const [mcqOptions, setMcqOptions] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(game?.settings.timeToAnswer ?? 60);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showMcq, setShowMcq] = useState(false);
  const [isPreparingSong, setIsPreparingSong] = useState(true);
  const [persistentAnswerType, setPersistentAnswerTypeState] = useState<'multiple-choice' | 'free-text' | null>(null);

  const timerRef = useRef<number | null>(null);
  const pauseTimerRef = useRef<number | null>(null);
  const playsCounterRef = useRef(0);

  const currentSong = game ? game.playlist[game.currentSongIndex] : null;
  const isMovieSong = currentSong?.tags.includes('Movie') && currentSong.movieTitle;

  // Helper functions for persistent choice tracking
  const getChoiceStorageKey = (gameId: string, playerId: string, roundIndex: number) => 
    `blindtest-choice-${gameId}-${playerId}-${roundIndex}`;

  const getPersistentChoiceType = (gameId: string, playerId: string, roundIndex: number): 'multiple-choice' | 'free-text' | null => {
    if (!gameId || !playerId) return null;
    const stored = localStorage.getItem(getChoiceStorageKey(gameId, playerId, roundIndex));
    return stored as 'multiple-choice' | 'free-text' | null;
  };

  const setPersistentChoiceType = (gameId: string, playerId: string, roundIndex: number, choiceType: 'multiple-choice' | 'free-text') => {
    if (!gameId || !playerId) return;
    localStorage.setItem(getChoiceStorageKey(gameId, playerId, roundIndex), choiceType);
  };

  // Helper functions for tracking actual answer submission
  const getSubmissionStorageKey = (gameId: string, playerId: string, roundIndex: number) => 
    `blindtest-submitted-${gameId}-${playerId}-${roundIndex}`;

  const hasSubmittedAnswer = (gameId: string, playerId: string, roundIndex: number): boolean => {
    if (!gameId || !playerId) return false;
    const stored = localStorage.getItem(getSubmissionStorageKey(gameId, playerId, roundIndex));
    return stored === 'true';
  };

  const markAnswerSubmitted = (gameId: string, playerId: string, roundIndex: number) => {
    if (!gameId || !playerId) return;
    localStorage.setItem(getSubmissionStorageKey(gameId, playerId, roundIndex), 'true');
  };

  useEffect(() => {
    if (game && playerId) {
        const playerHasAnsweredThisRound = game.currentRoundAnswers.some(a => a.playerId === playerId);
        
        // Check persistent storage for choice type
        const storedChoiceType = getPersistentChoiceType(game.id, playerId, game.currentSongIndex);
        setPersistentAnswerTypeState(storedChoiceType);
        
        // Check if player has actually submitted an answer (not just chosen a type)
        const hasSubmittedPersistently = hasSubmittedAnswer(game.id, playerId, game.currentSongIndex);
        
        // Player has answered if they're in current round answers OR if they have actually submitted
        const hasAnsweredPersistently = playerHasAnsweredThisRound || hasSubmittedPersistently;
        setHasAnswered(hasAnsweredPersistently);
    }
  }, [game?.currentRoundAnswers, game?.currentSongIndex, game?.id, playerId]);

  useEffect(() => {
    if (!currentSong || !game) return;
    
    // Reset state for the new round
    setIsPreparingSong(true);
    setUserAnswer({ title: '', artist: '' });
    setMcqOptions([]);
    
    // Check if player already made a choice for this round
    if (game && playerId) {
      const storedChoice = getPersistentChoiceType(game.id, playerId, game.currentSongIndex);
      setShowMcq(storedChoice === 'multiple-choice');
    } else {
      setShowMcq(false);
    }
    
    // Prepare MCQ options immediately
    let options: string[];
    if (isMovieSong) {
        const correctAnswer = currentSong.movieTitle!;
        const shuffledDistractors = [...currentSong.distractors].sort(() => Math.random() - 0.5);
        const selectedDistractors = shuffledDistractors.slice(0, 3);
        options = [correctAnswer, ...selectedDistractors];
    } else {
        const correctAnswer = `${currentSong.title} - ${currentSong.artist}`;
        const shuffledDistractors = [...currentSong.distractors].sort(() => Math.random() - 0.5);
        const selectedDistractors = shuffledDistractors.slice(0, 3);
        options = [correctAnswer, ...selectedDistractors];
    }
    const finalShuffledOptions = options.sort(() => Math.random() - 0.5);
    setMcqOptions(finalShuffledOptions);

    // --- Playback Logic ---
    const { audioUrls } = currentSong;
    const randomUrl = audioUrls[Math.floor(Math.random() * audioUrls.length)];
    playsCounterRef.current = 0;
    
    const playLoop = () => {
      // Re-read settings from game object in case they could change, though they shouldn't mid-game.
      if (!isOrganizer || !game || playsCounterRef.current >= game.settings.playsPerSong) return;
      
      playsCounterRef.current++;
      console.log(`[Audio] Playing song attempt #${playsCounterRef.current}`);

      playSong(randomUrl, () => { // onEnded callback
        if (playsCounterRef.current < game.settings.playsPerSong) {
            console.log(`[Audio] Song ended. Pausing for ${game.settings.pauseBetweenPlays} seconds.`);
          pauseTimerRef.current = window.setTimeout(playLoop, game.settings.pauseBetweenPlays * 1000);
        } else {
          console.log('[Audio] Final play finished.');
        }
      });
    };

    // After a 2-second delay, start the song and timer
    const preparationTimer = setTimeout(() => {
      setIsPreparingSong(false);

      if (isOrganizer) {
          playLoop(); // Start the playback loop
          runBotActions();
      }
      
      // --- ROBUST TIMER LOGIC ---
      setTimeRemaining(game.settings.timeToAnswer);
      const roundEndTime = performance.now() + game.settings.timeToAnswer * 1000;

      const timerLoop = () => {
        const now = performance.now();
        const timeLeftMs = roundEndTime - now;

        if (timeLeftMs <= 0) {
          setTimeRemaining(0);
          return; // Stop the loop
        }

        const secondsLeft = Math.ceil(timeLeftMs / 1000);
        // Only update state if the displayed second value changes to avoid re-rendering every frame
        setTimeRemaining(prev => (prev !== secondsLeft ? secondsLeft : prev));

        timerRef.current = requestAnimationFrame(timerLoop);
      };
      timerRef.current = requestAnimationFrame(timerLoop);
      // --- END OF ROBUST TIMER LOGIC ---

    }, 2000); // 2-second pause

    return () => {
      clearTimeout(preparationTimer);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
      if (isOrganizer) {
        pauseSong();
      }
    };
  }, [currentSong, isOrganizer, runBotActions, playSong, pauseSong]);

  const onFreeTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.title && !userAnswer.artist) return;
    if (hasAnswered || !game || !playerId) return;
    
    // Prevent submission if player already chose multiple choice
    if (persistentAnswerType === 'multiple-choice') return;
    
    // Store that this player chose free text for this round
    setPersistentChoiceType(game.id, playerId, game.currentSongIndex, 'free-text');
    
    // Mark that this player has actually submitted an answer
    markAnswerSubmitted(game.id, playerId, game.currentSongIndex);
    
    const timeTaken = game.settings.timeToAnswer - timeRemaining;
    handlePlayerAnswer(userAnswer, timeTaken);
    setHasAnswered(true);
  };
  
  const onMcqSubmit = (choice: string) => {
    if (hasAnswered || !game || !playerId) return;
    
    // Prevent submission if player already chose free text
    if (persistentAnswerType === 'free-text') return;
    
    // Store that this player chose multiple choice for this round (this should already be stored from handleShowMcqClick)
    setPersistentChoiceType(game.id, playerId, game.currentSongIndex, 'multiple-choice');
    
    // Mark that this player has actually submitted an answer
    markAnswerSubmitted(game.id, playerId, game.currentSongIndex);
    
    const timeTaken = game.settings.timeToAnswer - timeRemaining;
    handleMultipleChoiceAnswer(choice, timeTaken);
    setHasAnswered(true);
  };

  const handleShowMcqClick = () => {
    if (!game || !playerId) return;
    
    // Check localStorage directly to be sure
    const currentChoice = getPersistentChoiceType(game.id, playerId, game.currentSongIndex);
    
    // Prevent switching to multiple choice if player already chose free text
    if (currentChoice === 'free-text') return;
    
    // Store that this player chose to see multiple choice for this round
    setPersistentChoiceType(game.id, playerId, game.currentSongIndex, 'multiple-choice');
    setPersistentAnswerTypeState('multiple-choice');
    setShowMcq(true);
  };

  const timerColor = timeRemaining > 20 ? 'text-emerald-400' : timeRemaining > 10 ? 'text-amber-400' : 'text-red-500';

  if (!game || !currentSong) {
        console.log('PlayerView waiting for song. Game state:', game, 'Current song:', currentSong);
    return <div className="h-full flex flex-col items-center justify-center bg-slate-800 rounded-lg p-8"><Spinner message="Preparing next song..." /></div>;
  }
  
  if (isPreparingSong) {
      return (
        <div className="h-full flex flex-col items-center justify-center bg-slate-800 rounded-lg p-8">
            <Spinner message={`Get ready for the next song...`} />
        </div>
      );
  }

  return (
    <div className="bg-slate-800 p-6 md:p-8 rounded-lg shadow-2xl animate-slide-in-up">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Song {game.currentSongIndex + 1} / {game.playlist.length}</h2>
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-full">
            <Clock className={timerColor} size={24} />
            <span className={`text-2xl font-mono font-bold ${timerColor}`}>{timeRemaining}s</span>
        </div>
      </div>

      <div className="bg-slate-900 rounded-lg p-6 mb-6 flex flex-col items-center justify-center">
        <Volume2 size={48} className="text-indigo-400 mb-4 animate-pulse" />
        <p className="text-slate-300">{isMovieSong ? 'Listen carefully... What movie is this from?' : 'Listen carefully... What is this song?'}</p>
      </div>

      {hasAnswered ? (
        <div className="text-center p-8 bg-slate-900 rounded-lg">
            <h3 className="text-2xl font-bold text-emerald-400">Answer Submitted!</h3>
            <p className="text-slate-300">
              {hasSubmittedAnswer(game?.id || '', playerId || '', game?.currentSongIndex || 0)
                ? persistentAnswerType === 'multiple-choice' 
                  ? 'You submitted a multiple choice answer (1 point)'
                  : `You submitted a ${isMovieSong ? 'free text answer (3 points)' : 'free text answer (up to 5 points)'}`
                : 'Waiting for other players or for the time to run out...'
              }
            </p>
        </div>
      ) : (
        <div className="space-y-6">
            {!showMcq && persistentAnswerType !== 'multiple-choice' ? (
              <>
                <form onSubmit={onFreeTextSubmit} className="space-y-4">
                    <p className="font-semibold text-lg text-center">
                      {isMovieSong ? 'Type your answer (3 points)' : 'Type your answer (5 points for both, 2 for one)'}
                    </p>
                    <div className={isMovieSong ? '' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                        <input 
                          type="text" 
                          placeholder={isMovieSong ? "Movie Name" : "Song Title"} 
                          value={userAnswer.title} 
                          onChange={e => {
                            setUserAnswer({...userAnswer, title: e.target.value});
                            // Lock into free text choice once user starts typing
                            if (e.target.value.trim() && game && playerId && !persistentAnswerType) {
                              setPersistentChoiceType(game.id, playerId, game.currentSongIndex, 'free-text');
                              setPersistentAnswerTypeState('free-text');
                            }
                          }} 
                          className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                        />
                        {!isMovieSong && (
                          <input 
                            type="text" 
                            placeholder="Artist" 
                            value={userAnswer.artist} 
                            onChange={e => {
                              setUserAnswer({...userAnswer, artist: e.target.value});
                              // Lock into free text choice once user starts typing
                              if (e.target.value.trim() && game && playerId && !persistentAnswerType) {
                                setPersistentChoiceType(game.id, playerId, game.currentSongIndex, 'free-text');
                                setPersistentAnswerTypeState('free-text');
                              }
                            }} 
                            className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-2 focus:ring-indigo-500"
                          />
                        )}
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 font-bold p-3 rounded-md transition-colors"><Send size={18}/>Submit Answer</button>
                </form>

                <div className="flex items-center gap-4">
                    <hr className="flex-grow border-slate-600"/>
                    <span className="text-slate-400">OR</span>
                    <hr className="flex-grow border-slate-600"/>
                </div>

                {persistentAnswerType !== 'free-text' && (
                  <button onClick={handleShowMcqClick} className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 font-bold p-3 rounded-md transition-colors">
                      <HelpCircle size={18}/>
                      Show Multiple Choice (1 point)
                  </button>
                )}
              </>
            ) : (
              <div>
                  <p className="font-semibold text-lg text-center mb-4">Choose an answer (1 point)</p>
                  {mcqOptions.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {mcqOptions.map((option, index) => (
                          <button key={index} onClick={() => onMcqSubmit(option)} className="text-left p-3 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors">
                              {option}
                          </button>
                      ))}
                  </div>
                  ) : (
                      <div className="flex justify-center items-center gap-2 text-slate-400">
                          <Loader className="animate-spin" size={20} />
                          <span>Preparing options...</span>
                      </div>
                  )}
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default PlayerView;