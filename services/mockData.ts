import { Song } from '../types';

export const SONG_CATALOG: Song[] = [
  {
    id: 'song-1',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    year: 1982,
    tags: ['80s', 'Pop', 'Classic'],
    // This URL now points to a file served by our local backend.
    // Make sure you have a 'billie-jean.mp3' file in the 'public/audio' directory.
    audioUrls: ['/public/audio/billie-jean-01.mp3','/public/audio/billie-jean-02.mp3'],
    distractors: [
      'Take on Me - a-ha',
      'Thriller - Michael Jackson',
      'Beat It - Michael Jackson',
      'Sweet Dreams - Eurythmics',
    ],
  }
];