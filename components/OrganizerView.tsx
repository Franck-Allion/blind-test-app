import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Award, CheckCircle2, Bot, User } from 'lucide-react';

const OrganizerView = () => {
    const { state } = useGame();
    const { game } = state;

    if (!game) return null;

    const { players, currentRoundAnswers } = game;

    // Sort players by score descending, then by totalTime ascending for tie-breaking
    const sortedPlayers = [...players].sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.totalTime - b.totalTime;
    });

    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-xl h-full">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-amber-400"/>
                Live Scoreboard
            </h2>
            <ul className="space-y-3">
                {sortedPlayers.map((player, index) => {
                    const hasAnswered = currentRoundAnswers.some(a => a.playerId === player.id);
                    return (
                        <li key={player.id} className="flex items-center justify-between bg-slate-700 p-3 rounded-md animate-fade-in">
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-lg w-6 text-center">{index + 1}</span>
                                {player.isBot ? <Bot size={20} className="text-slate-400" /> : <User size={20} className="text-slate-300" />}
                                <span className="font-semibold">{player.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                {hasAnswered && <span title="Answered"><CheckCircle2 size={20} className="text-emerald-400"/></span>}
                                <span className="font-bold text-lg text-amber-300">{player.score} pts</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default OrganizerView;
