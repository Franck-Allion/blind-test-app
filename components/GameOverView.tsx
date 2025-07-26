import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import { useGameActions } from '../hooks/useGameActions';
import { Trophy, Clock, RotateCw } from 'lucide-react';
import { socketService } from '../services/socketService';

const GameOverView = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useGame();
    const { resetGame } = useGameActions();
    const { game } = state;

    if (!game) return null;

    const { players } = game;

    // Sort players by score descending, then by totalTime ascending for tie-breaking
    const finalRanking = [...players].sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.totalTime - b.totalTime;
    });

    const winner = finalRanking[0];

    const handlePlayAgain = () => {
        // First, tell the server to delete the game state
        resetGame();
        // Then, perform client-side cleanup
        socketService.disconnect();
        dispatch({ type: 'RESET_STATE' });
        navigate('/setup');
    };

    return (
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-extrabold mb-4">Game Over!</h1>
            
            {winner && (
                <div className="bg-slate-800 p-8 rounded-lg mb-8 border-2 border-amber-400 shadow-2xl">
                    <Trophy className="mx-auto text-amber-400 mb-4" size={64} />
                    <h2 className="text-3xl font-bold text-amber-300">And the winner is... {winner.name}!</h2>
                    <p className="text-xl text-slate-300">with a score of {winner.score} points!</p>
                </div>
            )}

            <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Final Leaderboard</h3>
                <ul className="space-y-3">
                    {finalRanking.map((player, index) => (
                        <li key={player.id} className={`flex items-center justify-between p-4 rounded-md ${index === 0 ? 'bg-amber-900/50' : 'bg-slate-700'}`}>
                            <div className="flex items-center gap-4">
                                <span className={`font-bold text-xl w-8 text-center ${index === 0 ? 'text-amber-300' : ''}`}>{index + 1}</span>
                                <span className="font-semibold text-lg">{player.name}</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="font-bold text-lg text-amber-300 w-24 text-right">{player.score} pts</span>
                                <div className="flex items-center gap-2 text-slate-400" title="Total time for correct answers">
                                    <Clock size={16}/>
                                    <span>{player.totalTime.toFixed(1)}s</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

             <div className="mt-8">
                <button
                    onClick={handlePlayAgain}
                    className="flex items-center justify-center mx-auto gap-3 px-8 py-4 bg-emerald-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-emerald-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                >
                    <RotateCw size={24} />
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default GameOverView;