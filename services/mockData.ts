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
    audioUrls: ['/public/audio/001/billie-jean-01.mp3','/public/audio/001/billie-jean-02.mp3'],
    proofAudioUrl: '/public/audio/001/billie-jean-answer.mp3', // Full song for proof
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
    audioUrls: ['/public/audio/001/hakuna-matata-01.mp3','/public/audio/001/hakuna-matata-02.mp3','/public/audio/001/hakuna-matata-03.mp3'],
    proofAudioUrl: '/public/audio/001/hakuna-matata-full.mp3', // Full song for proof
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
    audioUrls: ['/public/audio/001/TiK ToK_segment_00m00s.mp3','/public/audio/001/TiK ToK_segment_01m25s.mp3','/public/audio/001/TiK ToK_segment_02m30s.mp3'],
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
  audioUrls: ['/public/audio/001/Bad Romance_segment_03m30s.mp3','/public/audio/001/Bad Romance_segment_00m00s.mp3','/public/audio/001/Bad Romance_segment_01m14s'],
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
  audioUrls: ['/public/audio/001/Train - Hey, Soul Sister_segment_00m00s.mp3','/public/audio/001/Train - Hey, Soul Sister_segment_00m50s.mp3','/public/audio/001/Train - Hey, Soul Sister_segment_02m25s.mp3'],
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
  audioUrls: ['/public/audio/001/Katy Perry - California Gurls_segment_02m30s.mp3','/public/audio/001/Katy Perry - California Gurls_segment_00m00s.mp3','/public/audio/001/Katy Perry - California Gurls_segment_00m20s.mp3'],
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
  audioUrls: ['/public/audio/001/B.o.B - Airplanes_segment_02m26s.mp3','/public/audio/001/B.o.B - Airplanes_segment_00m29s.mp3','/public/audio/001/B.o.B - Airplanes_segment_01m00s.mp3'],
  "tags": ["2010s", "Hip-Hop", "Rap", "Pop"],
  "difficulty": 3,
  "distractors": [
    "Love the Way You Lie - Eminem ft. Rihanna",
    "Nothin' on You - B.o.B ft. Bruno Mars",
    "The Monster - Eminem ft. Rihanna",
    "Price Tag - Jessie J ft. B.o.B",
    "Coming Home - Diddy - Dirty Money ft. Skylar Grey"
  ]
},
{
  "id": 'song-8', 
  "title": "Dynamite",
  "artist": "Taio Cruz",
  "year": 2010,
  "tags": ["2010s", "Pop", "Electro", "Dance"],
  audioUrls: ['/public/audio/001/Taio Cruz - Dynamite_segment_02m01s.mp3','/public/audio/001/Taio Cruz - Dynamite_segment_00m25s.mp3','/public/audio/001/Taio Cruz - Dynamite_segment_00m55s.mp3'],
  "difficulty": 3,
  "distractors": [
    "DJ Got Us Fallin' in Love - Usher ft. Pitbull",
    "Club Can't Handle Me - Flo Rida ft. David Guetta",
    "Only Girl (In The World) - Rihanna",
    "Party Rock Anthem - LMFAO",
    "OMG - Usher ft. will.i.am"
  ]
},
{
  id: 'song-9',
  "title": "Wonder Why",
  "artist": "Julian Perretta",
  "year": 2010,
  "tags": ["2010s", "Pop", "Electro"],
  "difficulty": 3,
  audioUrls: ['/public/audio/001/Julian Perretta - Wonder Why_01.mp3','/public/audio/001/Julian Perretta - Wonder Why_02.mp3','/public/audio/001/Julian Perretta - Wonder Why_03.mp3'],
  "distractors": [
    "Starlight - Muse",
    "Too Close - Alex Clare",
    "Fireflies - Owl City",
    "She Said - Plan B",
    "Bulletproof - La Roux"
  ]
},
{
  id: 'song-10',
  "title": "Memories",
  "artist": "Maroon 5",
  "year": 2019,
  "tags": ["2010s", "Pop", "Soft Rock"],
  "difficulty": 2,
  audioUrls: ['/public/audio/001/Maroon 5 - Memories_01.mp3','/public/audio/001/Maroon 5 - Memories_02.mp3','/public/audio/001/Maroon 5 - Memories_03.mp3'],
  "distractors": [
    "Someone You Loved - Lewis Capaldi",
    "Let Her Go - Passenger",
    "Say You Won't Let Go - James Arthur",
    "Photograph - Ed Sheeran",
    "Love Someone - Lukas Graham"
  ]
},
{
  id: 'song-11',
  "title": "22",
  "artist": "Lily Allen",
  "year": 2009,
  "tags": ["2000s", "Pop"],
  "difficulty": 3,
  audioUrls: ['/public/audio/001/Lily Allen feat Ours - 22_01.mp3','/public/audio/001/Lily Allen feat Ours - 22_02.mp3','/public/audio/001/Lily Allen feat Ours - 22_03.mp3'],
  "distractors": [
    "Smile - Lily Allen",
    "Foundations - Kate Nash",
    "Put Your Records On - Corinne Bailey Rae",
    "Chasing Pavements - Adele",
    "Suddenly I See - KT Tunstall"
  ]
},
{
  id: 'song-12',
  "title": "Loca",
  "artist": "Shakira",
  "year": 2010,
  "tags": ["2010s", "Pop", "Reggae", "Dance"],
  "difficulty": 2,
  audioUrls: ['/public/audio/001/Shakira - Loca_01.mp3','/public/audio/001/Shakira - Loca_02.mp3'],
  "distractors": [
    "Hips Don't Lie - Shakira ft. Wyclef Jean",
    "La La La - Shakira",
    "Rabiosa - Shakira ft. Pitbull",
    "On the Floor - Jennifer Lopez ft. Pitbull",
    "Bailando - Enrique Iglesias"
  ]
},
{
  id: 'song-13',
  "title": "Rolling in the Deep",
  "artist": "Adele",
  "year": 2010,
  "tags": ["2010s", "Pop", "Soul", "R&B"],
  "difficulty": 1,
  audioUrls: ['/public/audio/001/Adele - Rolling in the Deep_01.mp3','/public/audio/001/Adele - Rolling in the Deep_02.mp3'],
  "distractors": [
    "Set Fire to the Rain - Adele",
    "Someone Like You - Adele",
    "Back to Black - Amy Winehouse",
    "Bleeding Love - Leona Lewis",
    "Stay - Rihanna ft. Mikky Ekko"
  ]
},
{
  id: 'song-14',
  "title": "Elle me dit",
  "artist": "MIKA",
  "year": 2011,
  "tags": ["2010s", "Pop", "French"],
  "difficulty": 1,
  audioUrls: ['/public/audio/001/MIKA - Elle Me Dit_01.mp3','/public/audio/001/MIKA - Elle Me Dit_02.mp3','/public/audio/001/MIKA - Elle Me Dit_03.mp3'],
  "distractors": [
    "Je veux - Zaz",
    "Formidable - Stromae",
    "Dernière danse - Indila",
    "Relax, Take It Easy - MIKA",
    "Tous les mêmes - Stromae"
  ]
},
{
  id: 'song-15',
  "title": "Last Friday Night",
  "artist": "Katy Perry",
  "year": 2010,
  "tags": ["2010s", "Pop"],
  "difficulty": 3,
  audioUrls: ['/public/audio/001/Katy Perry - Last Friday Night_01.mp3','/public/audio/001/Katy Perry - Last Friday Night_02.mp3'],
  "distractors": [
    "California Gurls - Katy Perry",
    "Tik Tok - Kesha",
    "Party in the U.S.A. - Miley Cyrus",
    "Starships - Nicki Minaj",
    "Domino - Jessie J"
  ]
},
{
  id: 'song-16',
  "title": "Party Rock Anthem",
  "artist": "LMFAO",
  "year": 2011,
  "tags": ["2010s", "Electro", "Pop", "Dance", "House"],
  "difficulty": 3,
   audioUrls: ['/public/audio/001/LMFAO - Party Rock Anthem_01.mp3','/public/audio/001/LMFAO - Party Rock Anthem_02.mp3'],
  "distractors": [
    "Sexy and I Know It - LMFAO",
    "Give Me Everything - Pitbull ft. Ne-Yo, Afrojack & Nayer",
    "On the Floor - Jennifer Lopez ft. Pitbull",
    "Don't Stop the Party - Pitbull",
    "Like a G6 - Far East Movement ft. The Cataracs & Dev"
  ]
},
{
   id: 'song-17',
  "title": "L'horloge tourne",
  "artist": "Mickael Miro",
  "year": 2011,
  "tags": ["2010s", "Pop", "French"],
  "difficulty": 2,
  audioUrls: ['/public/audio/001/Mickael Miro - Lhorloge Tourne_01.mp3','/public/audio/001/Mickael Miro - Lhorloge Tourne_02.mp3'],
  "distractors": [
    "Toi + Moi - Grégoire",
    "Je te promets - Johnny Hallyday",
    "Je veux - Zaz",
    "Elle me dit - Mika",
    "Le jour se lève - Garou"
  ]
},
{
  id: 'song-18',
  "title": "On demande pas la lune",
  "artist": "Les Enfoirés",
  "year": 2011,
  "tags": ["2010s", "Pop", "French"],
  "difficulty": 4,
  audioUrls: ['/public/audio/001/Enfoires - On demande pas la lune_01.mp3','/public/audio/001/Enfoires - On demande pas la lune_02.mp3'],
  "distractors": [
    "Toi + Moi - Grégoire",
    "Je veux - Zaz",
    "Jour 1 - Louane",
    "On écrit sur les murs - Kids United",
    "Encore un soir - Céline Dion"
  ]
},
{
  id: 'song-20',   
  "title": "On The Floor",
  "artist": "Jennifer Lopez",
  "year": 2011,
  "tags": ["2010s", "Pop", "Electro", "Dance", "House"],
  "difficulty": 2,
  audioUrls: ['/public/audio/001/Jennifer Lopez - On The Floor_01.mp3','/public/audio/001/Jennifer Lopez - On The Floor_02.mp3'],
  "distractors": [
    "Party Rock Anthem - LMFAO",
    "Give Me Everything - Pitbull ft. Ne-Yo",
    "Don't Stop the Party - Pitbull",
    "Dance Again - Jennifer Lopez ft. Pitbull",
    "DJ Got Us Fallin' in Love - Usher ft. Pitbull"
  ]
},
{
  id: 'song-21', 
  "title": "Toi et moi",
  "artist": "Guillaume Grand",
  "year": 2010,
  "tags": ["2010s", "Pop", "French"],
   audioUrls: ['/public/audio/001/Guillaume Grand - Toi et moi_01.mp3','/public/audio/001/Guillaume Grand - Toi et moi_02.mp3'],
  "difficulty": 3,
  "distractors": [
    "Toi + Moi - Grégoire",
    "L'horloge tourne - Mickael Miro",
    "Le chemin - Emmanuel Moire",
    "Je te promets - Johnny Hallyday",
    "Caravane - Raphaël"
  ]
},
{
  id: 'song-22',
  "title": "Une femme avec une femme",
  "artist": "Mecano",
  audioUrls: ['/public/audio/001/Mecano - Une femme avec une femme_01.mp3','/public/audio/001/Mecano - Une femme avec une femme_02.mp3'],
  "year": 1990,
  "tags": ["1990s", "Pop", "French"],
  "difficulty": 3,
  "distractors": [
    "Voyage, voyage - Desireless",
    "Désenchantée - Mylène Farmer",
    "Joe le taxi - Vanessa Paradis",
    "Maria Magdalena - Sandra",
    "Nuit magique - Catherine Lara"
  ]
},
{
  id: 'song-23', 
  "title": "The Power",
  "artist": "SNAP!",
  "year": 1990,
  "tags": ["1990s", "Electro", "Hip-Hop", "House"],
  "difficulty": 2,
  audioUrls: ['/public/audio/001/SNAP! - The Power_01.mp3','/public/audio/001/SNAP! - The Power_02.mp3'],
  "distractors": [
    "Gonna Make You Sweat (Everybody Dance Now) - C+C Music Factory",
    "Rhythm Is a Dancer - SNAP!",
    "Pump Up the Jam - Technotronic",
    "Strike It Up - Black Box",
    "Free Your Mind - En Vogue"
  ]
},
{
  id: 'song-24',
  "title": "Sacrifice",
  "artist": "Elton John",
  "year": 1989,
  "tags": ["1980s", "Pop", "Rock", "Classic"],
  audioUrls: ['/public/audio/001/Elton John - Sacrifice_01.mp3','/public/audio/001/Elton John - Sacrifice_02.mp3'],
  "difficulty": 2,
  "distractors": [
    "Candle in the Wind - Elton John",
    "Against All Odds - Phil Collins",
    "Careless Whisper - George Michael",
    "Drive - The Cars",
    "Every Breath You Take - The Police"
  ]
},
{
  id: 'song-25',
  "title": "Vogue",
  "artist": "Madonna",
  "year": 1990,
  "tags": ["1990s", "Pop", "House", "Dance", "Classic"],
   audioUrls: ['/public/audio/001/Madonna - Vogue_01.mp3','/public/audio/001/Madonna - Vogue_02.mp3'],
  "difficulty": 2,
  "distractors": [
    "Express Yourself - Madonna",
    "Rhythm Is a Dancer - SNAP!",
    "Gonna Make You Sweat (Everybody Dance Now) - C+C Music Factory",
    "Strike It Up - Black Box",
    "I'm Every Woman - Whitney Houston"
  ]
},
{
  id: 'song-26',
  "title": "Enjoy the Silence",
  "artist": "Depeche Mode",
  "year": 1990,
  audioUrls: ['/public/audio/001/Depeche Mode - Enjoy the Silence_01.mp3','/public/audio/001/Depeche Mode - Enjoy the Silence_02.mp3'],
  "tags": ["1990s", "Electro", "Rock", "Pop", "Classic"],
  "difficulty": 2,
  "distractors": [
    "Personal Jesus - Depeche Mode",
    "Sweet Dreams - Eurythmics",
    "Blue Monday - New Order",
    "Just Can't Get Enough - Depeche Mode",
    "Bizarre Love Triangle - New Order"
  ]
},
{
  id: 'song-27',
  "title": "Another Day in Paradise",
  "artist": "Phil Collins",
  "year": 1989,
  audioUrls: ['/public/audio/001/Phil Collins - Another Day In Paradise_01.mp3','/public/audio/001/Phil Collins - Another Day In Paradise_02.mp3'],
  "tags": ["1980s", "Pop", "Rock", "Classic"],
  "difficulty": 2,
  "distractors": [
    "Against All Odds - Phil Collins",
    "Do You Remember - Phil Collins",
    "Careless Whisper - George Michael",
    "Everybody Wants to Rule the World - Tears for Fears",
    "Drive - The Cars"
  ]
},
{
  id: 'song-28',    
  "title": "Le Jerk",
  "artist": "Thierry Hazard",
  "year": 1990,
  "tags": ["1990s", "Pop", "French"],
  audioUrls: ['/public/audio/001/Thierry Hazard - Le jerk_01.mp3'],
  "difficulty": 1,
  "distractors": [
    "Poupée psychédélique - Thierry Hazard",
    "Joe le taxi - Vanessa Paradis",
    "Nuit de folie - Début de Soirée",
    "C'est la ouate - Caroline Loeb",
    "Femme libérée - Cookie Dingler"
  ]
},
{
  id: 'song-29',  
  "title": "You Make Me Feel",
  "artist": "Jimmy Somerville",
  "year": 1989,
  "tags": ["1980s", "Pop", "Disco", "Electro", "Classic"],
   audioUrls: ['/public/audio/001/Jimmy Somerville - You Make Me Feel_01.mp3','/public/audio/001/Jimmy Somerville - You Make Me Feel_02.mp3'],
  "difficulty": 2,
  "distractors": [
    "Smalltown Boy - Bronski Beat",
    "Don't Leave Me This Way - The Communards",
    "You Spin Me Round (Like a Record) - Dead or Alive",
    "Relax - Frankie Goes to Hollywood",
    "It's a Sin - Pet Shop Boys"
  ]
},
{
  id: 'song-30',   
  "title": "Vous êtes fous !",
  "artist": "Benny B.",
  "year": 1990,
  "tags": ["1990s", "Hip-Hop", "Rap", "Electro", "French"],
  audioUrls: ['/public/audio/001/Benny B. - Vous etes Fous !_01.mp3'],
  "difficulty": 3,
  "distractors": [
    "Mais vous êtes fous ! - Benny B.",
    "Est-ce que tu m'entends ? - Benny B.",
    "Bouge de là - MC Solaar",
    "Nés sous la même étoile - IAM",
    "Saga Africa - Yannick Noah",
    "Je danse le Mia - IAM"
  ]
},
{
  id: 'song-31',
  "title": "All Around the World",
  "artist": "Lisa Stansfield",
  "year": 1989,
  "tags": ["80s", "Pop", "R&B", "Soul"],
  "difficulty": 5,
  audioUrls: ['/public/audio/001/Lisa Stansfield - All Around the World_01.mp3','/public/audio/001/Lisa Stansfield - All Around the World_02.mp3'],
  "distractors": [
    "Smooth Operator - Sade",
    "I Wanna Dance with Somebody - Whitney Houston",
    "Nothing Compares 2 U - Sinéad O'Connor",
    "Sweet Love - Anita Baker",
    "Tell It to My Heart - Taylor Dayne"
  ]
},
{
  id: 'song-32',   
  "title": "Groove Is in the Heart",
  "artist": "Deee-Lite",
  "year": 1990,
  "tags": ["90s", "Pop", "Electro", "Funk", "Disco", "House"],
  "difficulty": 2,
  audioUrls: ['/public/audio/001/Deee-Lite - Groove Is In The Heart_01.mp3','/public/audio/001/Deee-Lite - Groove Is In The Heart_02.mp3'],
  "distractors": [
    "Gonna Make You Sweat (Everybody Dance Now) - C+C Music Factory",
    "Pump Up the Jam - Technotronic",
    "Rhythm Is a Dancer - SNAP!",
    "Strike It Up - Black Box",
    "I'm Too Sexy - Right Said Fred",
    "Finally - CeCe Peniston"
  ]
},
{
  id: 'song-33',
  "title": "The Road to Hell",
  "artist": "Chris Rea",
  "year": 1989,
  "tags": ["80s", "Rock", "Pop", "Classic"],
  "difficulty": 4,
  audioUrls: ['/public/audio/001/Chris Rea - The Road To Hell_01.mp3','/public/audio/001/Chris Rea - The Road to Hell_02.mp3'],
  "distractors": [
    "Driving Home for Christmas - Chris Rea",
    "Baker Street - Gerry Rafferty",
    "In the Air Tonight - Phil Collins",
    "Brothers in Arms - Dire Straits",
    "Slave to Love - Bryan Ferry",
    "Private Investigations - Dire Straits"
  ]
},
{
  id: 'song-34',
  "title": "Alors regarde",
  "artist": "Patrick Bruel",
  "year": 1989,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 2,
  audioUrls: ['/public/audio/001/Patrick Bruel - Alors regarde_01.mp3'],
  "distractors": [
    "Place des grands hommes - Patrick Bruel",
    "Lucie - Pascal Obispo",
    "Tu trouveras - Natasha St-Pier",
    "Le pouvoir des fleurs - Laurent Voulzy",
    "Belle-Île-en-Mer, Marie-Galante - Laurent Voulzy",
    "Savoir aimer - Florent Pagny"
  ]
},
{
  id: 'song-35',    
  "title": "Avant de partir",
  "artist": "Roch Voisine",
  "year": 1990,
  "tags": ["90s", "Pop", "French"],
  audioUrls: ['/public/audio/001/Roch Voisine - Avant de partir_01.mp3'],
  "difficulty": 3,
  "distractors": [
    "Hélène - Roch Voisine",
    "Tu ne sauras jamais - Marc Lavoine",
    "Lucie - Pascal Obispo",
    "Je te promets - Johnny Hallyday",
    "Et un jour une femme - Florent Pagny",
    "Juste après - Patrick Bruel"
  ]
},
{
  id: 'song-36',    
  "title": "C'est toi qui m'as fait",
  "artist": "François Feldman",
  "year": 1990,
  "tags": ["90s", "Pop", "French"],
  audioUrls: ['/public/audio/001/François Feldman - Cest toi qui mas fait_01.mp3'],
  "difficulty": 4,
  "distractors": [
    "Petit Frank - François Feldman",
    "Je te donne - Jean-Jacques Goldman & Michael Jones",
    "Pour que tu m’aimes encore - Céline Dion",
    "Place des grands hommes - Patrick Bruel",
    "Elle a les yeux revolver - Marc Lavoine",
    "Désenchantée - Mylène Farmer"
  ]
},
{
   id: 'song-37',
  "title": "Lady (Hear Me Tonight)",
  "artist": "Modjo",
  "year": 2000,
  "tags": ["2000s", "Electro", "House", "Pop", "French"],
  audioUrls: ['/public/audio/001/Modjo - Lady (Hear Me Tonight)_01.mp3'],
  "difficulty": 2,
  "distractors": [
    "Music Sounds Better with You - Stardust",
    "One More Time - Daft Punk",
    "Make Luv - Room 5 feat. Oliver Cheatham",
    "You See the Trouble with Me - Black Legend",
    "Groovejet (If This Ain't Love) - Spiller",
    "Starlight - The Supermen Lovers"
  ]
},
{
   id: 'song-38',    
  "title": "Lucky Star",
  "artist": "Superfunk",
  "year": 2000,
  "tags": ["2000s", "Electro", "House", "Funk", "French"],
  "difficulty": 3,
  audioUrls: ['/public/audio/001/Superfunk - Lucky Star_01.mp3','/public/audio/001/Superfunk - Lucky Star_02.mp3'],
  "distractors": [
    "Starlight - The Supermen Lovers",
    "Music Sounds Better with You - Stardust",
    "Lady (Hear Me Tonight) - Modjo",
    "Make Luv - Room 5 feat. Oliver Cheatham",
    "So Much Love to Give - Together",
    "One More Time - Daft Punk"
  ]
},
{
 id: 'song-39',
  "title": "Ces soirées-là",
  "artist": "Yannick",
  "year": 2000,
  "tags": ["2000s", "Rap", "Hip-Hop", "French", "Pop"],
  audioUrls: ['/public/audio/001/Yannick - Ces soirées-là_01.mp3'],
  "difficulty": 2,
  "distractors": [
    "Tomber la chemise - Zebda",
    "Stach Stach - Bratisla Boys",
    "Le Frunkp - Alliance Ethnik",
    "Moi Lolita - Alizée",
    "Angela - Saïan Supa Crew",
    "Les Démons de minuit - Images"
  ]
},
{
  id: 'song-40',
  "title": "Sexbomb",
  "artist": "Tom Jones",
  "year": 1999,
  "tags": ["90s", "Pop", "Soul", "Funk", "Disco"],
  "difficulty": 2,
  audioUrls: ['/public/audio/001/Tom Jones - Sexbomb_01.mp3','/public/audio/001/Tom Jones - Sexbomb_02.mp3'],
  "distractors": [
    "You Sexy Thing - Hot Chocolate",
    "Lady Marmalade - Christina Aguilera, Lil' Kim, Mýa, Pink",
    "Groove Is In The Heart - Deee-Lite",
    "I'm Too Sexy - Right Said Fred",
    "Mambo No. 5 - Lou Bega",
    "Finally - CeCe Peniston"
  ]
},
{
    id: 'song-41',
    "title": "Moi... Lolita",
    "artist": "Alizée",
    "year": 2000,
    "tags": ["2000s", "Pop", "Electro", "French"],
    "difficulty": 1,
    "audioUrls": ["/public/audio/001/Alizée-Moi...Lolita_01.mp3"],
    "distractors": [
      "Mylène Farmer - Désenchantée",
      "Lorie - Je serai (ta meilleure amie)",
      "Kate Ryan - Libertine",
      "In-Grid - Tu es foutu",
      "Vanessa Paradis - Joe le taxi",
      "Jenifer - J'attends l'amour"
    ]
},
{
    id: 'song-42',
    "title": "Pure Shores",
    "artist": "All Saints",
    "year": 2000,
    "tags": ["2000s", "Pop", "R&B", "Electro", "Movie"],
    "difficulty": 4,
    "audioUrls": ["/public/audio/001/All Saints - Pure Shores_01.mp3", "/public/audio/001/All Saints - Pure Shores_02.mp3"],
    "distractors": [
      "Madonna - Frozen",
      "Sugababes - Overload",
      "Massive Attack - Teardrop",
      "Spice Girls - Holler",
      "Atomic Kitten - Whole Again",
      "Shaznay Lewis - Never Felt Like This Before"
    ]
},
{
    id: 'song-43',
    "title": "I'm Outta Love",
    "artist": "Anastacia",
    "year": 2000,
    "tags": ["2000s", "Pop", "Soul"],
    "difficulty": 3,
    "audioUrls": ["/public/audio/001/Anastacia - I'm Outta Love_01.mp3", "/public/audio/001/Anastacia - I'm Outta Love_02.mp3"],
    "distractors": [
      "Fighter - Christina Aguilera",
      "Believe - Cher",
      "Get the Party Started - P!nk",
      "That's the Way It Is - Céline Dion",
      "Whenever, Wherever - Shakira",
      "Let's Get Loud - Jennifer Lopez"
    ]
},
{
    id: 'song-44',
    "title": "Born To Make You Happy",
    "artist": "Britney Spears",
    "year": 1999,
    "tags": ["90s", "Pop"],
    "difficulty": 2,
    "audioUrls": ["/public/audio/001/Britney Spears - Born To Make You Happy_01.mp3"],
    "distractors": [
      "Sometimes - Britney Spears",
      "I Turn to You - Christina Aguilera",
      "I Wanna Love You Forever - Jessica Simpson",
      "I Wanna Be with You - Mandy Moore",
      "I Want It That Way - Backstreet Boys",
      "Torn - Natalie Imbruglia"
    ]
},
{
    id: 'song-45',
    "title": "Oops!...I Did It Again",
    "artist": "Britney Spears",
    "year": 2000,  
    "tags": ["2000s", "Pop"],
    "difficulty": 2,
    "audioUrls": ["/public/audio/001/Britney Spears-Oops!...I Did It Again_01.mp3"],
    "distractors": [
      "Toxic - Britney Spears",
      "Genie in a Bottle - Christina Aguilera",
      "Bye Bye Bye - *NSYNC",
      "I Want It That Way - Backstreet Boys",
      "Wannabe - Spice Girls",
      "Candy - Mandy Moore"
    ]
},
{
  id: 'song-46',  
  "title": "One More Time",
  "artist": "Daft Punk",
  "year": 2000,
  "tags": ["2000s", "Electro", "House", "French", "Disco"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Daft Punk - One More Time_01.mp3", "/public/audio/001/Daft Punk - One More Time_02.mp3"],
  "distractors": [
    "Stardust - Music Sounds Better With You",
    "Modjo - Lady (Hear Me Tonight)",
    "Cassius - 1999",
    "Justice - D.A.N.C.E.",
    "Daft Punk - Around the World",
    "Etienne de Crécy - Am I Wrong"
  ]
},
{
    id: 'song-47',  
    "title": "L'envie d'aimer",
    "artist": "Daniel Levi",
    "year": 2000,
    "tags": ["2000s", "Pop", "French"],
    "difficulty": 2,
    "audioUrls": ["/public/audio/001/Daniel Levi-envie daimer_01.mp3"],
    "distractors": [
      "Belle - Garou, Daniel Lavoie & Patrick Fiori",
      "Savoir aimer - Florent Pagny",
      "Lucie - Pascal Obispo",
      "Mon frère - Daniel Levi & Ahmed Mouici",
      "L'envie - Johnny Hallyday",
      "Aimer - Roméo & Juliette"
    ]
},
{
    id: 'song-48',
    "title": "Say My Name",
    "artist": "Destiny's Child",
    "year": 1999,
    "tags": ["90s", "2000s", "R&B", "Pop"],
    "difficulty": 2,
    "audioUrls": ["/public/audio/001/Destinys Child - Say My Name_01.mp3"],
    "distractors": [
      "No Scrubs - TLC",
      "Bills, Bills, Bills - Destiny's Child",
      "The Boy Is Mine - Brandy & Monica",
      "Try Again - Aaliyah",
      "If You Had My Love - Jennifer Lopez",
      "Where My Girls At? - 702"
    ]
},
{
    id: 'song-49',
    "title": "Stan",
    "artist": "Eminem",
    "year": 2000,
    "tags": ["2000s", "Hip-Hop", "Rap"],
    "difficulty": 2,
    "audioUrls": ["/public/audio/001/Eminem - Stan_01.mp3", "/public/audio/001/Eminem - Stan_02.mp3"],
    "distractors": [
      "Lose Yourself - Eminem",
      "Thank You - Dido",
      "Love the Way You Lie - Eminem ft. Rihanna",
      "Mockingbird - Eminem",
      "Forgot About Dre - Dr. Dre ft. Eminem",
      "Changes - 2Pac"
    ]
},
{
    id: 'song-50',
    "title": "Il y a trop de gens qui t aiment",
    "artist": "Hélène Segara",
    "year": 1999,
    "tags": ["90s", "Pop", "French"],
    "difficulty": 3,
    "audioUrls": ["/public/audio/001/Hélène Segara - Il y a trop de gens qui taiment_01.mp3", "/public/audio/001/Hélène Segara - Il y a trop de gens qui taiment_02.mp3"],
    "distractors": [
      "Je t'aime - Lara Fabian",
      "Pour que tu m'aimes encore - Céline Dion",
      "Elle, tu l'aimes... - Hélène Segara",
      "Tu trouveras - Natasha St-Pier",
      "Si je m'en sors - Julie Zenatti",
      "Que tu reviennes - Patrick Fiori"
    ]
},
{
    id: 'song-51',
    "title": "Music",
    "artist": "Madonna",
    "year": 2000,
    "tags": ["2000s", "Pop", "Electro", "Funk"],
    "difficulty": 2,
    "audioUrls": ["/public/audio/001/Madonna - Music_01.mp3"],
    "distractors": [
      "Can't Get You Out of My Head - Kylie Minogue",
      "Toxic - Britney Spears",
      "Believe - Cher",
      "Hung Up - Madonna",
      "Poker Face - Lady Gaga",
      "One More Time - Daft Punk"
    ]
},
{
    id: 'song-52',
    "title": "L'important c'est d'aimer",
    "artist": "Pascal Obispo",
    "year": 2000,
    "tags": ["2000s","Pop","Rock","French"],
    "difficulty": 2,
    "audioUrls": ["/public/audio/001/Pascal Obispo important cest daimer_01.mp3"],
    "distractors": [
        "Savoir aimer - Florent Pagny",
        "En apesanteur - Calogero",
        "Allumer le feu - Johnny Hallyday",
        "Seul - Garou",
        "Zen - Zazie",
        "Casser la voix - Patrick Bruel"
    ]
},
{
    id: 'song-53',
    "title": "Angela",
    "artist": "Saian Supa Crew",
    "year": 1999,
    "tags": ["90s", "Hip-Hop", "Rap", "French"],
    "difficulty": 3,
    "audioUrls": ["public/audio/001/Saian Supa Crew - angela_01.mp3"],
    "distractors": [
      "Je danse le Mia - IAM",
      "La Tribu de Dana - Manau",
      "Respect - Alliance Ethnik",
      "Le Bilan - Nèg' Marrons",
      "La Preuve par 3 - Saian Supa Crew",
      "Simple et Funky - Alliance Ethnik"
    ]
},
{
    id: 'song-54',
    "title": "Still Believe",
    "artist": "Shola Ama",
    "year": 1999,
    "tags": ["90s", "R&B", "Soul"],
    "difficulty": 4,
    "audioUrls": ["/public/audio/001/Shola Ama - Still Believe_01.mp3"],
    "distractors": [
      "Greatest Day - Beverley Knight",
      "Rise - Gabrielle",
      "Never Ever - All Saints",
      "Finally Found - Honeyz",
      "I Wanna Be the Only One - Eternal",
      "My Love - Kele Le Roc"
    ]
},
{
    id: 'song-55',
    "title": "In Demand",
    "artist": "Texas",
    "year": 2000,
    "tags": ["2000s", "Pop", "Rock"],
    "difficulty": 4,
    "audioUrls": ["/public/audio/001/Texas - In Demand_01.mp3"],
    "distractors": [
      "Say What You Want - Texas",
      "Torn - Natalie Imbruglia",
      "My Favourite Game - The Cardigans",
      "Kiss Me - Sixpence None The Richer",
      "Linger - The Cranberries",
      "You Oughta Know - Alanis Morissette"
    ]
},
{
    id: 'song-56',
    "title": "Just My Imagination",
    "artist": "The Cranberries",
    "year": 1999,
    "tags": ["90s", "Rock"],
    "difficulty": 2,
    "audioUrls": ["/public/audio/001/The Cranberries - Just My Imagination_01.mp3"],
    "distractors": [
      "Linger - The Cranberries",
      "Kiss Me - Sixpence None The Richer",
      "Torn - Natalie Imbruglia",
      "Lovefool - The Cardigans",
      "What's Up? - 4 Non Blondes",
      "Ironic - Alanis Morissette"
    ]
},
{
  id: 'song-57',
  "title": "Les trois cloches",
  "artist": "Tina Arena",
  "year": 1999,
  "tags": ["90s", "Pop", "French"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Tina Arena - Les trois cloches_01.mp3",
    "/public/audio/001/Tina Arena - Les trois cloches_02.mp3"
  ],
  "distractors": [
    "S'il suffisait d'aimer - Céline Dion",
    "Je t'aime - Lara Fabian",
    "Les trois cloches - Edith Piaf",
    "Belle - Patrick Fiori, Garou, Daniel Lavoie",
    "Savoir aimer - Florent Pagny",
    "Il y a trop de gens qui t'aiment - Hélène Ségara"
  ]
},
{
    id: 'song-58',
    "title": "He Wasn't Man Enough",
    "artist": "Toni Braxton",
    "year": 2000,
    "tags": ["2000s", "R&B", "Pop"],
    "difficulty": 4,
    "audioUrls": ["/public/audio/001/Toni Braxton - He Wasnt Man Enough_01.mp3", "/public/audio/001/Toni Braxton - He Wasnt Man Enough_02.mp3"],
    "distractors": [
      "Say My Name - Destiny's Child",
      "It's Not Right but It's Okay - Whitney Houston",
      "The Boy Is Mine - Brandy & Monica",
      "Try Again - Aaliyah",
      "No Scrubs - TLC",
      "If You Had My Love - Jennifer Lopez"
    ]
},
{
     id: 'song-59',
    "title": "Gaby Oh Gaby",
    "artist": "Alain Bashung",
    "year": 1980,
    "tags": ["80s", "Rock", "French"],
    "difficulty": 3,
    "audioUrls": ["/public/audio/001/Alain Bashung - Gaby Oh Gaby_01.mp3"],
    "distractors": [
      "Ça (C'est Vraiment Toi) - Téléphone",
      "L'Aventurier - Indochine",
      "Sea, Sex and Sun - Serge Gainsbourg",
      "Les Cactus - Jacques Dutronc",
      "Antisocial - Trust"
    ]
},
{
  id: 'song-60',
  "title": "Manureva",
  "artist": "Alain Chamfort",
  "year": 1979,
  "tags": ["70s", "Pop", "French", "Disco"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Manureva_01.mp3"],
  "distractors": [
    "Marcia Baïla - Rita Mitsouko",
    "Cargo - Axel Bauer",
    "Les Divas du Dancing - Philippe Cataldo",
    "Joe le taxi - Vanessa Paradis",
    "Duel au soleil - Étienne Daho",
    "Weekend à Rome - Étienne Daho"
  ]
},
{
    id: 'song-61',
    "title": "Traffic",
    "artist": "Bernard Lavilliers",
    "year": 1980,
    "tags": ["80s", "French", "Rock", "Reggae"],
    "difficulty": 4,
    "audioUrls": ["/public/audio/001/Bernard Lavilliers - Traffic_01.mp3", "/public/audio/001/Bernard Lavilliers - Traffic_02.mp3"],
    "distractors": [
      "Aux armes et cætera - Serge Gainsbourg",
      "Gaby oh Gaby - Alain Bashung",
      "Ça (c'est vraiment toi) - Téléphone",
      "Tombé du ciel - Jacques Higelin",
      "L'aventurier - Indochine",
      "La Fille du coupeur de joints - Hubert-Félix Thiéfaine"
    ]
},
{
    id: 'song-62',
    "title": "Atomic",
    "artist": "Blondie",
    "year": 1979,
    "tags": ["70s", "80s", "Rock", "Pop", "Disco", "Punk"],
    "difficulty": 3,
    "audioUrls": [
        "/public/audio/001/Blondie - Atomic_01.mp3",
        "/public/audio/001/Blondie - Atomic_02.mp3"
    ],
    "distractors": [
      "Heart of Glass - Blondie",
      "Call Me - Blondie",
      "I Feel Love - Donna Summer",
      "Sweet Dreams (Are Made of This) - Eurythmics",
      "Brass in Pocket - The Pretenders",
      "Rock Lobster - The B-52's"
    ]
},
{
    id: 'song-63',
    "title": "Ashes To Ashes",
    "artist": "David Bowie",
    "year": 1980,
    "tags": ["80s", "Rock", "Pop", "Electro"],
    "difficulty": 4,
    "audioUrls": [
        "/public/audio/001/David Bowie - Ashes To Ashes_01.mp3", 
        "/public/audio/001/David Bowie - Ashes To Ashes_02.mp3"
    ],
    "distractors": [
      "Space Oddity - David Bowie",
      "Vienna - Ultravox",
      "Sledgehammer - Peter Gabriel",
      "Fade to Grey - Visage",
      "Life on Mars? - David Bowie",
      "Are 'Friends' Electric? - Tubeway Army"
    ]
},
{
    id: 'song-64',
    "title": "Upside Down",
    "artist": "Diana Ross",
    "year": 1980,
    "tags": ["80s", "Pop", "Disco", "Funk", "Soul"],
    "difficulty": 2,
    "audioUrls": ["/public/audio/001/Diana Ross - Upside Down_01.mp3"],
    "distractors": [
      "I'm Coming Out - Diana Ross",
      "Le Freak - Chic",
      "We Are Family - Sister Sledge",
      "Got to Be Real - Cheryl Lynn",
      "Good Times - Chic",
      "Best of My Love - The Emotions"
    ]
},
{
    id: 'song-65',
    "title": "Elle",
    "artist": "Didier Barbelivien",
    "year": 1980,
    "tags": ["80s", "Pop", "French"],
    "difficulty": 4,
    "audioUrls": ["/public/audio/001/Didier Barbelivien Elle_01.mp3"],
    "distractors": [
      "Je vais t'aimer - Michel Sardou",
      "Comme toi - Jean-Jacques Goldman",
      "Mon fils ma bataille - Daniel Balavoine",
      "Je l'aime à mourir - Francis Cabrel",
      "Quelque chose de Tennessee - Johnny Hallyday",
      "Capri c'est fini - Hervé Vilard"
    ]
},
{
    id: 'song-66',
    "title": "Little Jeannie",
    "artist": "Elton John",
    "year": 1980,
    "tags": ["80s", "Pop", "Rock"],
    "difficulty": 5,
    "audioUrls": ["/public/audio/001/Elton John- Little Jeannie_01.mp3"],
    "distractors": [
      "I'm Still Standing - Elton John",
      "It's Still Rock and Roll to Me - Billy Joel",
      "Sailing - Christopher Cross",
      "Just the Way You Are - Billy Joel",
      "Against All Odds - Phil Collins",
      "Baker Street - Gerry Rafferty"
    ]
},
{
    id: 'song-67',
    "title": "Il jouait du piano debout",
    "artist": "France Gall",
    "year": 1980,
    "tags": ["80s", "Pop", "French"],
    "difficulty": 1,
    "audioUrls": ["/public/audio/001/France Gall - Il jouait du piano debout_01.mp3"],
    "distractors": [
      "Résiste - France Gall",
      "Ella, elle l'a - France Gall",
      "La groupie du pianiste - Michel Berger",
      "Chanson sur ma drôle de vie - Véronique Sanson",
      "L'Aziza - Daniel Balavoine",
      "Ma préférence - Julien Clerc"
    ]
},
{
    id: 'song-68',
    "title": "Give Me The Night",
    "artist": "George Benson",
    "year": 1980,
    "tags": ["80s", "Disco", "Funk", "Soul", "R&B"],
    "difficulty": 3,
    "audioUrls": ["/public/audio/001/George Benson - Give Me The Night_01.mp3"],
    "distractors": [
      "Let's Groove - Earth, Wind & Fire",
      "Stomp! - The Brothers Johnson",
      "We're in This Love Together - Al Jarreau",
      "Get Down on It - Kool & The Gang",
      "A Night to Remember - Shalamar",
      "Just the Two of Us - Grover Washington, Jr. ft. Bill Withers"
    ]
},
{
    id: 'song-69',
    "title": "Champagne",
    "artist": "Jacques Higelin",
    "year": 1979,
    "tags": ["70s", "Rock", "French"],
    "difficulty": 4,
    "audioUrls": ["/public/audio/001/Jacques Higelin - Champagne_01.mp3"],
    "distractors": [
      "Gaby oh Gaby - Alain Bashung",
      "Les Mots Bleus - Christophe",
      "La bombe humaine - Téléphone",
      "Laisse béton - Renaud",
      "Tombé du ciel - Jacques Higelin",
      "Sea, Sex and Sun - Serge Gainsbourg"
    ]
},
{
    id: 'song-70',
    "title": "Ma Gueule",
    "artist": "Johnny Hallyday",
    "year": 1978,
    "tags": ["70s", "Rock", "French"],
    "difficulty": 3,
    "audioUrls": ["/public/audio/001/Johnny Hallyday - Ma Gueule_01.mp3"],
    "distractors": [
      "Allumer le feu - Johnny Hallyday",
      "Sur la route de Memphis - Eddy Mitchell",
      "L'opportuniste - Jacques Dutronc",
      "Les Lacs du Connemara - Michel Sardou",
      "Antisocial - Trust",
      "Gabrielle - Johnny Hallyday"
    ]
},
{
    id: 'song-71',
    "title": "Le Banana Split",
    "artist": "Lio",
    "year": 1979,
    "tags": ["70s", "80s", "Pop", "French"],
    "difficulty": 1,
    "audioUrls": [
        "/public/audio/001/Lio - Le Banana Split_01.mp3", 
        "/public/audio/002/Lio - Le Banana Split_02.mp3"],
    "distractors": [
      "Ça plane pour moi - Plastic Bertrand",
      "L'amour à la plage - Niagara",
      "Marcia Baïla - Les Rita Mitsouko",
      "Voyage, Voyage - Desireless",
      "Main dans la main - Elli et Jacno",
      "Les Démons de minuit - Images"
    ]
},
{
    id: 'song-72',
  "title": "Funkytown",
  "artist": "Lipps",
  "year": 1980,
  "tags": ["80s", "Pop", "Disco", "Funk", "Electro"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Funkytown_01.mp3"],
  "distractors": [
    "I Will Survive - Gloria Gaynor",
    "Don’t Leave Me This Way - Thelma Houston",
    "Le Freak - Chic",
    "Born to Be Alive - Patrick Hernandez",
    "Get Down On It - Kool & The Gang",
    "I’m So Excited - The Pointer Sisters"
  ]
},
{
  id: 'song-73',
  "title": "One Step Beyond",
  "artist": "Madness",
  "year": 1979,
  "tags": ["70s", "Rock", "Punk"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Madness - One Step Beyond_01.mp3"],
  "distractors": [
    "Baggy Trousers - Madness",
    "Mirror in the Bathroom - The Beat",
    "Ghost Town - The Specials",
    "Too Much Too Young - The Specials",
    "Night Boat to Cairo - Madness",
    "Rat Race - The Specials"
  ]
},
{
  id: 'song-74',
  "title": "African Reggae",
  "artist": "Nina Hagen",
  "year": 1981,
  "tags": ["80s", "Reggae", "Punk", "Rock"],
  "difficulty": 5,
  "audioUrls": ["/public/audio/001/Nina Hagen - African Reggae_01.mp3"],
  "distractors": [
    "My Way - Sid Vicious",
    "Germ Free Adolescents - X-Ray Spex",
    "Hong Kong Garden - Siouxsie and the Banshees",
    "Bankrobber - The Clash",
    "Tomorrow Belongs to Me - Toyah",
    "This Is Not a Love Song - Public Image Ltd"
  ]
},
{
    id: 'song-75',
    "title": "Another Brick In The Wall",
    "artist": "Pink Floyd",
    "year": 1979,
    "tags": ["70s", "Rock"],
    "difficulty": 1,
    "audioUrls": ["/public/audio/001/Pink Floyd - Another Brick In The Wall_01.mp3"],
    "distractors": [
      "The Alan Parsons Project - Eye in the Sky",
      "Dire Straits - Sultans of Swing",
      "Supertramp - The Logical Song",
      "Led Zeppelin - Stairway to Heaven",
      "Queen - Bohemian Rhapsody",
      "The Eagles - Hotel California"
    ]
},
{
    id: 'song-76',
  "title": "Le Coup de Soleil",
  "artist": "Richard Cocciante",
  "year": 1979,
  "tags": ["70s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Richard Cocciante ; Le Coup de Soleil_01.mp3",
    "/public/audio/001/Richard Cocciante ; Le Coup de Soleil_02.mp3"
  ],
  "distractors": [
    "Michel Delpech - Pour un flirt",
    "Julien Clerc - Ma préférence",
    "Daniel Balavoine - Tous les cris les SOS",
    "Francis Cabrel - Je l’aime à mourir",
    "Serge Lama - Je suis malade",
    "Alain Chamfort - Manureva"
  ]
},
{
    id: 'song-77',
  "title": "Johnny and Mary",
  "artist": "Robert Palmer",
  "year": 1980,
  "tags": ["80s", "Pop", "Rock"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Robert Palmer - Johnny and Mary_01.mp3",
    "/public/audio/001/Robert Palmer - Johnny and Mary_02.mp3"
  ],
  "distractors": [
    "Joe Jackson - Steppin' Out",
    "Roxy Music - More Than This",
    "The Cars - Drive",
    "Bryan Ferry - Slave to Love",
    "Tears for Fears - Everybody Wants to Rule the World",
    "Talk Talk - It's My Life"
  ]
},
{
    id: 'song-78',
  "title": "Master Blaster (Jammin')",
  "artist": "Stevie Wonder",
  "year": 1980,
  "tags": ["80s", "Soul", "Funk", "Reggae", "Pop"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Master Blaster (Jammin')_01.mp3",
    "/public/audio/001/Master Blaster (Jammin')_02.mp3"
  ],
  "distractors": [
    "Bob Marley - Could You Be Loved",
    "Stevie Wonder - Superstition",
    "Earth, Wind & Fire - September",
    "Michael Jackson - Don't Stop 'Til You Get Enough",
    "Lionel Richie - All Night Long (All Night)",
    "Marvin Gaye - Got to Give It Up"
  ]
},
{
    id: 'song-79',
  "title": "Message In A Bottle",
  "artist": "The Police",
  "year": 1979,
  "tags": ["70s", "Rock", "Reggae"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/The Police - Message In A Bottle_01.mp3"],
  "distractors": [
    "The Clash - London Calling",
    "Talking Heads - Psycho Killer",
    "Dire Straits - Sultans of Swing",
    "Sting - Englishman in New York",
    "U2 - I Will Follow",
    "Elvis Costello - Pump It Up"
  ]
},
{
    id: 'song-80',
  "title": "Walking On The Moon",
  "artist": "The Police",
  "year": 1979,
  "tags": ["70s", "Rock", "Reggae"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/The Police - Walking On The Moon_01.mp3"],
  "distractors": [
    "The Police - Every Breath You Take",
    "Sting - If You Love Somebody Set Them Free",
    "UB40 - Red Red Wine",
    "Men At Work - Down Under",
    "The Clash - Rock the Casbah",
    "Peter Tosh - Johnny B. Goode"
  ]
},
{
  id: 'song-81',
  "title": "Antisocial",
  "artist": "Trust",
  "year": 1980,
  "tags": ["80s", "Rock", "Metal", "French"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Trust - Antisocial_01.mp3",
    "/public/audio/001/Trust - Antisocial_02.mp3"
  ],
  "distractors": [
    "Téléphone - Ça (C'est vraiment toi)",
    "Noir Désir - Un jour en France",
    "AC/DC - Highway to Hell",
    "Motörhead - Ace of Spades",
    "Iron Maiden - Run to the Hills",
    "Anthrax - Antisocial"
  ]
},
{
    id: 'song-82',
  "title": "7 Days",
  "artist": "Craig David",
  "year": 2000,
  "tags": ["2000s", "R&B", "Pop"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Craig David - 7 Days_01.mp3"],
  "distractors": [
    "Usher - U Got It Bad",
    "Mario - Let Me Love You",
    "Ne-Yo - So Sick",
    "Alicia Keys - Fallin'",
    "Justin Timberlake - Like I Love You",
    "Joe - I Wanna Know"
  ]
},
{
    id: 'song-83',
  "title": "Walking Away",
  "artist": "Craig David",
  "year": 2000,
  "tags": ["2000s", "R&B", "Pop"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Craig David - Walking Away_01.mp3",
    "/public/audio/001/Craig David - Walking Away_02.mp3"
  ],
  "distractors": [
    "Usher - Burn",
    "Ne-Yo - Sexy Love",
    "Lemar - If There's Any Justice",
    "Blue - Sorry Seems To Be The Hardest Word",
    "Justin Timberlake - Cry Me a River",
    "Mario - Let Me Love You"
  ]
},
{
    id: 'song-84',
  "title": "Miss California",
  "artist": "Dante Thomas",
  "year": 2001,
  "tags": ["2000s", "Pop", "R&B"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Dante Thomas - Miss California_01.mp3"
  ],
  "distractors": [
    "Craig David - Fill Me In",
    "Mario - Just a Friend 2002",
    "Shaggy - It Wasn't Me",
    "Omarion - Ice Box",
    "Lemar - 50/50",
    "Usher - U Got It Bad"
  ]
},
{
    id: 'song-85',
  "title": "Survivor",
  "artist": "Destiny's Child",
  "year": 2001,
  "tags": ["2000s", "Pop", "R&B"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Destiny's Child - Survivor_01.mp3"
  ],
  "distractors": [
    "Beyoncé - Crazy In Love",
    "TLC - No Scrubs",
    "Aaliyah - Try Again",
    "Jennifer Lopez - Love Don't Cost a Thing",
    "Christina Milian - AM to PM",
    "Kelly Rowland - Stole"
  ]
},
{
    id: 'song-86',
  "title": "Hunter",
  "artist": "Dido",
  "year": 2001,
  "tags": ["2000s", "Pop", "Soul"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Dido - Hunter_01.mp3"
  ],
  "distractors": [
    "Dido - Thank You",
    "Natalie Imbruglia - Torn",
    "Sarah McLachlan - Building a Mystery",
    "Norah Jones - Don't Know Why",
    "Alanis Morissette - That I Would Be Good",
    "Sinead O'Connor - Nothing Compares 2 U"
  ]
},
{
    id: 'song-87',
  "title": "Who's That Girl",
  "artist": "Eve",
  "year": 2001,
  "tags": ["2000s", "Hip-Hop", "Rap", "R&B"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Eve - Who's That Girl_01.mp3"
  ],
  "distractors": [
    "Missy Elliott - Get Ur Freak On",
    "Lil' Kim - Lady Marmalade",
    "Lauryn Hill - Doo Wop (That Thing)",
    "Da Brat - Funkdafied",
    "Queen Latifah - U.N.I.T.Y.",
    "Salt-N-Pepa - Shoop"
  ]
},
{
    id: 'song-88',
  "title": "So I Begin",
  "artist": "Galleon",
  "year": 2001,
  "tags": ["2000s", "Electro", "House", "Dance", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Galleon - So I Begin_01.mp3"],
  "distractors": [
    "Modjo - Lady (Hear Me Tonight)",
    "Daft Punk - One More Time",
    "Cassius - 1999",
    "Bob Sinclar - Love Generation",
    "Stardust - Music Sounds Better With You",
    "Freemasons - Love On My Mind"
  ]
},
{
    id: 'song-89',
  "title": "Seul",
  "artist": "Garou",
  "year": 2000,
  "tags": ["2000s", "Pop", "French", "Soul"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Garou - Seul_01.mp3"],
  "distractors": [
    "Patrick Bruel - Casser La Voix",
    "Florent Pagny - Savoir Aimer",
    "Calogero - En Apesanteur",
    "Pascal Obispo - Tombé Pour Elle",
    "Michel Sardou - La Maladie d'Amour",
    "Johnny Hallyday - Allumer Le Feu"
  ]
},
{
    id: 'song-90',
  "title": "J'en rêve encore",
  "artist": "Gérald De Palmas",
  "year": 2000,
  "tags": ["2000s", "Pop", "French", "Rock"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Gérald De Palmas - J'en rêve encore_01.mp3",
    "/public/audio/001/Gérald De Palmas - J'en rêve encore_02.mp3"
  ],
  "distractors": [
    "Calogero - Face à la mer",
    "Patrick Bruel - Place des grands hommes",
    "Jean-Jacques Goldman - Quand la musique est bonne",
    "Pascal Obispo - Lucie",
    "Florent Pagny - Chanter",
    "Marc Lavoine - Elle a les yeux revolver"
  ]
},
{
    id: 'song-91',
  "title": "All For You",
  "artist": "Janet Jackson",
  "year": 2001,
  "tags": ["2000s", "Pop", "R&B", "Funk", "Dance"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Janet Jackson - All For You_01.mp3"],
  "distractors": [
    "TLC - No Scrubs",
    "Aaliyah - Try Again",
    "Brandy & Monica - The Boy Is Mine",
    "Beyoncé - Crazy In Love",
    "Mary J. Blige - Family Affair",
    "Usher - U Got It Bad"
  ]
},
{
    id: 'song-92',
  "title": "Love Don't Cost A Thing",
  "artist": "Jennifer Lopez",
  "year": 2000,
  "tags": ["2000s", "Pop", "R&B", "Dance"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Jennifer Lopez - Love Don't Cost A Thing_01.mp3"],
  "distractors": [
    "Christina Aguilera - Genie in a Bottle",
    "Britney Spears - Oops!... I Did It Again",
    "Mýa - Case of the Ex",
    "Destiny's Child - Say My Name",
    "Aaliyah - Try Again",
    "Janet Jackson - All For You"
  ]
},
{
    id: 'song-93',
  "title": "Play",
  "artist": "Jennifer Lopez",
  "year": 2001,
  "tags": ["2000s", "Pop", "R&B", "Dance"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Jennifer Lopez - Play_01.mp3"],
  "distractors": [
    "Britney Spears - I'm a Slave 4 U",
    "Christina Aguilera - Come On Over Baby",
    "Aaliyah - More Than a Woman",
    "Janet Jackson - All For You",
    "Mýa - Case of the Ex",
    "Destiny's Child - Bootylicious"
  ]
},
{
    id: 'song-94',
  "title": "On a tous le droit",
  "artist": "Liane Foly",
  "year": 1998,
  "tags": ["90s", "Pop", "Jazz", "French"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Liane Foly - On a tous le droit_01.mp3"],
  "distractors": [
    "Patricia Kaas - Il me dit que je suis belle",
    "Véronique Sanson - Bernard's Song",
    "Lara Fabian - Je t'aime",
    "Hélène Ségara - Il y a trop de gens qui t'aiment",
    "Michel Jonasz - La boîte de jazz",
    "Maurane - Sur un prélude de Bach"
  ]
},
{
    id: 'song-95',
  "title": "Family Affair",
  "artist": "Mary J. Blige",
  "year": 2001,
  "tags": ["2000s", "R&B", "Hip-Hop", "Soul"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Mary J. Blige - Family Affair_01.mp3"],
  "distractors": [
    "Aaliyah - Try Again",
    "Ashanti - Foolish",
    "Destiny's Child - Independent Women Part I",
    "TLC - No Scrubs",
    "Monica - So Gone",
    "Brandy - What About Us?"
  ]
},
{
    id: 'song-96',
  "title": "Hasta la vista",
  "artist": "MC Solaar",
  "year": 2001,
  "tags": ["2000s", "Rap", "Hip-Hop", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/MC Solaar - Hasta la vista_01.mp3"],
  "distractors": [
    "IAM - Je danse le mia",
    "Doc Gynéco - Nirvana",
    "Passi - Le monde est à moi",
    "Sniper - Gravé dans la roche",
    "Oxmo Puccino - Mama Lova",
    "Diam's - La boulette"
  ]
},
{
    id: 'song-97',
  "title": "You Rock My World",
  "artist": "Michael Jackson",
  "year": 2001,
  "tags": ["2000s", "Pop", "R&B", "Soul"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/MICHAEL JACKSON - YOU ROCK MY WORLD_01.mp3"],
  "distractors": [
    "Usher - U Got It Bad",
    "Craig David - Walking Away",
    "Ne-Yo - So Sick",
    "Justin Timberlake - Rock Your Body",
    "R. Kelly - Ignition (Remix)",
    "Mario - Let Me Love You"
  ]
},
{
    id: 'song-98',
  "title": "Supreme",
  "artist": "Robbie Williams",
  "year": 2000,
  "tags": ["2000s", "Pop", "Rock"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Robbie Williams - Supreme_01.mp3"],
  "distractors": [
    "Robbie Williams - Rock DJ",
    "George Michael - Outside",
    "Take That - Patience",
    "Jamiroquai - Virtual Insanity",
    "Mika - Grace Kelly",
    "Seal - Crazy"
  ]
},
{
    id: 'song-99',
  "title": "It Wasn't Me",
  "artist": "Shaggy",
  "year": 2000,
  "tags": ["2000s", "Reggae", "Pop", "R&B"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Shaggy - It Wasn't Me_01.mp3"],
  "distractors": [
    "Sean Paul - Get Busy",
    "Kevin Lyttle - Turn Me On",
    "Shaggy - Angel",
    "Ricky Martin - Livin' la Vida Loca",
    "Daddy Yankee - Gasolina",
    "Inner Circle - Sweat (A La La La La Long)"
  ]
},
{
    id: 'song-100',
  "title": "Sing",
  "artist": "Travis",
  "year": 2001,
  "tags": ["2000s", "Rock", "Pop"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Travis - Sing_01.mp3"],
  "distractors": [
    "Coldplay - Yellow",
    "Keane - Somewhere Only We Know",
    "Snow Patrol - Chasing Cars",
    "Stereophonics - Maybe Tomorrow",
    "Radiohead - High and Dry",
    "The Verve - Lucky Man"
  ]
},
{
    id: 'song-101',
  "title": "911",
  "artist": "Wyclef Jean",
  "year": 2000,
  "tags": ["2000s", "Hip-Hop", "R&B", "Pop", "Soul"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Wyclef Jean - 911_01.mp3"],
  "distractors": [
    "Fugees - Killing Me Softly",
    "Lauryn Hill - Ex-Factor",
    "Alicia Keys - Fallin'",
    "D'Angelo - Untitled (How Does It Feel)",
    "Usher - U Got It Bad",
    "The Black Eyed Peas - Where Is The Love?"
  ]
},
{
    id: 'song-102',
  "title": "Rue de la paix",
  "artist": "Zazie",
  "year": 2001,
  "tags": ["2000s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Zazie - Rue de la paix_01.mp3"],
  "distractors": [
    "Axelle Red - Sensualité",
    "Véronique Sanson - Chanson sur ma drôle de vie",
    "Lynda Lemay - Les filles seules",
    "Calogero - En apesanteur",
    "Jean-Louis Aubert - Temps à nouveau",
    "Julien Clerc - Utile"
  ]
},
{
    id: 'song-103',
  "title": "Skyfall",
  "artist": "Adele",
  "year": 2012,
  "tags": ["2010s", "Pop", "Soul", "Movie"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Adele - Skyfall_01.mp3"],
  "distractors": [
    "Sam Smith - Writing's on the Wall",
    "Amy Winehouse - Back to Black",
    "Lana Del Rey - Young and Beautiful",
    "Duffy - Warwick Avenue",
    "Florence + The Machine - No Light, No Light",
    "Sia - Breathe Me"
  ]
},
{
    id: 'song-104',
  "title": "Girl on Fire",
  "artist": "Alicia Keys",
  "year": 2012,
  "tags": ["2010s", "Pop", "R&B", "Soul"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Alicia Keys - Girl on Fire_01.mp3"],
  "distractors": [
    "Beyoncé - Halo",
    "Mary J. Blige - Just Fine",
    "Jordin Sparks - Battlefield",
    "Kelly Clarkson - Stronger (What Doesn't Kill You)",
    "Leona Lewis - Bleeding Love",
    "Sia - Chandelier"
  ]
},
{
  id:'song-105',
  "title": "Down the Road",
  "artist": "C2C",
  "year": 2012,
  "tags": ["2010s", "Electro", "Funk", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/C2C - Down the Road_01.mp3"],
  "distractors": [
    "Chinese Man - I've Got That Tune",
    "Wax Tailor - Que Sera",
    "Parov Stelar - Booty Swing",
    "The Avalanches - Frontier Psychiatrist",
    "Moby - Porcelain",
    "Flume - Sleepless"
  ]
},
{
   id:'song-106', 
  "title": "Call Me Maybe",
  "artist": "Carly",
  "year": 2011,
  "tags": ["2010s", "Pop"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Carly Rae Jepsen - Call Me Maybe_01.mp3",
    "/public/audio/001/Carly Rae Jepsen - Call Me Maybe_02.mp3"
  ],
  "distractors": [
    "Kesha - Tik Tok",
    "Katy Perry - Teenage Dream",
    "Demi Lovato - Heart Attack",
    "Taylor Swift - Shake It Off",
    "Jessie J - Price Tag",
    "Marina and the Diamonds - Primadonna"
  ]
},
{
    id: 'song-107',
  "title": "Next To Me",
  "artist": "Emeli Sandé",
  "year": 2012,
  "tags": ["2010s", "Pop", "Soul", "R&B"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Emeli Sandé - Next To Me_01.mp3"],
  "distractors": [
    "Adele - Rolling in the Deep",
    "Jessie J - Domino",
    "Leona Lewis - Bleeding Love",
    "Alicia Keys - No One",
    "Corinne Bailey Rae - Put Your Records On",
    "Paloma Faith - Only Love Can Hurt Like This"
  ]
},
{
    id: 'song-108',
  "title": "Somebody That I Used To Know",
  "artist": "Gotye",
  "year": 2011,
  "tags": ["2010s", "Pop", "Indie", "Alternative"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Gotye - Somebody That I Used To Know_01.mp3"],
  "distractors": [
    "Foster The People - Pumped Up Kicks",
    "Alt-J - Breezeblocks",
    "The xx - Intro",
    "Passenger - Let Her Go",
    "Vance Joy - Riptide",
    "Lorde - Royals"
  ]
},
{
    id: 'song-109',
  "title": "I Know",
  "artist": "Irma",
  "year": 2011,
  "tags": ["2010s", "Pop", "Soul"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Irma - I know_01.mp3"],
  "distractors": [
    "Corinne Bailey Rae - Put Your Records On",
    "Joss Stone - Right To Be Wrong",
    "Amy Winehouse - Rehab",
    "Adele - Hometown Glory",
    "Nneka - Heartbeat",
    "Zazie - Je suis un homme"
  ]
},
{
    id: 'song-110',
  "title": "Part Of Me",
  "artist": "Katy Perry",
  "year": 2012,
  "tags": ["2010s", "Pop", "Electro"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Katy Perry - Part Of Me_01.mp3",
    "/public/audio/001/Katy Perry - Part Of Me_02.mp3"
  ],
  "distractors": [
    "Lady Gaga - Born This Way",
    "Pink - Raise Your Glass",
    "Kelly Clarkson - Stronger (What Doesn't Kill You)",
    "Britney Spears - Till The World Ends",
    "Rihanna - Only Girl (In The World)",
    "Taylor Swift - Shake It Off"
  ]
},
{
    id: 'song-111',
  "title": "I Follow Rivers",
  "artist": "Lykke Li",
  "year": 2011,
  "tags": ["2010s", "Pop", "Electro", "Indie"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Lykke Li - I Follow Rivers_01.mp3"],
  "distractors": [
    "Robyn - Dancing On My Own",
    "Feist - 1234",
    "Sia - Breathe Me",
    "Florence + The Machine - Dog Days Are Over",
    "Bat for Lashes - Daniel",
    "CHVRCHES - The Mother We Share"
  ]
},
{
    id: 'song-112',
  "title": "New Age",
  "artist": "Marlon Roudette",
  "year": 2011,
  "tags": ["2010s", "Pop", "Soul", "Electro"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Marlon Roudette - New Age_01.mp3"],
  "distractors": [
    "Jason Mraz - I'm Yours",
    "Milky Chance - Stolen Dance",
    "Passenger - Let Her Go",
    "Gavin DeGraw - Not Over You",
    "James Morrison - You Give Me Something",
    "John Mayer - Waiting on the World to Change"
  ]
},
{
    id: 'song-113',
  "title": "Payphone",
  "artist": "Maroon 5",
  "year": 2012,
  "tags": ["2010s", "Pop", "Rock", "Soul"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Maroon 5 - Payphone_01.mp3"],
  "distractors": [
    "OneRepublic - Counting Stars",
    "Train - Drive By",
    "The Script - Breakeven",
    "Coldplay - Paradise",
    "Jason Mraz - I Won't Give Up",
    "Adam Levine - Lost Stars"
  ]
},
{
    id: 'song-114',
  "title": "Starships",
  "artist": "Nicki Minaj",
  "year": 2012,
  "tags": ["2010s", "Pop", "Hip-Hop", "Rap", "Electro"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Nicki Minaj - Starships_01.mp3",
    "/public/audio/001/Nicki Minaj - Starships_02.mp3"
  ],
  "distractors": [
    "Iggy Azalea - Fancy",
    "Rihanna - Where Have You Been",
    "Kesha - Tik Tok",
    "M.I.A. - Paper Planes",
    "Jessie J - Domino",
    "Flo Rida - Good Feeling"
  ]
},
{
    id: 'song-115',
  "title": "Diamonds",
  "artist": "Rihanna",
  "year": 2012,
  "tags": ["2010s", "Pop", "R&B", "Soul", "Electro"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Rihanna - Diamonds_01.mp3"],
  "distractors": [
    "Beyoncé - Halo",
    "Sia - Chandelier",
    "Adele - Rolling in the Deep",
    "Jessie J - Price Tag",
    "Calvin Harris - Feel So Close",
    "Katy Perry - Firework"
  ]
},
{
    id: 'song-116',
  "title": "Where Have You Been",
  "artist": "Rihanna",
  "year": 2011,
  "tags": ["2010s", "Pop", "Electro", "Dance", "R&B"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Rihanna - Where Have You Been_01.mp3"],
  "distractors": [
    "Calvin Harris - Feel So Close",
    "Lady Gaga - Born This Way",
    "Katy Perry - Teenage Dream",
    "Beyoncé - Run the World (Girls)",
    "David Guetta - Titanium",
    "Nicki Minaj - Starships"
  ]
},
{
    id: 'song-117',
  "title": "She Doesn't Mind",
  "artist": "Sean Paul",
  "year": 2011,
  "tags": ["2010s", "Reggae", "Dancehall", "Pop"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Sean Paul - She Doesn't Mind_01.mp3"],
  "distractors": [
    "Shaggy - It Wasn't Me",
    "Tarrus Riley - Gimme Likkle One Drop",
    "Damian Marley - Welcome to Jamrock",
    "Sean Kingston - Beautiful Girls",
    "Gyptian - Hold Yuh",
    "Konshens - Bruk Off Yuh Back"
  ]
},
{
    id: 'song-118',
  "title": "My Name Is Stain",
  "artist": "SHAKA PONK",
  "year": 2011,
  "tags": ["2010s", "Rock", "Electro", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/SHAKA PONK - My name is Stain_01.mp3"],
  "distractors": [
    "Gojira - Flying Whales",
    "C2C - Down the Road",
    "Skip the Use - Ghost",
    "Mass Hysteria - Furia",
    "No One Is Innocent - La Peau",
    "Babylon Circus - Ourselves"
  ]
},
{
    id: 'song-119',
  "title": "Summer Paradise",
  "artist": "Simple Plan",
  "year": 2011,
  "tags": ["2010s", "Pop", "Rock", "Reggae"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Simple Plan - Summer Paradise_01.mp3"],
  "distractors": [
    "Maroon 5 - Moves Like Jagger",
    "Train - Hey, Soul Sister",
    "Jason Mraz - I'm Yours",
    "The Script - Breakeven",
    "OneRepublic - Counting Stars",
    "Magic! - Rude"
  ]
},
{
    id: 'song-120',
  "title": "Le Sens de la Vie",
  "artist": "TAL",
  "year": 2012,
  "tags": ["2010s", "Pop", "French", "R&B"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/TAL - Le Sens de la Vie_01.mp3",
    "/public/audio/001/TAL - Le Sens de la Vie_02.mp3"
  ],
  "distractors": [
    "Shy'm - Et alors !",
    "Zazie - Je suis un homme",
    "Amel Bent - Ma philosophie",
    "Vitaa - A fleur de toi",
    "Indila - Dernière danse",
    "M. Pokora - Juste une photo de toi"
  ]
},
{
    id: 'song-121',
  "title": "Jolie Nana",
  "artist": "Aya Nakamura",
  "year": 2020,
  "tags": ["2020s", "Pop", "R&B", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Aya Nakamura - Jolie Nana_01.mp3"],
  "distractors": [
    "Wejdene - Anissa",
    "Lartiste - Chocolat",
    "Niska - Méchant",
    "Dadju - Reine",
    "Camélia Jordana - Facile",
    "Amel Bent - 1, 2, 3"
  ]
},
{
    id: 'song-122',
  "title": "MAMACITA",
  "artist": "Black Eyed Peas, Ozuna, J. Rey Soul",
  "year": 2020,
  "tags": ["2020s", "Pop", "Hip-Hop", "Electro", "Latin"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Black Eyed Peas, Ozuna, J. Rey Soul - MAMACITA_01.mp3",
    "/public/audio/001/Black Eyed Peas, Ozuna, J. Rey Soul - MAMACITA_02.mp3"
  ],
  "distractors": [
    "Black Eyed Peas - Ritmo",
    "J Balvin - Mi Gente",
    "Ozuna - Caramelo",
    "Daddy Yankee - Con Calma",
    "Shakira & Black Eyed Peas - Girl Like Me",
    "Maluma - Felices los 4"
  ]
},
{
    id: 'song-123',
  "title": "Facile",
  "artist": "Camélia Jordana",
  "year": 2021,
  "tags": ["2020s", "Pop", "Soul", "French"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Camélia Jordana - Facile_01.mp3"],
  "distractors": [
    "Clara Luciani - La Grenade",
    "Vitaa & Slimane - Avant toi",
    "Christine and the Queens - Saint Claude",
    "Hoshi - Ta marinière",
    "Juliette Armanet - L’Amour en solitaire",
    "Louane - Donne-moi ton cœur"
  ]
},
{
    id: 'song-124',
  "title": "Physical",
  "artist": "Dua Lipa",
  "year": 2020,
  "tags": ["2020s", "Pop", "Electro", "Disco"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Dua Lipa - Physical_01.mp3",
    "/public/audio/001/Dua Lipa - Physical_02.mp3"
  ],
  "distractors": [
    "The Weeknd - Blinding Lights",
    "Lady Gaga - Stupid Love",
    "Kylie Minogue - Magic",
    "Doja Cat - Say So",
    "Ava Max - Kings & Queens",
    "Charli XCX - 1999"
  ]
},
{
    id: 'song-125',
  "title": "Nos célébrations",
  "artist": "Indochine",
  "year": 2020,
  "tags": ["2020s", "Pop", "Rock", "French"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Indochine - Nos célébrations_01.mp3",
    "/public/audio/001/Indochine - Nos célébrations_02.mp3"
  ],
  "distractors": [
    "M - La bonne étoile",
    "Saez - Jeune et con",
    "Shaka Ponk - I'm Picky",
    "Louis Delort - Sur ma peau",
    "Kyo - Le Graal",
    "BB Brunes - Dis-moi"
  ]
},
{
    id: 'song-126',
  "title": "Nous",
  "artist": "Julien Doré",
  "year": 2020,
  "tags": ["2020s", "Pop", "French"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Julien Doré - Nous_01.mp3"
  ],
  "distractors": [
    "Vianney - Beau-papa",
    "Clara Luciani - Le reste",
    "Ben Mazué - Quand je marche",
    "Camélia Jordana - Facile",
    "Christophe Maé - Y'a du soleil",
    "Hoshi - Et même après je t'aimerai"
  ]
},
{
    id: 'song-127',
  "title": "Dernier métro",
  "artist": "Kendji Girac & Gims",
  "year": 2020,
  "tags": ["2020s", "Pop", "French"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Kendji Girac - Dernier métro_01.mp3"
  ],
  "distractors": [
    "Vianney - N'attendons pas",
    "Claudio Capéo - Ma jolie",
    "Amir - La fête",
    "Slimane & Vitaa - Avant toi",
    "Julien Doré - Nous",
    "Fréro Delavega - Le chant des sirènes"
  ]
},
{
    id: 'song-128',
  "title": "Before You Go",
  "artist": "Lewis Capaldi",
  "year": 2019,
  "tags": ["2010s", "Pop", "Soul"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Lewis Capaldi - Before You Go_01.mp3"
  ],
  "distractors": [
    "James Arthur - Say You Won't Let Go",
    "Ed Sheeran - Photograph",
    "Sam Smith - Too Good at Goodbyes",
    "Adele - All I Ask",
    "Dean Lewis - Be Alright",
    "Tom Odell - Another Love"
  ]
},
{
    id: 'song-129',
  "title": "In My Bones",
  "artist": "Ray Dalton",
  "year": 2020,
  "tags": ["2020s", "Pop", "Soul", "Electro"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Ray Dalton - In My Bones_01.mp3"
  ],
  "distractors": [
    "John Newman - Love Me Again",
    "Aloe Blacc - The Man",
    "Sam Sparro - Black and Gold",
    "MNEK - Colour",
    "MKTO - Classic",
    "Robin Thicke - Blurred Lines"
  ]
},
{
    id: 'song-130',
  "title": "À nos héros du quotidien",
  "artist": "Soprano",
  "year": 2019,
  "tags": ["2010s", "Pop", "Rap", "French"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Soprano - À nos héros du quotidien_01.mp3",
    "/public/audio/001/Soprano - À nos héros du quotidien_02.mp3"
  ],
  "distractors": [
    "Kendji Girac - Les yeux de la mama",
    "Black M - Sur ma route",
    "Vitaa & Slimane - Avant toi",
    "Claudio Capéo - Un homme debout",
    "Amir - J'ai cherché",
    "Bigflo & Oli - Demain"
  ]
},
{
    id: 'song-131',
  "title": "Blinding Lights",
  "artist": "The Weeknd",
  "year": 2019,
  "tags": ["2010s", "Pop", "Electro"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/The Weeknd - Blinding Lights_01.mp3",
    "/public/audio/001/The Weeknd - Blinding Lights_02.mp3"
  ],
  "distractors": [
    "Dua Lipa - Don't Start Now",
    "Bruno Mars - Locked Out of Heaven",
    "Daft Punk - Get Lucky",
    "The Weeknd - Save Your Tears",
    "Tove Lo - Disco Tits",
    "Lady Gaga - Stupid Love"
  ]
},
{
    id: 'song-132',
  "title": "In Your Eyes",
  "artist": "The Weeknd",
  "year": 2020,
  "tags": ["2020s", "Pop", "R&B", "Electro", "Soul"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/The Weeknd - In Your Eyes_01.mp3"],
  "distractors": [
    "Dua Lipa - Physical",
    "Tame Impala - The Less I Know The Better",
    "Bruno Mars - That's What I Like",
    "The Weeknd - Blinding Lights",
    "Miguel - Sky Walker",
    "Frank Ocean - Chanel"
  ]
},
{
    id: 'song-133',
  "title": "Fingertips",
  "artist": "Tom Gregory",
  "year": 2020,
  "tags": ["2020s", "Pop", "Electro", "Soul"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Tom Gregory - Fingertips_01.mp3",
    "/public/audio/001/Tom Gregory - Fingertips_02.mp3"
  ],
  "distractors": [
    "JP Cooper - September Song",
    "Rhys Lewis - No Right To Love You",
    "Dean Lewis - Be Alright",
    "Tom Walker - Leave a Light On",
    "James Bay - Let It Go",
    "Lewis Capaldi - Someone You Loved"
  ]
},
{
    id: 'song-134',
  "title": "Avant toi",
  "artist": "VITAA & SLIMANE",
  "year": 2019,
  "tags": ["2010s", "Pop", "French", "R&B", "Soul"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/VITAA & SLIMANE - Avant toi_01.mp3"
  ],
  "distractors": [
    "Amir & Soprano - La fête",
    "Slimane - Ça va ça vient",
    "Vianney - J'm'en vais",
    "Clara Luciani - La grenade",
    "Camélia Jordana - Non, non, non (écouter Barbara)",
    "Patrick Fiori & Florent Pagny - 4 mots sur un piano"
  ]
},
{
    id: 'song-135',
  "title": "Control",
  "artist": "Zoe Wees",
  "year": 2020,
  "tags": ["2020s", "Pop", "Soul", "R&B"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Zoe Wees - Control_01.mp3"
  ],
  "distractors": [
    "James Bay - Let It Go",
    "LP - Lost on You",
    "Sia - Chandelier",
    "Birdy - Skinny Love",
    "Tate McRae - You Broke Me First",
    "Ruelle - I Get to Love You"
  ]
},
{
    id: 'song-136',
  "title": "À nos actes manqués",
  "artist": "Fredericks, Goldman & Jones",
  "year": 1991,
  "tags": ["90s", "Pop", "French"],
  "difficulty": 1,
  "audioUrls": [
    "/public/audio/001/Fredericks,Goldman & Jones - A nos actes manqués_01.mp3",
    "/public/audio/001/Fredericks,Goldman & Jones - A nos actes manqués_02.mp3"
  ],
  "distractors": [
    "Jean-Jacques Goldman - Il suffira d’un signe",
    "Francis Cabrel - Je t’aimais, je t’aime, je t’aimerai",
    "Michel Berger - La groupie du pianiste",
    "Zazie - Je suis un homme",
    "Florent Pagny - Savoir aimer",
    "Patrick Bruel - Place des grands hommes"
  ]
},
{
    id: 'song-137',
  "title": "(Everything I Do) I Do It For You",
  "artist": "Bryan Adams",
  "year": 1991,
  "tags": ["90s", "Rock", "Pop"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Bryan Adams - (Everything I Do) I Do It For You_01.mp3"
  ],
  "distractors": [
    "Aerosmith - I Don't Want to Miss a Thing",
    "Bon Jovi - Always",
    "Celine Dion - Because You Loved Me",
    "Phil Collins - Against All Odds",
    "Richard Marx - Right Here Waiting",
    "Roxette - It Must Have Been Love"
  ]
},
{
    id: 'song-138',
  "title": "The Shoop Shoop Song (It's In His Kiss)",
  "artist": "Cher",
  "year": 1990,
  "tags": ["90s", "Pop", "Classic"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Cher - The Shoop Shoop Song (It's In His Kiss)_01.mp3"
  ],
  "distractors": [
    "Bette Midler - Boogie Woogie Bugle Boy",
    "Cyndi Lauper - Girls Just Want to Have Fun",
    "Aretha Franklin - Respect",
    "Dusty Springfield - Son of a Preacher Man",
    "The Ronettes - Be My Baby",
    "Diana Ross - You Can't Hurry Love"
  ]
},
{
    id: 'song-139',
  "title": "Gypsy Woman (She's Homeless)",
  "artist": "Crystal Waters",
  "year": 1991,
  "tags": ["90s", "House", "Pop", "Electro"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Crystal Waters - Gypsy Woman (She's Homeless)_01.mp3"
  ],
  "distractors": [
    "Robin S. - Show Me Love",
    "CeCe Peniston - Finally",
    "Black Box - Ride on Time",
    "Snap! - Rhythm Is a Dancer",
    "Deee-Lite - Groove Is in the Heart",
    "C+C Music Factory - Gonna Make You Sweat (Everybody Dance Now)"
  ]
},
{
    id: 'song-140',
  "title": "Calling Elvis",
  "artist": "Dire Straits",
  "year": 1991,
  "tags": ["90s", "Rock", "Classic"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Dire Straits - Calling Elvis_01.mp3",
    "/public/audio/001/Dire Straits - Calling Elvis_02.mp3"
  ],
  "distractors": [
    "Mark Knopfler - What It Is",
    "Eric Clapton - Layla (Unplugged)",
    "Phil Collins - Another Day in Paradise",
    "Chris Rea - On the Beach",
    "The Police - Every Breath You Take",
    "Pink Floyd - Learning to Fly"
  ]
},
{
    id: 'song-141',
  "title": "No Son Of Mine",
  "artist": "Genesis",
  "year": 1991,
  "tags": ["90s", "Rock", "Classic"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Genesis - No Son Of Mine_01.mp3",
    "/public/audio/001/Genesis - No Son Of Mine_02.mp3"
  ],
  "distractors": [
    "Phil Collins - In the Air Tonight",
    "Peter Gabriel - Digging in the Dirt",
    "Dire Straits - Brothers in Arms",
    "Sting - Fields of Gold",
    "Toto - I Will Remember",
    "Mike + The Mechanics - The Living Years"
  ]
},
{
    id: 'song-142',
  "title": "Freedom! ’90",
  "artist": "George Michael",
  "year": 1990,
  "tags": ["90s", "Pop", "Soul"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/George Michael - Freedom! ’90_01.mp3"
  ],
  "distractors": [
    "George Michael - Faith",
    "George Michael - Father Figure",
    "Wham! - Everything She Wants",
    "Prince - Cream",
    "Seal - Crazy",
    "Terence Trent D'Arby - Wishing Well"
  ]
},
{
    id: 'song-143',
  "title": "Don't Cry",
  "artist": "Guns N' Roses",
  "year": 1991,
  "tags": ["90s", "Rock", "Metal"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Guns N' Roses - Don't Cry_01.mp3",
    "/public/audio/001/Guns N' Roses - Don't Cry_02.mp3"
  ],
  "distractors": [
    "Aerosmith - Crazy",
    "Bon Jovi - Always",
    "Skid Row - I Remember You",
    "Metallica - Nothing Else Matters",
    "Poison - Every Rose Has Its Thorn",
    "Def Leppard - Hysteria"
  ]
},
{
    id: 'song-144',
  "title": "Justify My Love",
  "artist": "Madonna",
  "year": 1990,
  "tags": ["90s", "Pop", "Electro", "R&B"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Madonna - Justify My Love_01.mp3",
    "/public/audio/001/Madonna - Justify My Love_02.mp3"
  ],
  "distractors": [
    "Janet Jackson - That's the Way Love Goes",
    "Prince - Sexy MF",
    "Kylie Minogue - Confide in Me",
    "Enigma - Sadeness (Part I)",
    "George Michael - Too Funky",
    "Sade - No Ordinary Love"
  ]
},
{
    id: 'song-145',
  "title": "Désenchantée",
  "artist": "Mylène Farmer",
  "year": 1991,
  "tags": ["90s", "Pop", "Electro", "French"],
  "difficulty": 1,
  "audioUrls": [
    "/public/audio/001/Mylène Farmer - Désenchantée_01.mp3"
  ],
  "distractors": [
    "Jeanne Mas - En rouge et noir",
    "France Gall - Résiste",
    "Patricia Kaas - Mademoiselle chante le blues",
    "Indochine - J'ai demandé à la lune",
    "Lio - Amoureux solitaires",
    "Julie Pietri - Eve lève-toi"
  ]
},
{
    id: 'song-146',
  "title": "Place des grands hommes",
  "artist": "Patrick Bruel",
  "year": 1991,
  "tags": ["90s", "Pop", "French"],
  "difficulty": 1,
  "audioUrls": [
    "/public/audio/001/Patrick Bruel - Place des grands hommes_01.mp3"
  ],
  "distractors": [
    "Francis Cabrel - Je t'aimais, je t'aime, je t'aimerai",
    "Jean-Jacques Goldman - Là-bas",
    "Alain Souchon - Foule sentimentale",
    "Daniel Balavoine - L'Aziza",
    "Michel Sardou - Les Lacs du Connemara",
    "Renaud - Mistral gagnant"
  ]
},
{
    id: 'song-147',
  "title": "Rush, Rush",
  "artist": "Paula Abdul",
  "year": 1991,
  "tags": ["90s", "Pop", "R&B"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Paula Abdul - Rush, Rush_01.mp3",
    "/public/audio/001/Paula Abdul - Rush, Rush_02.mp3"
  ],
  "distractors": [
    "Janet Jackson - That's the Way Love Goes",
    "TLC - Baby-Baby-Baby",
    "Madonna - Vogue",
    "Mariah Carey - Vision of Love",
    "Whitney Houston - I'm Your Baby Tonight",
    "Taylor Dayne - I'll Be Your Shelter"
  ]
},
{
    id: 'song-148',
  "title": "Losing My Religion",
  "artist": "R.E.M.",
  "year": 1991,
  "tags": ["90s", "Rock", "Alternative"],
  "difficulty": 1,
  "audioUrls": ["/public/audio/001/R.E.M. - Losing My Religion_01.mp3"],
  "distractors": [
    "Counting Crows - Mr. Jones",
    "The Cranberries - Linger",
    "U2 - With or Without You",
    "Radiohead - Creep",
    "Pearl Jam - Alive",
    "Soundgarden - Black Hole Sun"
  ]
},
{
    id: 'song-149',
  "title": "Shiny Happy People",
  "artist": "R.E.M.",
  "year": 1991,
  "tags": ["90s", "Rock", "Alternative", "Pop"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/R.E.M. - Shiny Happy People_01.mp3",
    "/public/audio/001/R.E.M. - Shiny Happy People_02.mp3"
  ],
  "distractors": [
    "The B-52's - Love Shack",
    "Crowded House - Don't Dream It's Over",
    "Toad the Wet Sprocket - Walk on the Ocean",
    "The Smashing Pumpkins - 1979",
    "Gin Blossoms - Hey Jealousy",
    "Sinead O'Connor - Nothing Compares 2 U"
  ]
},
{
    id: 'song-150',
  "title": "Wind Of Change",
  "artist": "Scorpions",
  "year": 1990,
  "tags": ["80s", "90s", "Rock", "Classic", "Metal"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Scorpions - Wind Of Change_01.mp3"
  ],
  "distractors": [
    "Bon Jovi - Livin' On A Prayer",
    "Guns N' Roses - November Rain",
    "Def Leppard - Pour Some Sugar On Me",
    "Metallica - Nothing Else Matters",
    "Europe - The Final Countdown",
    "Aerosmith - Crazy"
  ]
},
{
    id: 'song-151',
  "title": "Something Got Me Started",
  "artist": "Simply Red",
  "year": 1991,
  "tags": ["80s", "90s", "Pop", "Soul", "Funk"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Simply Red - Something Got Me Started_01.mp3"
  ],
  "distractors": [
    "Level 42 - Something About You",
    "Seal - Crazy",
    "Sade - Smooth Operator",
    "Tears for Fears - Sowing the Seeds of Love",
    "INXS - Need You Tonight",
    "George Michael - Faith"
  ]
},
{
    id: 'song-152',
  "title": "Déjeuner en paix",
  "artist": "Stephan Eicher",
  "year": 1991,
  "tags": ["90s", "Pop", "Rock", "French"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Stephan Eicher - Déjeuner en paix_01.mp3"
  ],
  "distractors": [
    "Jean-Jacques Goldman - Là-bas",
    "Alain Bashung - Osez Joséphine",
    "Marc Lavoine - Elle a les yeux revolver",
    "Calogero - En apesanteur",
    "Indochine - L'Aventurier",
    "Louise Attaque - J't'emmène au vent"
  ]
},
{
    id: 'song-153',
  "title": "Homely Girl",
  "artist": "UB40",
  "year": 1989,
  "tags": ["80s", "Pop", "Reggae", "Rock"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/UB40 - Homely Girl_01.mp3"
  ],
  "distractors": [
    "Inner Circle - Sweat (A La La La La Long)",
    "Toots & The Maytals - 54-46 That's My Number",
    "Jimmy Cliff - The Harder They Come",
    "Steel Pulse - Your House",
    "The Police - Every Breath You Take",
    "Bob Marley & The Wailers - Could You Be Loved"
  ]
},
{
    id: 'song-154',
  "title": "All The Man That I Need",
  "artist": "Whitney Houston",
  "year": 1990,
  "tags": ["90s", "Pop", "R&B", "Soul", "Classic"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Whitney Houston - All The Man That I Need_01.mp3"
  ],
  "distractors": [
    "Mariah Carey - Vision of Love",
    "Céline Dion - Because You Loved Me",
    "Toni Braxton - Un-Break My Heart",
    "Aretha Franklin - I Knew You Were Waiting (For Me)",
    "Anita Baker - Sweet Love",
    "Beverley Knight - Shoulda Woulda Coulda"
  ]
},
{
    id: 'song-155',
  "title": "Saga Africa",
  "artist": "Yannick Noah",
  "year": 1991,
  "tags": ["90s", "French"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Yannick Noah - Saga Africa_01.mp3"
  ],
  "distractors": [
    "Tonton David - Peuples du monde",
    "Manu Chao - Bongo Bong",
    "Kassav' - Zouk la sé sèl médikaman nou ni",
    "Alpha Blondy - Cocody Rock",
    "Zouk Machine - Maldòn' (la musique dans la peau)",
    "Les Négresses Vertes - Voilà l'été"
  ]
},
{
    id: 'song-156',
  "title": "Foolish",
  "artist": "Ashanti",
  "year": 2002,
  "tags": ["2000s", "R&B", "Hip-Hop", "Soul"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Ashanti - Foolish_01.mp3"],
  "distractors": [
    "Aaliyah - Try Again",
    "Mary J. Blige - Family Affair",
    "Beyoncé - Naughty Girl",
    "Kelly Rowland - Can't Nobody",
    "Ciara - Goodies",
    "Brandy - Full Moon"
  ]
},
{
    id: 'song-157',
  "title": "Complicated",
  "artist": "Avril Lavigne",
  "year": 2002,
  "tags": ["2000s", "Pop", "Rock", "Pop Punk"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Avril Lavigne - Complicated_01.mp3"],
  "distractors": [
    "Michelle Branch - Everywhere",
    "Kelly Clarkson - Since U Been Gone",
    "Pink - Get the Party Started",
    "Alanis Morissette - Ironic",
    "Paramore - Misery Business",
    "Evanescence - Bring Me to Life"
  ]
},
{
    id: 'song-158',
  "title": "When You Look At Me",
  "artist": "Christina Milian",
  "year": 2002,
  "tags": ["2000s", "Pop", "R&B"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Christina Milian - When You Look At Me_01.mp3"],
  "distractors": [
    "Ashanti - Foolish",
    "Aaliyah - Try Again",
    "Jessica Simpson - With You",
    "Beyoncé - Naughty Girl",
    "Mýa - Case of the Ex",
    "Amerie - 1 Thing"
  ]
},
{
    id: 'song-159',
  "title": "Come Back to Me",
  "artist": "Cunnie Williams",
  "year": 2002,
  "tags": ["2000s", "Soul", "R&B"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Cunnie Williams - Come back to me_01.mp3"],
  "distractors": [
    "Maxwell - This Woman's Work",
    "D'Angelo - Lady",
    "Eric Benét - Spend My Life With You",
    "Brian McKnight - Back at One",
    "Al Green - Let's Stay Together",
    "Anthony Hamilton - Charlene"
  ]
},
{
    id: 'song-160',
  "title": "Love Don't Let Me Go",
  "artist": "David Guetta",
  "year": 2002,
  "tags": ["2000s", "Electro", "House", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/David Guetta - Love Don't Let Me Go_01.mp3"],
  "distractors": [
    "Bob Sinclar - World, Hold On",
    "Benny Benassi - Satisfaction",
    "Martin Solveig - Rocking Music",
    "Daft Punk - One More Time",
    "Eric Prydz - Call on Me",
    "Modjo - Lady (Hear Me Tonight)"
  ]
},
{
    id: 'song-161',
  "title": "Comme Un Boomerang",
  "artist": "Étienne Daho & Dani",
  "year": 2001,
  "tags": ["2000s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Étienne Daho & Dani - Comme Un Boomerang_01.mp3"],
  "distractors": [
    "Étienne Daho - Duel au Soleil",
    "Vanessa Paradis - Joe le Taxi",
    "Lio - Amoureux Solitaires",
    "Indochine - Tes Yeux Noirs",
    "France Gall - Résiste",
    "Alain Souchon - Foule Sentimentale"
  ]
},
{
    id: 'song-162',
  "title": "Elle s'ennuie",
  "artist": "Gérald De Palmas",
  "year": 2002,
  "tags": ["2000s", "Pop", "Rock", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Gérald De Palmas - Elle s'ennuie_01.mp3"],
  "distractors": [
    "Calogero - En apesanteur",
    "Jean-Jacques Goldman - Ensemble",
    "Zazie - Rue de la paix",
    "Pascal Obispo - Lucie",
    "Marc Lavoine - Je me sens si seul",
    "Raphaël - Caravane"
  ]
},
{
    id: 'song-163',
  "title": "J'ai demandé à la lune",
  "artist": "Indochine",
  "year": 2002,
  "tags": ["2000s", "Rock", "Pop", "French"],
  "difficulty": 1,
  "audioUrls": ["/public/audio/001/Indochine - J'ai demandé à la lune_01.mp3"],
  "distractors": [
    "Mickey 3D - Respire",
    "Jean-Louis Aubert - Alter Ego",
    "Zazie - Je suis un homme",
    "Calogero - Tien An Men",
    "Saez - Jeune et con",
    "Noir Désir - Le vent nous portera"
  ]
},
{
    id: 'song-164',
  "title": "Au Soleil",
  "artist": "Jenifer",
  "year": 2002,
  "tags": ["2000s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Jenifer - Au Soleil_01.mp3"],
  "distractors": [
    "Lorie - Je serai (ta meilleure amie)",
    "Alizée - Moi... Lolita",
    "Priscilla - Regarde-moi (teste-moi, déteste-moi)",
    "Natasha St-Pier - Tu trouveras",
    "Amel Bent - Ma philosophie",
    "Hélène Ségara - Il y a trop de gens qui t’aiment"
  ]
},
{
    id: 'song-165',
  "title": "The Ketchup Song (Asereje)",
  "artist": "Las Ketchup",
  "year": 2002,
  "tags": ["2000s", "Pop", "Dance"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Las Ketchup - The Ketchup Song (Asereje)_01.mp3"],
  "distractors": [
    "Lou Bega - Mambo No. 5",
    "Los Del Rio - Macarena",
    "Ricky Martin - Livin' La Vida Loca",
    "O-Zone - Dragostea Din Tei",
    "Charly & Lulu - Le feu ça brûle",
    "Madonna - La Isla Bonita"
  ]
},
{
    id: 'song-166',
  "title": "How You Remind Me",
  "artist": "Nickelback",
  "year": 2001,
  "tags": ["2000s", "Rock", "Grunge"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Nickelback - How You Remind Me_01.mp3"],
  "distractors": [
    "Creed - With Arms Wide Open",
    "3 Doors Down - Kryptonite",
    "Puddle of Mudd - Blurry",
    "Staind - It's Been Awhile",
    "Daughtry - It's Not Over",
    "Lifehouse - Hanging by a Moment"
  ]
},
{
    id: 'song-167',
  "title": "Unité",
  "artist": "Nuttea",
  "year": 2000,
  "tags": ["2000s", "Reggae", "French"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Nuttea - Unité_01.mp3"],
  "distractors": [
    "Tiken Jah Fakoly - Plus rien ne m'étonne",
    "Raggasonic - Bleu blanc rouge",
    "Sergent Garcia - Vamos a bailar",
    "Alpha Blondy - Cocody Rock",
    "MC Solaar - Solaar pleure",
    "Pierpoljak - Je sais pas jouer"
  ]
},
{
    id: 'song-168',
  "title": "I Need A Girl",
  "artist": "P. Diddy [feat. Usher & Loon]",
  "year": 2002,
  "tags": ["2000s", "Hip-Hop", "R&B"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/P. Diddy [feat. Usher & Loon] - I Need A Girl_01.mp3"],
  "distractors": [
    "Usher - U Got It Bad",
    "Mario Winans - I Don't Wanna Know",
    "112 - Peaches & Cream",
    "Ja Rule [feat. Ashanti] - Always On Time",
    "Nelly - Dilemma",
    "LL Cool J - Luv U Better"
  ]
},
{
  id: 'song-169',
  "title": "Qui est l'exemple",
  "artist": "Rohff",
  "year": 2001,
  "tags": ["2000s", "Rap", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Rohff - Qui est l'exemple_01.mp3"],
  "distractors": [
    "Sniper - Gravé dans la roche",
    "Diam's - La Boulette",
    "Lunatic - Le crime paie",
    "Kery James - Banlieusards",
    "Booba - Boulbi",
    "Sexion d'Assaut - Désolé"
  ]
},
{
    id: 'song-170',
  "title": "Whenever, Wherever",
  "artist": "Shakira",
  "year": 2001,
  "tags": ["2000s", "Pop", "Latin", "Dance"],
  "difficulty": 1,
  "audioUrls": ["/public/audio/001/Shakira - Whenever, Wherever_01.mp3"],
  "distractors": [
    "Jennifer Lopez - Let's Get Loud",
    "Enrique Iglesias - Bailamos",
    "Ricky Martin - Livin' La Vida Loca",
    "Gloria Estefan - Rhythm Is Gonna Get You",
    "Thalía - Arrasando",
    "Paulina Rubio - Y Yo Sigo Aquí"
  ]
},
{
    id: 'song-171',
  "title": "Murder On The Dancefloor",
  "artist": "Sophie Ellis-Bextor",
  "year": 2001,
  "tags": ["2000s", "Pop", "Dance", "Electro", "Disco"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Sophie Ellis-Bextor - Murder On The Dancefloor_01.mp3",
    "/public/audio/001/Sophie Ellis-Bextor - Murder On The Dancefloor_02.mp3"
  ],
  "distractors": [
    "Kylie Minogue - Can't Get You Out of My Head",
    "Girls Aloud - Sound of the Underground",
    "Alizée - Moi... Lolita",
    "Bananarama - Venus",
    "Annie - Chewing Gum",
    "Basement Jaxx - Romeo"
  ]
},
{
    id: 'song-172',
  "title": "The World's Greatest",
  "artist": "R. Kelly",
  "year": 2001,
  "tags": ["2000s", "R&B", "Soul", "Pop"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/R. Kelly - The World's Greatest_01.mp3",
    "/public/audio/001/R. Kelly - The World's Greatest_02.mp3"
  ],
  "distractors": [
    "Usher - U Got It Bad",
    "Alicia Keys - Fallin'",
    "Brian McKnight - Back at One",
    "Maxwell - Fortunate",
    "Ginuwine - Differences",
    "Ne-Yo - So Sick"
  ]
},
{
    id: 'song-173',
  "title": "A Thousand Miles",
  "artist": "Vanessa Carlton",
  "year": 2002,
  "tags": ["2000s", "Pop", "Classic"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Vanessa Carlton - A Thousand Miles_01.mp3"],
  "distractors": [
    "Colbie Caillat - Bubbly",
    "Michelle Branch - Everywhere",
    "Natasha Bedingfield - Unwritten",
    "Ingrid Michaelson - The Way I Am",
    "Sara Bareilles - Love Song",
    "Dido - White Flag"
  ]
},
{
    id: 'song-174',
  "title": "Island In The Sun",
  "artist": "Weezer",
  "year": 2001,
  "tags": ["2000s", "Rock", "Pop"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Weezer - Island In The Sun_01.mp3"],
  "distractors": [
    "The Smashing Pumpkins - 1979",
    "Third Eye Blind - Semi-Charmed Life",
    "Blink-182 - All The Small Things",
    "Jimmy Eat World - The Middle",
    "Foo Fighters - Learn to Fly",
    "The Offspring - Why Don't You Get a Job?"
  ]
},
{
    id: 'song-175',
  "title": "Bambou",
  "artist": "Alain Chamfort",
  "year": 1980,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Alain Chamfort - Bambou_01.mp3"],
  "distractors": [
    "Jacques Dutronc - L'opportuniste",
    "Serge Gainsbourg - La Javanaise",
    "Etienne Daho - Week-end à Rome",
    "Marc Lavoine - Elle a les yeux revolver",
    "Michel Berger - La Groupie du pianiste",
    "Daniel Balavoine - L'Aziza"
  ]
},
{
    id: 'song-176',
  "title": "Tata Yoyo",
  "artist": "Annie Cordy",
  "year": 1980,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Annie Cordy - Tata Yoyo_01.mp3"],
  "distractors": [
    "Chantal Goya - Bécassine",
    "France Gall - Ella, elle l'a",
    "Maurice Chevalier - Valentine",
    "Dalida - Laissez-moi danser",
    "Claude François - Alexandrie Alexandra",
    "Rika Zaraï - Casatchok"
  ]
},
{
    id: 'song-177',
  "title": "Woman in Love",
  "artist": "Barbra Streisand",
  "year": 1980,
  "tags": ["80s", "Pop", "Classic"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Barbra Streisand - Woman in Love_01.mp3",
    "/public/audio/001/Barbra Streisand - Woman in Love_02.mp3"
  ],
  "distractors": [
    "Whitney Houston - Greatest Love of All",
    "Celine Dion - Because You Loved Me",
    "Diana Ross - Endless Love",
    "Laura Branigan - Gloria",
    "Tina Turner - What's Love Got to Do with It",
    "Olivia Newton-John - Physical"
  ]
},
{
    id: 'song-178',
  "title": "Couleur menthe à l'eau",
  "artist": "Eddy Mitchell",
  "year": 1980,
  "tags": ["80s", "Rock", "French"],
  "difficulty": 1,
  "audioUrls": ["/public/audio/001/Eddy Mitchell - Couleur menthe à l'eau_01.mp3"],
  "distractors": [
    "Johnny Hallyday - Que je t'aime",
    "Michel Sardou - Les Lacs du Connemara",
    "Claude François - Alexandrie Alexandra",
    "Charles Aznavour - Emmenez-moi",
    "Serge Gainsbourg - Je t'aime... moi non plus",
    "Renaud - Morgane de toi"
  ]
},
{
    id: 'song-179',
  "title": "Mon fils ma bataille",
  "artist": "Daniel Balavoine",
  "year": 1980,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 1,
  "audioUrls": ["/public/audio/001/Daniel Balavoine - Mon fils ma bataille_01.mp3"],
  "distractors": [
    "Jean-Jacques Goldman - Je te donne",
    "Michel Berger - La groupie du pianiste",
    "Francis Cabrel - Je l'aime à mourir",
    "Patrick Bruel - Casser la voix",
    "Claude François - Cette année-là",
    "Julien Clerc - Ce n'est rien"
  ]
},
{
    id: 'song-180',
  "title": "Mademoiselle Chang",
  "artist": "Michel Berger",
  "year": 1980,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Michel Berger - Mademoiselle Chang_01.mp3"],
  "distractors": [
    "France Gall - Ella, elle l'a",
    "Daniel Balavoine - L'Aziza",
    "Michel Jonasz - Super Nana",
    "Jean-Jacques Goldman - Quand la musique est bonne",
    "Julien Clerc - Femmes, je vous aime",
    "Alain Souchon - Foule sentimentale"
  ]
},
{
    id: 'song-181',
  "title": "Etre une femme",
  "artist": "Michel Sardou",
  "year": 1981,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 1,
  "audioUrls": ["/public/audio/001/Michel Sardou - Etre une femme_01.mp3"],
  "distractors": [
    "Johnny Hallyday - Quelque chose de Tennessee",
    "Claude François - Alexandrie Alexandra",
    "Patrick Bruel - Casser la voix",
    "Julien Clerc - Fais-moi une place",
    "Daniel Balavoine - Mon fils ma bataille",
    "France Gall - Musique"
  ]
},
{
    id: 'song-182',
  "title": "J'aime regarder les filles",
  "artist": "Patrick Coutin",
  "year": 1981,
  "tags": ["80s", "Rock", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Patrick Coutin – J'aime regarder les filles_01.mp3"],
  "distractors": [
    "Téléphone - New York avec toi",
    "Indochine - L'Aventurier",
    "Renaud - Mistral gagnant",
    "Étienne Daho - Week-end à Rome",
    "Taxi Girl - Cherchez le garçon",
    "Les Rita Mitsouko - Marcia Baïla"
  ]
},
{
    id: 'song-183',
  "title": "In The Air Tonight",
  "artist": "Phil Collins",
  "year": 1981,
  "tags": ["80s", "Pop", "Rock", "Classic"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Phil Collins - In The Air Tonight_01.mp3"],
  "distractors": [
    "Peter Gabriel - Sledgehammer",
    "Genesis - Land of Confusion",
    "Tears for Fears - Everybody Wants to Rule the World",
    "Mike + The Mechanics - The Living Years",
    "Bruce Hornsby - The Way It Is",
    "Simple Minds - Don't You (Forget About Me)"
  ]
},
{
    id: 'song-184',
  "title": "Elle est d'ailleurs",
  "artist": "Pierre Bachelet",
  "year": 1980,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Pierre Bachelet - Elle est d'ailleurs_01.mp3"],
  "distractors": [
    "Michel Sardou - Les Lacs du Connemara",
    "Julien Clerc - Ce n'est rien",
    "Jean-Jacques Goldman - Je te donne",
    "Francis Cabrel - Je l'aime à mourir",
    "Daniel Balavoine - L'Aziza",
    "Michel Berger - La groupie du pianiste"
  ]
},
{
    id: 'song-185',
  "title": "Pour le Plaisir",
  "artist": "Herbert Léonard",
  "year": 1981,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 1,
  "audioUrls": [
    "/public/audio/001/Pour le Plaisir - Herbert Léonard_01.mp3",
    "/public/audio/001/Pour le Plaisir - Herbert Léonard_02.mp3"
  ],
  "distractors": [
    "Michel Sardou - Les Lacs du Connemara",
    "Francis Cabrel - Je l'aime à mourir",
    "Daniel Balavoine - L'Aziza",
    "Michel Berger - La groupie du pianiste",
    "Jean-Jacques Goldman - Envole-moi",
    "Patricia Kaas - Mademoiselle chante le blues"
  ]
},
{
    id: 'song-186',
  "title": "Radio",
  "artist": "Michel Polnareff",
  "year": 1981,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Michel Polnareff - Radio_01.mp3",
    "/public/audio/001/Michel Polnareff - Radio_02.mp3"
  ],
  "distractors": [
    "Jean-Jacques Goldman - Je te donne",
    "Michel Berger - Serge",
    "France Gall - Ella, elle l'a",
    "Alain Souchon - Foule sentimentale",
    "Indochine - L'aventurier",
    "Etienne Daho - Tombé pour la France"
  ]
},
{
    id: 'song-187',
  "title": "Reality",
  "artist": "Richard Sanderson",
  "year": 1980,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Richard Sanderson - Reality_01.mp3",
    "/public/audio/001/Richard Sanderson - Reality_02.mp3"
  ],
  "distractors": [
    "Francis Cabrel - Je l'aime à mourir",
    "Michel Sardou - Les Lacs du Connemara",
    "Jean-Jacques Goldman - Quand la musique est bonne",
    "Véronique Sanson - Amoureuse",
    "Daniel Balavoine - Sauver l'amour",
    "Julien Clerc - Ma préférence"
  ]
},
{
    id: 'song-188',
  "title": "Tainted Love",
  "artist": "Soft Cell",
  "year": 1981,
  "tags": ["80s", "Pop", "Electro", "Classic"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Soft Cell - Tainted Love_01.mp3"],
  "distractors": [
    "Depeche Mode - Just Can't Get Enough",
    "New Order - Blue Monday",
    "Eurythmics - Sweet Dreams",
    "Pet Shop Boys - West End Girls",
    "Human League - Don't You Want Me",
    "A-ha - Take On Me"
  ]
},
{
    id: 'song-189',
  "title": "Enola Gay",
  "artist": "OMD (Orchestral Manoeuvres in the Dark)",
  "year": 1980,
  "tags": ["80s", "Pop", "Electro", "Rock"],
  "difficulty": 1,
  "audioUrls": [
    "/public/audio/001/The OMD (Orchestral Manoeuvres in the Dark) - ENOLA GAY_01.mp3",
    "/public/audio/001/The OMD (Orchestral Manoeuvres in the Dark) - ENOLA GAY_02.mp3"
  ],
  "distractors": [
    "Depeche Mode - Just Can't Get Enough",
    "New Order - Blue Monday",
    "Eurythmics - Sweet Dreams",
    "A-ha - Take On Me",
    "Pet Shop Boys - West End Girls",
    "Human League - Don't You Want Me"
  ]
},
{
    id: 'song-190',
  "title": "Start Me Up",
  "artist": "The Rolling Stones",
  "year": 1981,
  "tags": ["80s", "Rock"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/The Rolling Stones - Start Me Up_01.mp3"],
  "distractors": [
    "Led Zeppelin - Black Dog",
    "The Who - Baba O'Riley",
    "Aerosmith - Walk This Way",
    "AC/DC - You Shook Me All Night Long",
    "Bruce Springsteen - Born to Run",
    "Tom Petty - Refugee"
  ]
},
{
    id: 'song-191',
  "title": "Fade To Grey",
  "artist": "Visage",
  "year": 1980,
  "tags": ["80s", "Pop", "Electro", "New Wave", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Visage - Fade To Grey_01.mp3"],
  "distractors": [
    "Human League - Don't You Want Me",
    "Eurythmics - Sweet Dreams",
    "Gary Numan - Cars",
    "Depeche Mode - Just Can't Get Enough",
    "Ultravox - Vienna",
    "Soft Cell - Tainted Love"
  ]
},
{
    id: 'song-192',
  "title": "Easy On Me",
  "artist": "Adele",
  "year": 2021,
  "tags": ["2020s", "Pop"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Adele - Easy On Me_01.mp3"],
  "distractors": [
    "Adele - Hello",
    "Sam Smith - Stay With Me",
    "Lana Del Rey - Summertime Sadness",
    "Alicia Keys - If I Ain't Got You",
    "Billie Eilish - My Future",
    "Leona Lewis - Bleeding Love"
  ]
},
{
    id: 'song-193',
  "title": "Bruxelles je t'aime",
  "artist": "Angèle",
  "year": 2021,
  "tags": ["2020s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Angèle - Bruxelles je t'aime_01.mp3"],
  "distractors": [
    "Clara Luciani - Le reste",
    "Christine and the Queens - La marcheuse",
    "Juliette Armanet - L’Amour en solitaire",
    "Vianney - Beau-papa",
    "Louane - Aimer à mort",
    "Camélia Jordana - Facile"
  ]
},
{
    id: 'song-194',
  "title": "GIRL LIKE ME",
  "artist": "Black Eyed Peas, Shakira",
  "year": 2020,
  "tags": ["2020s", "Pop", "Electro"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Black Eyed Peas, Shakira - GIRL LIKE ME_01.mp3"],
  "distractors": [
    "Shakira - Don't Wait Up",
    "Black Eyed Peas - RITMO (Bad Boys for Life)",
    "Jennifer Lopez - On The Floor",
    "Pitbull - Timber",
    "David Guetta & Sia - Let's Love",
    "Enrique Iglesias - Bailando"
  ]
},
{
    id: 'song-195',
  "title": "La grenade",
  "artist": "Clara Luciani",
  "year": 2018,
  "tags": ["2010s", "Pop", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Clara Luciani - La grenade_01.mp3"],
  "distractors": [
    "Christine and the Queens - Saint Claude",
    "Juliette Armanet - L’indien",
    "Camélia Jordana - Non non non",
    "Angèle - Balance ton quoi",
    "Vianney - Je m’en vais",
    "Zazie - Speed"
  ]
},
{
    id: 'song-196',
  "title": "Le reste",
  "artist": "Clara Luciani",
  "year": 2021,
  "tags": ["2020s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Clara Luciani - Le reste_01.mp3"],
  "distractors": [
    "Juliette Armanet - Le dernier jour du disco",
    "Angèle - Libre",
    "Christine and the Queens - La marcheuse",
    "Véronique Sanson - Chanson sur ma drôle de vie",
    "Camélia Jordana - Facile"
  ]
},
{
    id: 'song-197',
  "title": "Respire encore",
  "artist": "Clara Luciani",
  "year": 2021,
  "tags": ["2020s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Clara Luciani - Respire encore_01.mp3"],
  "distractors": [
    "Juliette Armanet - Qu'importe",
    "Angèle - Bruxelles je t'aime",
    "L'Impératrice - Peur des filles",
    "Véronique Sanson - Bernard's Song",
    "Christine and the Queens - 5 dols"
  ]
},
{
    id: 'song-198',
  "title": "My Universe",
  "artist": "Coldplay X BTS",
  "year": 2021,
  "tags": ["2020s", "Pop", "Rock", "K-Pop", "Electro"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Coldplay X BTS - My Universe_01.mp3",
    "/public/audio/001/Coldplay X BTS - My Universe_02.mp3"
  ],
  "distractors": [
    "Coldplay - Higher Power",
    "BTS - Dynamite",
    "Imagine Dragons - Thunder",
    "Maroon 5 - Memories",
    "OneRepublic - Run"
  ]
},
{
    id: 'song-199',
  "title": "Mon soleil",
  "artist": "DADJU, ANITTA",
  "year": 2021,
  "tags": ["2020s", "Pop", "R&B", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/DADJU, ANITTA - Mon soleil_01.mp3"],
  "distractors": [
    "Dadju - Reine",
    "Anitta - Envolver",
    "Aya Nakamura - Jolie nana",
    "Slimane & Vitaa - Ça va ça vient",
    "Gims - Est-ce que tu m'aimes ?"
  ]
},
{
    id: 'song-200',
  "title": "Bad Habits",
  "artist": "Ed Sheeran",
  "year": 2021,
  "tags": ["2020s", "Pop", "Electro"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Ed Sheeran - Bad Habits_01.mp3",
    "/public/audio/001/Ed Sheeran - Bad Habits_02.mp3"
  ],
  "distractors": [
    "The Weeknd - Blinding Lights",
    "Justin Bieber - Ghost",
    "Dua Lipa - Levitating",
    "Shawn Mendes - When You're Gone",
    "Sam Smith - Diamonds"
  ]
},
{
    id: 'song-201',
  "title": "Shivers",
  "artist": "Ed Sheeran",
  "year": 2021,
  "tags": ["2020s", "Pop", "Electro"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Ed Sheeran - Shivers_01.mp3",
    "/public/audio/001/Ed Sheeran - Shivers_02.mp3"
  ],
  "distractors": [
    "Harry Styles - As It Was",
    "Shawn Mendes - There's Nothing Holdin' Me Back",
    "Justin Bieber - Love Yourself",
    "Charlie Puth - Light Switch",
    "George Ezra - Green Green Grass"
  ]
},
{
    id: 'song-202',
  "title": "Cold Heart",
  "artist": "Elton John & Dua Lipa",
  "year": 2021,
  "tags": ["2020s", "Pop", "Electro", "House"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Elton John & Dua Lipa - Cold Heart_01.mp3",
    "/public/audio/001/Elton John & Dua Lipa - Cold Heart_02.mp3"
  ],
  "distractors": [
    "Calvin Harris & Dua Lipa - One Kiss",
    "David Guetta & Sia - Titanium",
    "Disclosure - Latch",
    "Robyn - Dancing On My Own",
    "M83 - Midnight City"
  ]
},
{
    id: 'song-203',
  "title": "JUSQU'ICI TOUT VA BIEN",
  "artist": "GIMS",
  "year": 2021,
  "tags": ["2020s", "Hip-Hop", "Rap", "French", "Pop"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/GIMS - JUSQU'ICI TOUT VA BIEN_01.mp3"],
  "distractors": [
    "Dadju - Reine",
    "Niska - Réseaux",
    "Aya Nakamura - Djadja",
    "Vegedream - Ramenez la coupe à la maison",
    "Maître Gims - Bella"
  ]
},
{
    id: 'song-204',
  "title": "Follow You",
  "artist": "Imagine Dragons",
  "year": 2021,
  "tags": ["2020s", "Pop", "Rock"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Imagine Dragons - Follow You_01.mp3"],
  "distractors": [
    "OneRepublic - Counting Stars",
    "The Script - Hall of Fame",
    "Imagine Dragons - Believer",
    "Coldplay - Higher Power",
    "X Ambassadors - Renegades"
  ]
},
{
    id: 'song-205',
  "title": "Wrecked",
  "artist": "Imagine Dragons",
  "year": 2021,
  "tags": ["2020s", "Pop", "Rock"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Imagine Dragons - Wrecked_01.mp3",
    "/public/audio/001/Imagine Dragons - Wrecked_02.mp3"
  ],
  "distractors": [
    "Imagine Dragons - Follow You",
    "OneRepublic - Rescue Me",
    "X Ambassadors - Unsteady",
    "Coldplay - The Scientist",
    "The Killers - Somebody Told Me"
  ]
},
{
    id: 'song-206',
  "title": "Iko Iko (My Bestie)",
  "artist": "Justin Wellington",
  "year": 2020,
  "tags": ["2020s", "Pop", "Reggae", "Electro"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Justin Wellington - Iko Iko (My Bestie)_01.mp3"],
  "distractors": [
    "J Balvin - Mi Gente",
    "Kungs - This Girl",
    "Major Lazer - Lean On",
    "Clean Bandit - Rockabye",
    "Sean Paul - Temperature"
  ]
},
{
    id: 'song-207',
  "title": "Evidemment",
  "artist": "Kendji Girac",
  "year": 2021,
  "tags": ["2020s", "Pop", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Kendji Girac - Evidemment_01.mp3"],
  "distractors": [
    "Vianney - Beau-papa",
    "Claudio Capéo - Un homme debout",
    "Soprano - À la vie à l'amour",
    "Slimane - Jusqu'où tu m'aimes",
    "Maître Gims - Sapés comme jamais"
  ]
},
{
    id: 'song-208',
  "title": "Back On My Feet",
  "artist": "Kimberose",
  "year": 2020,
  "tags": ["2020s", "Soul", "French"],
  "difficulty": 5,
  "audioUrls": ["/public/audio/001/Kimberose - Back On My Feet_01.mp3"],
  "distractors": [
    "Ayo - Down on My Knees",
    "India.Arie - Video",
    "Lianne La Havas - Bittersweet",
    "Melody Gardot - Who Will Comfort Me",
    "Corinne Bailey Rae - Put Your Records On"
  ]
},
{
    id: 'song-209',
  "title": "Never Going Home",
  "artist": "Kungs",
  "year": 2021,
  "tags": ["2020s", "Electro", "House", "Pop"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Kungs - Never Going Home_01.mp3"],
  "distractors": [
    "David Guetta - Titanium",
    "Robin Schulz - Sugar",
    "Lost Frequencies - Are You With Me",
    "Calvin Harris - Summer",
    "Martin Solveig - The Night Out"
  ]
},
{
    id: 'song-210',
  "title": "Si on disait",
  "artist": "M. Pokora",
  "year": 2020,
  "tags": ["2020s", "Pop", "French", "R&B"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/M. Pokora - Si on disait_01.mp3"],
  "distractors": [
    "Slimane - Viens on s'aime",
    "Vitaa & Slimane - Ça va ça vient",
    "Tal - Le sens de la vie",
    "Amir - J'ai cherché",
    "Kendji Girac - Andalouse"
  ]
},
{
    id: 'song-211',
  "title": "Wasted Love",
  "artist": "Ofenbach",
  "year": 2021,
  "tags": ["2020s", "Pop", "Electro", "French"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Ofenbach - Wasted Love_01.mp3"],
  "distractors": [
    "Robin Schulz - Sugar",
    "Kygo - Firestone",
    "David Guetta - Titanium",
    "Lost Frequencies - Are You With Me",
    "Martin Solveig - Hello"
  ]
},
{
    id: 'song-212',
  "title": "Ani Kuni",
  "artist": "POLO & PAN",
  "year": 2021,
  "tags": ["2020s", "Pop", "Electro", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/POLO & PAN - Ani Kuni_01.mp3"],
  "distractors": [
    "Parcels - Tieduprightnow",
    "Christine and the Queens - Tilted",
    "Madeon - Icarus",
    "FKJ - Skyline",
    "L'Impératrice - Agitations Tropicales"
  ]
},
{
    id: 'song-212-1',
  "title": "Près des étoiles",
  "artist": "Soprano",
  "year": 2021,
  "tags": ["2020s", "Hip-Hop", "Rap", "French", "Pop"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Soprano - Près des étoiles_01.mp3"],
  "distractors": [
    "Maître Gims - Sapés comme jamais",
    "Black M - Sur ma route",
    "Slimane - Viens on s'aime",
    "Vianney - Beau-papa",
    "Dadju - Reine"
  ]
},
{
    id: 'song-213',
  "title": "Hello",
  "artist": "Adele",
  "year": 2015,
  "tags": ["2010s", "Pop", "Soul", "R&B"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Adele - Hello_01.mp3"],
  "distractors": [
    "Sam Smith - Stay With Me",
    "Lewis Capaldi - Someone You Loved",
    "Sia - Chandelier",
    "Jessie J - Price Tag",
    "James Bay - Let It Go"
  ]
},
{
    id: 'song-214',
  "title": "How Deep Is Your Love",
  "artist": "Bee Gees",
  "year": 1977,
  "tags": ["70s", "Pop", "Disco", "Soul"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Bee Gees - How Deep Is Your Love_01.mp3"],
  "distractors": [
    "Saturday Night - Bay City Rollers",
    "Night Fever - Bee Gees",
    "More Than a Woman - Tavares",
    "You Should Be Dancing - Bee Gees",
    "September - Earth, Wind & Fire"
  ]
},
{
    id: 'song-215',
  "title": "How Deep Is Your Love",
  "artist": "Calvin Harris & Disciples",
  "year": 2015,
  "tags": ["2010s", "House", "Electro", "Pop", "Dance"],
  "difficulty": 5,
  "audioUrls": ["/public/audio/001/Calvin Harris & Disciples - How Deep Is Your Love_01.mp3"],
  "distractors": [
    "Lean On - Major Lazer & DJ Snake",
    "This Girl - Kungs vs Cookin’ on 3 Burners",
    "Prayer in C - Lilly Wood & The Prick and Robin Schulz",
    "Firestone - Kygo feat. Conrad Sewell",
    "Summer - Calvin Harris"
  ]
},
{
    id: 'song-216',
  "title": "Jimmy",
  "artist": "Cats on Trees, Calogero",
  "year": 2014,
  "tags": ["2010s", "Pop", "French", "Rock"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Cats on Trees, Calogero - Jimmy_01.mp3"],
  "distractors": [
    "La Fille du Coupeur de Joints - Cats on Trees",
    "Je Te Promets - Johnny Hallyday",
    "Les Mots Bleus - Christophe",
    "Si Seulement Je Pouvais Lui Manquer - Calogero",
    "Sous Le Vent - Garou & Céline Dion"
  ]
},
{
    id: 'song-217',
  "title": "Saint Claude",
  "artist": "Christine and the Queens",
  "year": 2014,
  "tags": ["2010s", "Pop", "French", "Electro", "Soul"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Christine and the Queens - Saint Claude_01.mp3",
    "/public/audio/001/Christine and the Queens - Saint Claude_02.mp3"
  ],
  "distractors": [
    "Christine - Christine and the Queens",
    "Tilted - Christine and the Queens",
    "Formidable - Stromae",
    "Christine - Jain",
    "Je Veux Te Voir - Yelle",
    "Dernière danse - Indila"
  ]
},
{
    id: 'song-218',
  "title": "Thinking Out Loud",
  "artist": "Ed Sheeran",
  "year": 2014,
  "tags": ["2010s", "Pop", "Soul", "R&B"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Ed Sheeran - Thinking Out Loud_01.mp3"],
  "distractors": [
    "Photograph - Ed Sheeran",
    "All of Me - John Legend",
    "Let Her Go - Passenger",
    "Say You Won't Let Go - James Arthur",
    "Stay With Me - Sam Smith",
    "Someone Like You - Adele"
  ]
},
{
    id: 'song-219',
  "title": "Le Chant Des Sirènes",
  "artist": "Fréro Delavega",
  "year": 2014,
  "tags": ["2010s", "Pop", "French", "Folk"],
  "difficulty": 1,
  "audioUrls": ["/public/audio/001/Fréro Delavega - Le Chant Des Sirènes_01.mp3"],
  "distractors": [
    "Vianney - Pas là",
    "Boulevard des Airs - Bruxelles",
    "Ben Mazué - La Même",
    "Tryo - L’hymne de nos campagnes",
    "Zaz - Je veux",
    "Matmatah - Lambé An Dro"
  ]
},
{
    id: 'song-220',
  "title": "Ton visage",
  "artist": "Fréro Delavega",
  "year": 2014,
  "tags": ["2010s", "Pop", "French", "Folk"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Fréro Delavega - Ton visage_01.mp3",
    "/public/audio/001/Fréro Delavega - Ton visage_02.mp3"
  ],
  "distractors": [
    "Vianney - Je te déteste",
    "Ben Mazué - 10 ans de nous",
    "Boulevard des Airs - Emmène-moi",
    "Zaz - Si jamais j'oublie",
    "Claudio Capéo - Un homme debout",
    "Les Frangines - Donnez-moi"
  ]
},
{
    id: 'song-221',
  "title": "Take Me To Church",
  "artist": "Hozier",
  "year": 2015,
  "tags": ["2010s", "Rock", "Soul", "Pop"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Hozier - Take Me To Church_01.mp3"],
  "distractors": [
    "George Ezra - Budapest",
    "Ben Howard - Keep Your Head Up",
    "James Bay - Let It Go",
    "Rag'n'Bone Man - Human",
    "Vance Joy - Riptide",
    "Kaleo - Way Down We Go"
  ]
},
{
    id: 'song-222',
  "title": "Avenir",
  "artist": "Louane",
  "year": 2015,
  "tags": ["2010s", "Pop", "French"],
  "difficulty": 1,
  "audioUrls": ["/public/audio/001/Louane - Avenir_01.mp3"],
  "distractors": [
    "Coeur de Pirate - Comme des enfants",
    "Vianney - Je m'en vais",
    "Clara Luciani - La grenade",
    "Christine and the Queens - Christine",
    "Camélia Jordana - Non non non",
    "Zazie - Speed"
  ]
},
{
    id: 'song-223',
  "title": "Lean On",
  "artist": "Major Lazer & DJ Snake",
  "year": 2015,
  "tags": ["2010s", "Electro", "Pop", "House"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Major Lazer & DJ Snake - Lean On_01.mp3"],
  "distractors": [
    "Justin Bieber - Where Are Ü Now",
    "Diplo - Revolution",
    "The Chainsmokers - Roses",
    "Zedd - Stay",
    "Martin Garrix - Animals",
    "Kygo - Firestone"
  ]
},
{
    id: 'song-224',
  "title": "Homeless",
  "artist": "Marina Kaye",
  "year": 2014,
  "tags": ["2010s", "Pop", "French"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Marina Kaye - Homeless_01.mp3",
    "/public/audio/001/Marina Kaye - Homeless_02.mp3"
  ],
  "distractors": [
    "Birdy - Skinny Love",
    "Lana Del Rey - Born to Die",
    "Aurora - Runaway",
    "Sia - Big Girls Cry",
    "London Grammar - Wasting My Young Years",
    "Adèle - All I Ask"
  ]
},
{
    id: 'song-225',
  "title": "Cheerleader",
  "artist": "OMI",
  "year": 2014,
  "tags": ["2010s", "Pop", "Electro", "Reggae"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/OMI - Cheerleader (Felix Jaehn Remix)_01.mp3"],
  "distractors": [
    "Magic! - Rude",
    "Felix Jaehn - Ain't Nobody (Loves Me Better)",
    "Shawn Mendes - Stitches",
    "Jason Derulo - Want to Want Me",
    "Nico & Vinz - Am I Wrong",
    "Kygo - Firestone"
  ]
},
{
    id: 'song-226',
  "title": "Clown",
  "artist": "Soprano",
  "year": 2014,
  "tags": ["2010s", "Pop", "Rap", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Soprano - Clown_01.mp3"],
  "distractors": [
    "Kendji Girac - Andalouse",
    "Maître Gims - Est-ce que tu m'aimes?",
    "Stromae - Papaoutai",
    "Black M - Sur ma route",
    "Amir - J'ai cherché",
    "Bigflo & Oli - Dommage"
  ]
},
{
  id: 'song-227',
  "title": "Uncover",
  "artist": "Zara Larsson",
  "year": 2013,
  "tags": ["2010s", "Pop", "Soul"],
  "difficulty": 5,
  "audioUrls": ["/public/audio/001/Zara Larsson - Uncover_01.mp3"],
  "distractors": [
    "Lorde - Royals",
    "Birdy - Wings",
    "Ellie Goulding - Love Me Like You Do",
    "Tove Lo - Habits (Stay High)",
    "Ariana Grande - Almost Is Never Enough",
    "Demi Lovato - Skyscraper"
  ]
},
{
    id: 'song-228',
  "title": "Respect",
  "artist": "Alliance Ethnik",
  "year": 1995,
  "tags": ["90s", "Hip-Hop", "Rap", "Funk", "French"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Alliance Ethnik - Respect_01.mp3"],
  "distractors": [
    "MC Solaar - Bouge de là",
    "IAM - Je danse le mia",
    "Saïan Supa Crew - Angela",
    "NTM - Ma Benz",
    "Menelik - Bye Bye",
    "Manau - La Tribu de Dana"
  ]
},
{
    id: 'song-229',
  "title": "Always",
  "artist": "Bon Jovi",
  "year": 1994,
  "tags": ["90s", "Rock"],
  "difficulty": 4,
  "audioUrls": ["/public/audio/001/Bon Jovi - Always_01.mp3"],
  "distractors": [
    "Aerosmith - I Don’t Want to Miss a Thing",
    "Bryan Adams - (Everything I Do) I Do It for You",
    "Guns N' Roses - November Rain",
    "Scorpions - Still Loving You",
    "Meat Loaf - I'd Do Anything for Love (But I Won't Do That)",
    "Extreme - More Than Words"
  ]
},
{
    id: 'song-230',
  "title": "Have You Ever Really Loved A Woman",
  "artist": "Bryan Adams",
  "year": 1995,
  "tags": ["90s", "Rock", "Pop"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Bryan Adams - Have You Ever Really Loved A Woman_01.mp3"],
  "distractors": [
    "Eric Clapton - Tears in Heaven",
    "Rod Stewart - Have I Told You Lately",
    "John Mellencamp - Cherry Bomb",
    "Phil Collins - Another Day in Paradise",
    "Bon Jovi - Always",
    "Sting - Fields of Gold"
  ]
},
{
    id: 'song-231',
  "title": "Pour que tu m'aimes encore",
  "artist": "Céline Dion",
  "year": 1995,
  "tags": ["90s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Céline Dion - Pour que tu m'aimes encore_01.mp3"],
  "distractors": [
    "Garou - Seul",
    "Isabelle Boulay - Parle-moi",
    "Lara Fabian - Je t'aime",
    "Patrick Bruel - Casser la voix",
    "Jean-Jacques Goldman - Là-bas",
    "Francis Cabrel - Je t'aimais, je t'aime, je t'aimerai"
  ]
},
{
    id: 'song-232',
  "title": "Gangsta's Paradise",
  "artist": "Coolio",
  "year": 1995,
  "tags": ["90s", "Hip-Hop", "Rap"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Coolio - Gangsta's Paradise_01.mp3"],
  "distractors": [
    "Dr. Dre - Nuthin' But a G Thang",
    "Warren G - Regulate",
    "Tupac - California Love",
    "Snoop Dogg - Gin and Juice",
    "Ice Cube - It Was a Good Day",
    "Bone Thugs-N-Harmony - Tha Crossroads"
  ]
},
{
    id: 'song-233',
  "title": "Shy Guy",
  "artist": "Diana King",
  "year": 1995,
  "tags": ["90s", "Reggae", "R&B", "Pop"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Diana King - Shy Guy_01.mp3"],
  "distractors": [
    "Shaggy - Boombastic",
    "Chaka Demus & Pliers - Murder She Wrote",
    "Inner Circle - Sweat (A La La La La Long)",
    "Ziggy Marley - Tomorrow People",
    "Des'ree - You Gotta Be",
    "Lisa Stansfield - All Around the World"
  ]
},
{
    id: 'song-234',
  "title": "Here Comes The Hotstepper",
  "artist": "Ini Kamoze",
  "year": 1994,
  "tags": ["90s", "Reggae", "Hip-Hop", "Pop"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Ini Kamoze - Here Comes The Hotstepper_01.mp3"],
  "distractors": [
    "Shaggy - Boombastic",
    "Chaka Demus & Pliers - Murder She Wrote",
    "Snow - Informer",
    "Inner Circle - Sweat (A La La La La Long)",
    "Buju Banton - Champion",
    "Mr. Vegas - Heads High"
  ]
},
{
    id: 'song-235',
  "title": "Whoops Now!",
  "artist": "Janet Jackson",
  "year": 1995,
  "tags": ["90s", "Pop", "R&B", "Soul"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Janet Jackson - Whoops Now!_01.mp3",
    "/public/audio/001/Janet Jackson - Whoops Now!_02.mp3"
  ],
  "distractors": [
    "TLC - Waterfalls",
    "Brandy - I Wanna Be Down",
    "Aaliyah - Are You That Somebody?",
    "Mary J. Blige - Real Love",
    "Destiny's Child - Say My Name",
    "Monica - Don't Take It Personal"
  ]
},
{
    id: 'song-236',
  "title": "Be My Lover",
  "artist": "La Bouche",
  "year": 1995,
  "tags": ["90s", "Pop", "Dance", "House", "Eurodance"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/La Bouche - Be My Lover_01.mp3"],
  "distractors": [
    "Snap! - Rhythm Is a Dancer",
    "2 Unlimited - No Limit",
    "Culture Beat - Mr. Vain",
    "Real McCoy - Another Night",
    "Ace of Base - All That She Wants",
    "Corona - The Rhythm of the Night"
  ]
},
{
    id: 'song-237',
  "title": "Fantasy",
  "artist": "Mariah Carey",
  "year": 1995,
  "tags": ["90s", "Pop", "R&B", "Soul"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Mariah Carey - Fantasy_01.mp3"],
  "distractors": [
    "Whitney Houston - I'm Every Woman",
    "TLC - Waterfalls",
    "Boyz II Men - I'll Make Love to You",
    "Janet Jackson - That's the Way Love Goes",
    "Brandy - I Wanna Be Down",
    "En Vogue - Don't Let Go (Love)"
  ]
},
{
    id: 'song-238',
  "title": "You Are Not Alone",
  "artist": "Michael Jackson",
  "year": 1995,
  "tags": ["90s", "Pop", "R&B", "Soul", "Classic"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Michael Jackson - You Are Not Alone_01.mp3"],
  "distractors": [
    "Whitney Houston - I Will Always Love You",
    "Boyz II Men - End of the Road",
    "Mariah Carey - One Sweet Day",
    "Toni Braxton - Un-Break My Heart",
    "Seal - Kiss from a Rose",
    "Janet Jackson - Again"
  ]
},
{
    id: 'song-239',
  "title": "Over my Shoulder",
  "artist": "Mike + The Mechanics",
  "year": 1995,
  "tags": ["90s", "Pop", "Rock"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Mike + The Mechanics - Over my Shoulder_01.mp3"],
  "distractors": [
    "Tears for Fears - Everybody Wants to Rule the World",
    "Phil Collins - Another Day in Paradise",
    "Genesis - In Too Deep",
    "Simple Minds - Don't You (Forget About Me)",
    "Mr. Mister - Broken Wings",
    "Foreigner - I Want to Know What Love Is"
  ]
},
{
    id: 'song-240',
  "title": "About A Girl",
  "artist": "Nirvana",
  "year": 1993,
  "tags": ["90s", "Rock", "Grunge"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Nirvana - About A Girl_01.mp3"],
  "distractors": [
    "Pearl Jam - Alive",
    "Soundgarden - Black Hole Sun",
    "Alice In Chains - Man in the Box",
    "Smashing Pumpkins - Today",
    "Stone Temple Pilots - Interstate Love Song",
    "Bush - Glycerine"
  ]
},
{
    id: 'song-241',
  "title": "Kiss From A Rose",
  "artist": "Seal",
  "year": 1994,
  "tags": ["90s", "Pop", "Soul", "Rock"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Seal - Kiss From A Rose_01.mp3"],
  "distractors": [
    "George Michael - Faith",
    "Sade - Smooth Operator",
    "Simply Red - Holding Back The Years",
    "Phil Collins - Another Day In Paradise",
    "Sting - Fields Of Gold",
    "Enigma - Return To Innocence"
  ]
},
{
    id: 'song-242',
  "title": "All I Wanna Do",
  "artist": "Sheryl Crow",
  "year": 1994,
  "tags": ["90s", "Pop", "Rock", "Soul"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Sheryl Crow - All I Wanna Do_01.mp3"],
  "distractors": [
    "Alanis Morissette - Ironic",
    "Melissa Etheridge - Come To My Window",
    "Paula Cole - Where Have All The Cowboys Gone?",
    "Natalie Imbruglia - Torn",
    "Suzanne Vega - Luka",
    "The Cranberries - Linger"
  ]
},
{
    id: 'song-243',
  "title": "Zombie",
  "artist": "The Cranberries",
  "year": 1994,
  "tags": ["90s", "Rock", "Grunge", "Alternative"],
  "difficulty": 1,
  "audioUrls": ["/public/audio/001/The Cranberries - Zombie_01.mp3"],
  "distractors": [
    "Alanis Morissette - You Oughta Know",
    "Garbage - Stupid Girl",
    "No Doubt - Just a Girl",
    "Hole - Celebrity Skin",
    "Pearl Jam - Alive",
    "Soundgarden - Black Hole Sun"
  ]
},
{
    id: 'song-244',
  "title": "Chacun Fait (C'Qui Lui Plait)",
  "artist": "Chagrin d'Amour",
  "year": 1981,
  "tags": ["80s", "French", "Pop", "Electro"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Chagrin d'Amour - Chacun Fait (C'Qui Lui Plait)_01.mp3"],
  "distractors": [
    "Marc Lavoine - Elle a les yeux revolver",
    "Étienne Daho - Week-end à Rome",
    "Taxi Girl - Cherchez le garçon",
    "Les Rita Mitsouko - Marcia Baïla",
    "Jean-Jacques Goldman - Je marche seul",
    "Indochine - L'Aventurier"
  ]
},
{
    id: 'song-245',
  "title": "Let's Groove",
  "artist": "Earth, Wind & Fire",
  "year": 1981,
  "tags": ["80s", "Funk", "Disco", "Soul"],
  "difficulty": 2,
  "audioUrls": ["/public/audio/001/Earth, Wind & Fire - Let's Groove_01.mp3"],
  "distractors": [
    "Kool & The Gang - Celebration",
    "Chic - Le Freak",
    "Rick James - Super Freak",
    "Prince - 1999",
    "The Gap Band - Outstanding",
    "Michael Jackson - Rock With You"
  ]
},
{
    id: 'song-246',
  "title": "Just An Illusion",
  "artist": "Imagination",
  "year": 1982,
  "tags": ["80s", "Funk", "Soul", "Disco"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Imagination - Just An Illusion_01.mp3"],
  "distractors": [
    "Shalamar - A Night to Remember",
    "Kool & The Gang - Get Down On It",
    "Dazz Band - Let It Whip",
    "Midnight Star - Midas Touch",
    "The System - Don't Disturb This Groove",
    "Change - A Lover's Holiday"
  ]
},
{
    id: 'song-247',
  "title": "Music and Lights",
  "artist": "Imagination",
  "year": 1982,
  "tags": ["80s", "Funk", "Soul", "Disco"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Imagination - Music and Lights_01.mp3"],
  "distractors": [
    "Shalamar - A Night to Remember",
    "Kool & The Gang - Get Down On It",
    "Dazz Band - Let It Whip",
    "Midnight Star - Midas Touch",
    "The System - Don't Disturb This Groove",
    "Change - A Lover's Holiday"
  ]
},
{
    id: 'song-248',
  "title": "Femme Que J'aime",
  "artist": "Jean Luc Lahaye",
  "year": 1985,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Jean Luc Lahaye - Femme Que J'aime_01.mp3",
    "/public/audio/001/Jean Luc Lahaye - Femme Que J'aime_02.mp3"
  ],
  "distractors": [
    "Herbert Léonard - Pour le plaisir",
    "François Feldman - Les Valses de Vienne",
    "Patrick Juvet - Où sont les femmes ?",
    "Michel Sardou - Les Lacs du Connemara",
    "Véronique Sanson - Chanson sur ma drôle de vie",
    "Daniel Balavoine - L'Aziza"
  ]
},
{
    id: 'song-249',
  "title": "Coup de Folie",
  "artist": "Thierry Pastor",
  "year": 1985,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 4,
  "audioUrls": [
    "/public/audio/001/Thierry Pastor - Coup de Folie_01.mp3",
    "/public/audio/001/Thierry Pastor - Coup de Folie_02.mp3"
  ],
  "distractors": [
    "Jean-Pierre Mader - Macumba",
    "Francis Cabrel - Je t'aimais, je t'aime, je t'aimerai",
    "Gold - Capitaine abandonné",
    "Téléphone - Un autre monde",
    "Michel Sardou - Musulmanes",
    "Daho - Tombé pour la France"
  ]
},
{
    id: 'song-250',
  "title": "Don't Go",
  "artist": "Yazoo",
  "year": 1982,
  "tags": ["80s", "Pop", "Electro", "Classic"],
  "difficulty": 3,
  "audioUrls": ["/public/audio/001/Yazoo - Don't Go_01.mp3"],
  "distractors": [
    "Erasure - Oh L'amour",
    "Depeche Mode - Just Can't Get Enough",
    "Eurythmics - Sweet Dreams",
    "New Order - Blue Monday",
    "Soft Cell - Tainted Love",
    "Pet Shop Boys - West End Girls"
  ]
},
{
    id: 'song-251',
  "title": "Etre yelle",
  "artist": "Michel Sardouille",
  "year": 2023,
  "tags": ["2020s", "French", "Parody"],
  "difficulty": 5,
  "audioUrls": ["/public/audio/001/Michel Sardouille - Etre Yelle_01.mp3"],
  "distractors": [
    "Les Lacs du Connemara - Michel Sardou",
    "Je vais t’aimer - Michel Sardou",
    "Être une femme - Michel Sardou",
    "Pour le plaisir - Herbert Léonard",
    "Vanina - Dave"
  ]
},
{
    id: 'song-252',
  "title": "Un homme",
  "artist": "Jérémy Frerot",
  "year": 2021,
  "tags": ["2020s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Jérémy Frerot - Un homme (clip officiel) (128kbit_AAC)_01.mp3",
    "/public/audio/001/Jérémy Frerot - Un homme (clip officiel) (128kbit_AAC)_02.mp3"
  ],
  "distractors": [
    "On verra - Nekfeu",
    "Les choses simples - Jenifer & Slimane",
    "Avant toi - Vitaa & Slimane",
    "Les yeux de la mama - Kendji Girac",
    "Le cœur éléphant - Fréro Delavega"
  ]
},
{
    id: 'song-253',
  "title": "Ève lève-toi",
  "artist": "Julie Pietri",
  "year": 1986,
  "tags": ["80s", "Pop", "French"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Julie Pietri - Eve lève toi (Clip Officiel - avec paroles) (128kbit_AAC)_01.mp3",
    "/public/audio/001/Julie Pietri - Eve lève toi (Clip Officiel - avec paroles) (128kbit_AAC)_02.mp3"
  ],
  "distractors": [
    "Toute première fois - Jeanne Mas",
    "Poupée psychédélique - Thierry Hazard",
    "Ouragan - Stéphanie de Monaco",
    "Ella, elle l’a - France Gall",
    "Joe le taxi - Vanessa Paradis"
  ]
},
{
    id: 'song-254',
  "title": "La Zoubida",
  "artist": "Vincent Lagaf'",
  "year": 1991,
  "tags": ["90s", "Pop", "French"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/Vincent Lagaf' - La zoubida (128kbit_AAC)_01.mp3",
    "/public/audio/001/Vincent Lagaf' - La zoubida (128kbit_AAC)_02.mp3"
  ],
  "distractors": [
    "Annie Cordy - Tata Yoyo",
    "Patrick Sébastien - Le petit bonhomme en mousse",
    "Richard Gotainer - Le mambo du décalco",
    "Chantal Goya - Pandi Panda",
    "Les Inconnus - Isabelle a les yeux bleus"
  ]
},
{
    id: 'song-255',
  "title": "Emmenez-moi",
  "artist": "Charles Aznavour",
  "year": 1967,
  "tags": ["60s", "French", "Pop"],
  "difficulty": 2,
  "audioUrls": [
    "/public/audio/001/Charles Aznavour - Emmenez-moi_01.mp3"
  ],
  "distractors": [
    "Jacques Brel - Ne me quitte pas",
    "Gilbert Bécaud - Et maintenant",
    "Serge Lama - Je suis malade",
    "Joe Dassin - L’été indien",
    "Georges Brassens - Les copains d’abord"
  ]
},
{
    id: 'song-256',
  "title": "Mafiosa",
  "artist": "JuL",
  "year": 2024,
  "tags": ["2020s", "Rap", "French"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/JuL  - Mafiosa Clip Officiel 2024 (128kbit_AAC)_01.mp3",
    "/public/audio/001/JuL  - Mafiosa Clip Officiel 2024 (128kbit_AAC)_02.mp3"
  ],
  "distractors": [
    "Bande organisée - 13'Organisé",
    "La kiffance - Naps",
    "Petrouchka - Soso Maness ft. PLK",
    "Tchikita - Jul",
    "Copines - Aya Nakamura"
  ]
},
{
    id: 'song-257',
  "title": "Coeur Blanc",
  "artist": "JuL",
  "year": 2022,
  "tags": ["2020s", "Rap", "French", "Electro"],
  "difficulty": 3,
  "audioUrls": [
    "/public/audio/001/JuL - Cœur Blanc_01.mp3",
    "/public/audio/001/JuL - Cœur Blanc_02.mp3"
  ],
  "distractors": [
    "Naps - La kiffance",
    "SCH - Autobahn",
    "Soso Maness - Petrouchka",
    "PLK - Problèmes",
    "Kaaris - Tchoin"
  ]
}

]