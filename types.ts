

export interface Song {
  id: string;
  title: string;
  artist: string;
  year: number;
  tags: string[];
  audioUrls: string[];
  distractors: string[];
  difficulty: number; // 1 (easy) to 5 (very difficult)
  movieTitle?: string;
  proofAudioUrl?: string; // Optional full song/proof audio to play at end of round
}

export interface GameSettings {
  timeToAnswer: number; // in seconds
  playsPerSong: number;
  pauseBetweenPlays: number; // in seconds
  showScoresAfterRound: boolean; // if true, all players see scores. If false, only organizer.
}

export interface Player {
  id:string;
  name: string;
  isBot: boolean;
  score: number;
  totalTime: number; // cumulative time in seconds for all answers
  answerCount: number; // total number of answers submitted
  isOrganizer: boolean;
}

export interface PlayerAnswer {
  playerId: string;
  songTitle?: string;
  artist?: string;
  isMultipleChoice: boolean;
  timeTaken: number; // in seconds
  score: number;
  titleMatch?: boolean;
  artistMatch?: boolean;
}

export interface RoundResult {
  songIndex: number;
  song: Song;
  answers: PlayerAnswer[];
}

export interface ServerRoundResult {
  songIndex: number;
  songId: string; // Server stores songId, client enriches to full Song
  answers: PlayerAnswer[];
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
  roundHistory: RoundResult[]; // Complete history of all rounds
}