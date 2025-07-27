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
    id: 'song-2',
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
  {
    id: 'song-3',
    title: 'Tik Tok',
    artist: 'Kesha',
    year: 2009,
    tags: ['2000s', 'Pop', 'Electro'],
    audioUrls: ['/public/audio/TiK ToK_segment_00m00s.mp3','/public/audio/TiK ToK_segment_01m25s.mp3','/public/audio/TiK ToK_segment_02m30s.mp3'],
    difficulty: 2,
    distractors: [
    "Just Dance - Lady Gaga",
    "California Gurls - Katy Perry",
    "Party in the U.S.A. - Miley Cyrus",
    "Right Round - Flo Rida"
  ]
},
{  
  id: 'song-4',
  title: "Bad Romance",
  artist: "Lady Gaga",
  year: 2009,
  audioUrls: ['/public/audio/Bad Romance_segment_03m30s.mp3','/public/audio/Bad Romance_segment_00m00s.mp3','/public/audio/Bad Romance_segment_01m14s'],
  tags: ["2000s", "Pop", "Electro"],
  difficulty: 2,
  distractors: [
    "Just Dance - Lady Gaga",
    "Poker Face - Lady Gaga",
    "California Gurls - Katy Perry",
    "Tik Tok - Kesha",
    "Only Girl (In The World) - Rihanna"
  ]
},
{
  "id": 'song-5',
  "title": "Hey, Soul Sister",
  "artist": "Train",
  "year": 2009,
  audioUrls: ['/public/audio/Train - Hey, Soul Sister_segment_00m00s.mp3','/public/audio/Train - Hey, Soul Sister_segment_00m50s.mp3','/public/audio/Train - Hey, Soul Sister_segment_02m25s.mp3'],
  "tags": ["2000s", "Pop", "Rock"],
  "difficulty": 3,
  "distractors": [
    "I'm Yours - Jason Mraz",
    "Rude - MAGIC!",
    "Banana Pancakes - Jack Johnson",
    "She Will Be Loved - Maroon 5",
    "You and Me - Lifehouse"
  ]
},
{
  "id": 'song-6',    
  "title": "California Gurls",
  "artist": "Katy Perry",
  "year": 2010,
  audioUrls: ['/public/audio/Katy Perry - California Gurls_segment_02m30s.mp3','/public/audio/Katy Perry - California Gurls_segment_00m00s.mp3','/public/audio/Katy Perry - California Gurls_segment_00m20s.mp3'],
  "tags": ["2010s", "Pop", "Electro"],
  "difficulty": 2,
  "distractors": [
    "Tik Tok - Kesha",
    "Starships - Nicki Minaj",
    "Only Girl (In The World) - Rihanna",
    "Teenage Dream - Katy Perry",
    "Just Dance - Lady Gaga"
  ]
},
{
  "id": 'song-7', 
  "title": "Airplanes",
  "artist": "B.o.B",
  "year": 2010,
  audioUrls: ['/public/audio/B.o.B - Airplanes_segment_02m26s.mp3','/public/audio/B.o.B - Airplanes_segment_00m29s.mp3','/public/audio/B.o.B - Airplanes_segment_01m00s.mp3'],
  "tags": ["2010s", "Hip-Hop", "Rap", "Pop"],
  "difficulty": 3,
  "distractors": [
    "Love the Way You Lie - Eminem ft. Rihanna",
    "Nothin' on You - B.o.B ft. Bruno Mars",
    "The Monster - Eminem ft. Rihanna",
    "Price Tag - Jessie J ft. B.o.B",
    "Coming Home - Diddy – Dirty Money ft. Skylar Grey"
  ]
}
];