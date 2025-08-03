import React, { useState } from 'react';
import { RoundResult, PlayerAnswer, Player } from '../types';
import { Clock, CheckCircle, XCircle, Music, User, ChevronDown, ChevronRight } from 'lucide-react';

interface DetailedResultsProps {
  roundHistory: RoundResult[];
  players: Player[];
  currentPlayerId: string | null;
}

const DetailedResults: React.FC<DetailedResultsProps> = ({ roundHistory, players, currentPlayerId }) => {
  const [expandedRounds, setExpandedRounds] = useState<Set<number>>(new Set());

  const toggleRound = (roundIndex: number) => {
    const newExpanded = new Set(expandedRounds);
    if (newExpanded.has(roundIndex)) {
      newExpanded.delete(roundIndex);
    } else {
      newExpanded.add(roundIndex);
    }
    setExpandedRounds(newExpanded);
  };

  const getPlayerName = (playerId: string) => {
    const player = players.find(p => p.id === playerId);
    return player?.name || 'Unknown Player';
  };

  const getPlayerAnswer = (roundResult: RoundResult, playerId: string): PlayerAnswer | null => {
    return roundResult.answers.find(answer => answer.playerId === playerId) || null;
  };

  const getScoreIcon = (score: number) => {
    if (score > 0) {
      return <CheckCircle className="text-green-400" size={16} />;
    }
    return <XCircle className="text-red-400" size={16} />;
  };

  const getScoreColor = (score: number) => {
    if (score >= 5) return 'text-green-400';
    if (score >= 2) return 'text-yellow-400';
    if (score > 0) return 'text-orange-400';
    return 'text-red-400';
  };

  const currentPlayer = players.find(p => p.id === currentPlayerId);

  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Music size={24} className="text-blue-400" />
        Song by Song Results
      </h3>
      
      {roundHistory.length === 0 ? (
        <p className="text-slate-400">No rounds completed yet.</p>
      ) : (
        <div className="space-y-4">
          {roundHistory.map((round, roundIndex) => {
            const isExpanded = expandedRounds.has(roundIndex);
            const currentPlayerAnswer = currentPlayerId ? getPlayerAnswer(round, currentPlayerId) : null;
            
            return (
              <div key={roundIndex} className="bg-slate-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleRound(roundIndex)}
                  className="w-full p-4 text-left hover:bg-slate-600 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    <div>
                      <h4 className="font-semibold text-lg">{round.song.title}</h4>
                      <p className="text-slate-300">by {round.song.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {currentPlayerAnswer && (
                      <div className="flex items-center gap-2">
                        {getScoreIcon(currentPlayerAnswer.score)}
                        <span className={`font-bold ${getScoreColor(currentPlayerAnswer.score)}`}>
                          {currentPlayerAnswer.score} pts
                        </span>
                      </div>
                    )}
                    <span className="text-slate-400 text-sm">
                      {round.answers.length} answer{round.answers.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-slate-600">
                    <div className="mt-4 grid gap-3">
                      {round.answers.length === 0 ? (
                        <p className="text-slate-400 italic">No one answered this song.</p>
                      ) : (
                        round.answers
                          .sort((a, b) => b.score - a.score || a.timeTaken - b.timeTaken)
                          .map((answer, answerIndex) => {
                            const isCurrentPlayer = answer.playerId === currentPlayerId;
                            
                            return (
                              <div 
                                key={answerIndex} 
                                className={`p-3 rounded-md border-l-4 ${
                                  isCurrentPlayer 
                                    ? 'bg-blue-900/30 border-blue-400' 
                                    : 'bg-slate-600 border-slate-500'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <User size={16} className={isCurrentPlayer ? 'text-blue-400' : 'text-slate-400'} />
                                    <span className={`font-semibold ${isCurrentPlayer ? 'text-blue-300' : 'text-white'}`}>
                                      {getPlayerName(answer.playerId)}
                                      {isCurrentPlayer && ' (You)'}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                      <Clock size={14} className="text-slate-400" />
                                      <span className="text-slate-300 text-sm">{answer.timeTaken.toFixed(1)}s</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      {getScoreIcon(answer.score)}
                                      <span className={`font-bold ${getScoreColor(answer.score)}`}>
                                        {answer.score} pts
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="text-sm space-y-1">
                                  {answer.songTitle && (
                                    <div className="flex items-center gap-2">
                                      <span className="text-slate-400">Title:</span>
                                      <span className={
                                        answer.isMultipleChoice 
                                          ? answer.score > 0 ? 'text-amber-400' : 'text-red-400'
                                          : answer.titleMatch ? 'text-green-400' : 'text-red-400'
                                      }>
                                        {answer.songTitle}
                                      </span>
                                      {((answer.isMultipleChoice && answer.score > 0) || (!answer.isMultipleChoice && answer.titleMatch)) && (
                                        <CheckCircle 
                                          size={12} 
                                          className={answer.isMultipleChoice ? 'text-amber-400' : 'text-green-400'} 
                                        />
                                      )}
                                    </div>
                                  )}
                                  {answer.artist && (
                                    <div className="flex items-center gap-2">
                                      <span className="text-slate-400">Artist:</span>
                                      <span className={
                                        answer.isMultipleChoice 
                                          ? answer.score > 0 ? 'text-amber-400' : 'text-red-400'
                                          : answer.artistMatch ? 'text-green-400' : 'text-red-400'
                                      }>
                                        {answer.artist}
                                      </span>
                                      {((answer.isMultipleChoice && answer.score > 0) || (!answer.isMultipleChoice && answer.artistMatch)) && (
                                        <CheckCircle 
                                          size={12} 
                                          className={answer.isMultipleChoice ? 'text-amber-400' : 'text-green-400'} 
                                        />
                                      )}
                                    </div>
                                  )}
                                  {answer.isMultipleChoice && (
                                    <span className="text-xs text-slate-500">(Multiple Choice)</span>
                                  )}
                                </div>
                              </div>
                            );
                          })
                      )}
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-slate-600">
                      <p className="text-slate-400 text-sm">
                        <strong>Correct Answer:</strong> {round.song.title} by {round.song.artist}
                        {round.song.year && ` (${round.song.year})`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DetailedResults;
