import React, { createContext, useReducer, useContext, ReactNode, useEffect, useRef, useCallback } from 'react';
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
    
      console.log('Received game state from server:', JSON.parse(JSON.stringify(serverGame)));

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

interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<Action>;
  unlockAudio: () => void;
  playSong: (url: string) => void;
  pauseSong: () => void;
}

const GameContext = createContext<GameContextType>({
  state: defaultState,
  dispatch: () => null,
  unlockAudio: () => {},
  playSong: () => {},
  pauseSong: () => {},
});

const serverHostname = window.location.hostname;
const API_URL = `http://${serverHostname}:8080`;

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, defaultState);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const audioUnlocked = useRef(false);

  useEffect(() => {
    // Initialize the audio element only once on the client side
    if (!audioPlayerRef.current) {
        audioPlayerRef.current = new Audio();
    }
  }, []);

  const unlockAudio = useCallback(() => {
    if (audioUnlocked.current || !audioPlayerRef.current) return;
    
    console.log('Attempting to unlock audio context...');
    const audio = audioPlayerRef.current;
    audio.muted = true;
    audio.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
    
    const promise = audio.play();
    if (promise !== undefined) {
      promise.then(() => {
        audio.pause();
        audio.muted = false; // Unmute for actual playback
        audioUnlocked.current = true;
        console.log('Audio context unlocked successfully.');
      }).catch(error => {
        console.error('Audio context unlock failed. User may need to interact again.', error);
      });
    } else {
        audioUnlocked.current = true;
    }
  }, []);

  const playSong = useCallback((url: string) => {
    if (!audioPlayerRef.current) return;
    
    let finalUrl = url;
    if (url.startsWith('/audio/')) {
        finalUrl = `${API_URL}${url}`;
    }

    console.log(`[Audio] Playing song from URL: ${finalUrl}`);
    audioPlayerRef.current.src = finalUrl;
    audioPlayerRef.current.currentTime = 0;
    const playPromise = audioPlayerRef.current.play();
     if (playPromise !== undefined) {
        playPromise.catch(error => console.error("Error playing song:", error));
    }
  }, []);
  
  const pauseSong = useCallback(() => {
      if (!audioPlayerRef.current) return;
      console.log("[Audio] Pausing song.");
      if (!audioPlayerRef.current.paused) {
        audioPlayerRef.current.pause();
      }
  }, []);

  useEffect(() => {
    socketService.on('GAME_STATE_UPDATE', (game) => {
      dispatch({ type: 'SET_GAME_STATE', payload: game });
    });
    
    socketService.on('PLAYER_ID_SET', (payload) => {
      dispatch({ type: 'SET_PLAYER_ID', payload });
      localStorage.setItem(`blindtest-pro-playerId-${payload.gameId}`, payload.playerId);
      if (payload.isOrganizer) {
        localStorage.setItem(`blindtest-pro-isOrganizer-${payload.gameId}`, 'true');
      }
    });

    socketService.on('ERROR', (message) => {
        dispatch({ type: 'SET_ERROR', payload: message });
    });
  }, []);

  return <GameContext.Provider value={{ state, dispatch, unlockAudio, playSong, pauseSong }}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);