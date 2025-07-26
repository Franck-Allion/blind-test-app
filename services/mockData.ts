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
    audioUrl: '/public/audio/billie-jean-01.mp3',
    distractors: [
      'Like a Virgin - Madonna',
      'Take on Me - a-ha',
      'Thriller - Michael Jackson',
      'Beat It - Michael Jackson',
      'I Wanna Dance with Somebody - Whitney Houston',
      'Sweet Dreams - Eurythmics',
    ],
  },
  {
    id: 'song-2',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    year: 1975,
    tags: ['70s', 'Rock', 'Classic'],
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/11/23/audio_75c49b1191.mp3?filename=energetic-rock-trailer-126240.mp3',
    distractors: [
      'Stairway to Heaven - Led Zeppelin',
      'Hotel California - Eagles',
      'We Will Rock You - Queen',
      "Don't Stop Me Now - Queen",
      'Another Brick in the Wall - Pink Floyd',
    ],
  },
  {
    id: 'song-3',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    year: 1991,
    tags: ['90s', 'Rock', 'Grunge'],
    audioUrl: 'https://cdn.pixabay.com/download/audio/2024/05/23/audio_03d97f2628.mp3?filename=hard-rock-1-210174.mp3',
    distractors: [
      'Come As You Are - Nirvana',
      'Jeremy - Pearl Jam',
      'Black Hole Sun - Soundgarden',
      'Lithium - Nirvana',
      'Alive - Pearl Jam',
    ],
  },
  {
    id: 'song-4',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    year: 2017,
    tags: ['2010s', 'Pop'],
    audioUrl: 'https://cdn.pixabay.com/download/audio/2023/05/18/audio_14a04d1c16.mp3?filename=upbeat-and-happy-acoustic-93 upbeat-and-happy-acoustic-9310.mp3',
    distractors: [
      'Thinking Out Loud - Ed Sheeran',
      'Sorry - Justin Bieber',
      'Closer - The Chainsmokers',
    ],
  },
  {
    id: 'song-5',
    title: 'Wonderwall',
    artist: 'Oasis',
    year: 1995,
    tags: ['90s', 'Rock', 'Britpop'],
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/02/07/audio_f1b5e592a9.mp3?filename=inspiring-cinematic-ambient-116199.mp3',
    distractors: [
      'Champagne Supernova - Oasis',
      'Common People - Pulp',
      'Song 2 - Blur',
    ],
  },
  {
    id: 'song-6',
    title: 'Let It Be',
    artist: 'The Beatles',
    year: 1970,
    tags: ['70s', 'Rock', 'Classic'],
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/08/04/audio_a847909734.mp3?filename=piano-moment-9835.mp3',
    distractors: [
      'Hey Jude - The Beatles',
      'Imagine - John Lennon',
      'Bridge Over Troubled Water - Simon & Garfunkel',
    ],
  },
   {
    id: 'song-7',
    title: 'Hakuna Matata',
    artist: 'Elton John',
    year: 1994,
    tags: ['90s', 'Animation', 'Disney'],
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/08/03/audio_504746f194.mp3?filename=a-happy-and-fun-kids-song-for-games-and-videos-3932.mp3',
    distractors: [
      'Circle of Life - Elton John',
      'Under the Sea - Samuel E. Wright',
      'A Whole New World - Peabo Bryson & Regina Belle',
    ],
  },
  {
    id: 'song-8',
    title: 'Uptown Funk',
    artist: 'Mark Ronson ft. Bruno Mars',
    year: 2014,
    tags: ['2010s', 'Funk', 'Pop'],
    audioUrl: 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_5df78c937c.mp3?filename=trap-future-bass-royalty-free-music-161101.mp3',
    distractors: [
      '24K Magic - Bruno Mars',
      'Happy - Pharrell Williams',
      'Get Lucky - Daft Punk',
    ],
  }
];