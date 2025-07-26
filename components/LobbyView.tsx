import React, { useState, useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import { Play, UserPlus, Link as LinkIcon, Copy, Users, UserCheck } from 'lucide-react';
import { socketService } from '../services/socketService';
import { useGameActions } from '../hooks/useGameActions';

const LobbyView = () => {
  const { state, unlockAudio } = useGame();
  const { game, playerId, isOrganizer } = state;
  const { startGame } = useGameActions();

  const [playerName, setPlayerName] = useState('');
  const [copied, setCopied] = useState(false);
  
  const hasJoined = !!playerId && game?.players.some(p => p.id === playerId);
  const gameUrl = window.location.href;

  const handleJoinGame = (e: React.FormEvent) => {
    e.preventDefault();
    const nameToJoin = playerName.trim();
    if (nameToJoin && game) {
      if (game.players.some(p => p.name.toLowerCase() === nameToJoin.toLowerCase())) {
        alert("This name is already taken. Please choose another one.");
        return;
      }
      socketService.send({ type: 'JOIN_GAME', payload: { gameId: game.id, playerName: nameToJoin } });
    }
  };
  
  const handleStartGame = () => {
    if (game && game.players.length > 0) {
      // Unlock the audio context on the organizer's click. This is crucial for autoplay to work.
      unlockAudio();
      startGame();
    } else {
      alert('Add at least one player to start the game.');
    }
  };
  
  const copyToClipboard = () => {
    // The modern clipboard API is only available in secure contexts (HTTPS or localhost)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(gameUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      // Fallback for insecure contexts (like HTTP on a local network)
      const textArea = document.createElement("textarea");
      textArea.value = gameUrl;
      // Make the textarea invisible
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.width = "1px";
      textArea.style.height = "1px";
      textArea.style.padding = "0";
      textArea.style.border = "none";
      textArea.style.outline = "none";
      textArea.style.boxShadow = "none";
      textArea.style.background = "transparent";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        if (document.execCommand('copy')) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
      } catch (err) {
        console.error('Fallback copy failed', err);
        alert('Could not copy link. Please copy it manually.');
      }
      document.body.removeChild(textArea);
    }
  };

  const me = game?.players.find(p => p.id === playerId);

  const renderOrganizerView = () => (
    <>
      <h1 className="text-4xl font-bold mb-2">Game Lobby</h1>
      <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
        You are the Organizer! Share the link below with other players.
        As they join, the list of players will update here in real-time.
      </p>
      
      <div className="bg-slate-800 p-4 rounded-lg mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-2">
            <LinkIcon className="text-indigo-400" />
            <span className="font-semibold">Invite Link:</span>
        </div>
        <input type="text" readOnly value={gameUrl} className="w-full sm:w-auto flex-grow bg-slate-700 border-none p-2 rounded-md" />
        <button onClick={copyToClipboard} className="w-full sm:w-auto p-2 bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors flex items-center justify-center gap-2">
            {copied ? <><UserCheck size={20}/> Copied!</> : <><Copy size={20}/> Copy Link</>}
        </button>
      </div>
      
      <div className="bg-slate-800 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Players ({game?.players.length})</h2>
        <ul className="space-y-2 text-left max-h-60 overflow-y-auto">
          {game?.players.map(player => (
            <li key={player.id} className="bg-slate-700 p-3 rounded-md flex items-center gap-3 text-lg">
              <UserPlus size={20} className="text-slate-300" />
              {player.name} {player.isOrganizer && <span className="text-xs bg-indigo-500 px-2 py-0.5 rounded-full">Organizer</span>}
            </li>
          ))}
          {game?.players.length === 0 && <p className="text-slate-500 text-center py-4">Waiting for players to join...</p>}
        </ul>
      </div>

      <div className="mt-8">
        <button onClick={handleStartGame} disabled={!game || game.players.length === 0}
          className="flex items-center justify-center mx-auto gap-3 px-8 py-4 bg-indigo-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-indigo-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:bg-slate-600 disabled:cursor-not-allowed">
          <Play size={28}/> Start Game For Everyone
        </button>
      </div>
    </>
  );

  const renderPlayerView = () => {
    if (!hasJoined) {
        return (
            <div className="bg-slate-800 p-8 rounded-lg text-center max-w-lg mx-auto animate-fade-in">
                <Users size={64} className="mx-auto text-indigo-400 mb-4" />
                <h1 className="text-4xl font-bold mb-2">Join the Game</h1>
                <p className="text-slate-300 text-lg mb-6">Enter your name to join the lobby.</p>
                <form onSubmit={handleJoinGame} className="flex flex-col gap-4">
                    <input
                      type="text"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full text-center bg-slate-700 border border-slate-600 rounded-md p-3 text-lg focus:ring-2 focus:ring-emerald-500"
                      required
                      autoFocus
                    />
                    <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-3 bg-emerald-600 text-white font-bold text-xl rounded-md shadow-lg hover:bg-emerald-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300">
                        Join Lobby
                    </button>
                </form>
            </div>
        )
    }

    return (
     <div className="bg-slate-800 p-8 rounded-lg text-center max-w-2xl mx-auto">
        <UserCheck size={64} className="mx-auto text-emerald-400 mb-4" />
        <h1 className="text-4xl font-bold mb-2">Welcome, {me?.name}!</h1>
        <p className="text-slate-300 text-lg mb-6">
            You're in the lobby! The organizer will start the game soon.
        </p>
        <div className="bg-slate-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Players in Game ({game?.players.length})</h2>
          <ul className="space-y-2 text-left max-h-48 overflow-y-auto">
             {game?.players.map(player => (
              <li key={player.id} className={`bg-slate-600 p-3 rounded-md flex items-center gap-2 font-semibold ${player.id === playerId ? 'ring-2 ring-emerald-400' : ''}`}>
                <UserPlus size={16} className="text-slate-300" />
                {player.name}
              </li>
            ))}
          </ul>
        </div>
     </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
        {isOrganizer ? renderOrganizerView() : renderPlayerView()}
    </div>
  );
};

export default LobbyView;