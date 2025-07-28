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
}

]