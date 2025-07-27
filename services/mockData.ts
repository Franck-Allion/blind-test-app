import { Song } from '../types';

export const SONG_CATALOG: Song[] = [
  {
    id: 'song-1',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    year: 1982,
    difficulty: 2,
    // 50s, 60s, 70s, 80s, 90s, 2000s, 2010s, 2020s
    // Pop, Rock, Hip-Hop, Rap, R&B, Country, Jazz, Classical, Anime, K-Pop, Electro, Soul, Funk, Disco, House, Reggae
    // Metal, Punk, Grunge, Movie
    tags: ['80s', 'Pop', 'Classic'],
    audioUrls: ['/public/audio/billie-jean-01.mp3','/public/audio/billie-jean-02.mp3'],
    distractors: [
      'Take on Me - a-ha',
      'Thriller - Michael Jackson',
      'Beat It - Michael Jackson',
      'Sweet Dreams - Eurythmics',
    ],
  },
  {
    id: 'song-7',
    title: 'Hakuna Matata',
    artist: 'Elton John',
    year: 1994,
    difficulty: 1,
    tags: ['90s', 'Animation', 'Movie'],
    movieTitle: 'Le roi Lion',
    audioUrls: ['/public/audio/hakuna-matata-01.mp3','/public/audio/hakuna-matata-02.mp3','/public/audio/hakuna-matata-03.mp3'],
    distractors: [
      'Aladdin',
      'La petite sirène',
      'Pinocchio',
      'Frère des ours',
      'Dinosaure'
    ],
  },
];