

export interface Song {
  id: string;
  title: string;
  artist: string;
  year: number;
  tags: string[];
  audioUrls: string[];
  distractors: string[];
}

export interface GameSettings {
  timeToAnswer: number; // in seconds
  playsPerSong: number;
  pauseBetweenPlays: number; // in seconds
}

export interface Player {
  id: string;
  name: string;
  isBot: boolean;
  score: number;
  totalTime: number; // cumulative time in seconds for all correct answers
  isOrganizer: boolean;
}

export interface PlayerAnswer {
  playerId: string;
  songTitle?: string;
  artist?: string;
  isMultipleChoice: boolean;
  timeTaken: number; // in seconds
  score: number;
}

export enum GameStatus {
  CONFIGURING = 'CONFIGURING',
  LOBBY = 'LOBBY',
  IN_PROGRESS = 'IN_PROGRESS',
  ROUND_OVER = 'ROUND_OVER',
  FINISHED = 'FINISHED',
}

export interface Game {
  id: string;
  status: GameStatus;
  settings: GameSettings;
  playlist: Song[]; // The client-side playlist is enriched with full song objects
  players: Player[];
  currentSongIndex: number;
  currentRoundAnswers: PlayerAnswer[];
}