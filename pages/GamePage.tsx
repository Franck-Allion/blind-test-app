import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import { GameStatus } from '../types';
import LobbyView from '../components/LobbyView';
import PlayerView from '../components/PlayerView';
import OrganizerView from '../components/OrganizerView';
import RoundOverView from '../components/RoundOverView';
import GameOverView from '../components/GameOverView';
import Spinner from '../components/Spinner';
import { socketService } from '../services/socketService';

const GamePage = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useGame();
  
  useEffect(() => {
    if (!gameId) {
      navigate('/');
      return;
    }
    
    dispatch({ type: 'SET_LOADING', payload: true });

    // Attempt to retrieve player identity from localStorage for this game
    const storedPlayerId = localStorage.getItem(`blindtest-pro-playerId-${gameId}`) || null;
    const storedIsOrganizer = localStorage.getItem(`blindtest-pro-isOrganizer-${gameId}`) === 'true';

    // If a player ID was found, set it in the context immediately
    if (storedPlayerId) {
      dispatch({ type: 'SET_PLAYER_ID', payload: { playerId: storedPlayerId, isOrganizer: storedIsOrganizer } });
    }
    
    // Connect to the WebSocket server for this game, passing the stored ID if it exists
    socketService.connect(gameId, storedPlayerId);

  }, [gameId, navigate, dispatch]);

  if (state.error) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
            <p className="text-slate-300 mb-6">{state.error}</p>
            <button onClick={() => navigate('/')} className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-500">
                Go Home
            </button>
        </div>
    );
  }

  if (!state.game || state.isLoading) {
    return <div className="w-full h-full flex items-center justify-center"><Spinner message="Joining game..." /></div>;
  }
  
  const renderContent = () => {
    switch (state.game?.status) {
      case GameStatus.LOBBY:
        return <LobbyView />;
      case GameStatus.IN_PROGRESS:
        // Use isOrganizer flag directly from state, which is now reliable
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PlayerView />
            </div>
            {state.isOrganizer && (
              <div>
                <OrganizerView />
              </div>
            )}
          </div>
        );
      case GameStatus.ROUND_OVER:
        return <RoundOverView />;
      case GameStatus.FINISHED:
        return <GameOverView />;
      default:
        return <div className="w-full h-full flex items-center justify-center"><Spinner message="Loading game..." /></div>;
    }
  };

  return <div className="animate-fade-in">{renderContent()}</div>;
};

export default GamePage;