import React from 'react';
import { useGame } from '../contexts/GameContext';
import { useGameActions } from '../hooks/useGameActions';
import { ArrowRight, Music } from 'lucide-react';

const RoundOverView = () => {
    const { state } = useGame();
    const { game, isOrganizer } = state;
    const { nextRound, finishGame } = useGameActions();

    if (!game) return null;

    const currentSong = game.playlist[game.currentSongIndex];
    const isLastSong = game.currentSongIndex === game.playlist.length - 1;
    const showScores = game.settings.showScoresAfterRound || isOrganizer;

    const handleNext = () => {
        if (isLastSong) {
            finishGame();
        } else {
            nextRound();
        }
    };
    
    const sortedPlayers = [...game.players].sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.totalTime - b.totalTime;
    });

    if (!currentSong) {
        return <div>Loading...</div>;
    }
    
    const isMovieSong = currentSong.tags.includes('Movie') && currentSong.movieTitle;

    return (
        <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <h1 className="text-4xl font-bold mb-4">Round Over!</h1>
            
            <div className="bg-slate-800 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-2 text-slate-300">The correct answer was:</h2>
                {isMovieSong ? (
                  <>
                    <p className="text-3xl font-bold text-emerald-400 flex items-center justify-center gap-3">
                        <Music /> {currentSong.movieTitle}
                    </p>
                    <p className="text-slate-400 mt-1">(from the song "{currentSong.title}" by {currentSong.artist})</p>
                  </>
                ) : (
                  <p className="text-3xl font-bold text-emerald-400 flex items-center justify-center gap-3">
                      <Music /> {currentSong.title} - {currentSong.artist}
                  </p>
                )}
            </div>

            {showScores && (
                <div className="bg-slate-800 p-6 rounded-lg mb-8 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4">Current Standings</h3>
                    <ul className="space-y-2 text-left">
                        {sortedPlayers.map((player, index) => (
                            <li key={player.id} className="flex items-center justify-between bg-slate-700 p-3 rounded-md">
                                <span className="font-semibold">{index + 1}. {player.name}</span>
                                <span className="font-bold text-lg text-amber-300">{player.score} pts</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}


            {isOrganizer && (
                 <button
                    onClick={handleNext}
                    className="flex items-center justify-center mx-auto gap-3 px-8 py-4 bg-indigo-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-indigo-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                    {isLastSong ? 'Finish Game & See Final Results' : 'Start Next Song'}
                    <ArrowRight size={24} />
                </button>
            )}
            {!isOrganizer && (
                <p className="text-slate-300 text-lg">Waiting for the organizer to start the next round...</p>
            )}
        </div>
    );
};

export default RoundOverView;