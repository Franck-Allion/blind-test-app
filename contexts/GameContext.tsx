import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import { Game, GameStatus, Song } from '../types';
import { socketService } from '../services/socketService';
import { SONG_CATALOG } from '../services/mockData';

interface GameState {
  game: Game | null;
  isLoading: boolean;
  error: string | null;
  playerId: string | null;
  isOrganizer: boolean;
}

const defaultState: GameState = {
  game: null,
  isLoading: false,
  error: null,
  playerId: null,
  isOrganizer: false,
};

type Action =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_GAME_STATE'; payload: Game }
  | { type: 'SET_PLAYER_ID'; payload: { playerId: string; isOrganizer: boolean } }
  | { type: 'RESET_STATE' }
  | { type: 'SET_ERROR'; payload: string };

const gameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_GAME_STATE': {
      const serverGame = action.payload as any; // Acknowledge server payload differs from client Game type
    
      // Add logging as requested
      console.log('Received game state from server:', JSON.parse(JSON.stringify(serverGame)));

      // Enrich the playlist of IDs from the server into full Song objects for the client
      const enrichedPlaylist = serverGame.playlist
        .map((songId: string) => SONG_CATALOG.find(s => s.id === songId))
        .filter((song: Song | undefined): song is Song => !!song);
      
      const clientGame: Game = { ...serverGame, playlist: enrichedPlaylist };

      return { ...state, game: clientGame, isLoading: false };
    }
    case 'SET_PLAYER_ID':
      return { ...state, playerId: action.payload.playerId, isOrganizer: action.payload.isOrganizer };
    case 'RESET_STATE':
      return defaultState;
    case 'SET_ERROR':
        return {...state, error: action.payload, isLoading: false};
    default:
      return state;
  }
};

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<Action>;
}>({
  state: defaultState,
  dispatch: () => null,
});

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, defaultState);

  useEffect(() => {
    socketService.on('GAME_STATE_UPDATE', (game) => {
      dispatch({ type: 'SET_GAME_STATE', payload: game });
    });
    
    socketService.on('PLAYER_ID_SET', (payload) => {
      dispatch({ type: 'SET_PLAYER_ID', payload });
      // Persist the player's ID for this specific game
      localStorage.setItem(`blindtest-pro-playerId-${payload.gameId}`, payload.playerId);
      if (payload.isOrganizer) {
        localStorage.setItem(`blindtest-pro-isOrganizer-${payload.gameId}`, 'true');
      }
    });

    socketService.on('ERROR', (message) => {
        dispatch({ type: 'SET_ERROR', payload: message });
    });

    // The cleanup function that called socketService.disconnect() has been removed.
    // This was causing a race condition in React.StrictMode and was the root cause of the connection error.
    // The socket lifecycle is now managed by the GamePage and user actions.
  }, []);

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);