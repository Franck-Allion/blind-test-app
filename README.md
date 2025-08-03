
# BlindTest Pro

BlindTest Pro is an ultimate music quiz game where you can create a game, invite friends, and test your musical knowledge. It features AI-powered playlist generation and answer evaluation using the Gemini API.

![BlindTest Pro Gameplay](https://storage.googleapis.com/maker-suite-media/mol-web-gallery/gallery-Makin-it-so-img-1.gif)

## Features

- **Game Setup**: Configure game rules like time to answer, plays per song, etc.
- **Dynamic Playlist Creation**:
    - **Manual Selection**: Choose songs from a filterable catalog.
    - **AI-Powered**: Describe the quiz you want (e.g., "upbeat 80s rock"), and Gemini will generate a playlist for you.
    - **Random Selection**: Let the game pick a random set of songs.
- **Real-time Multiplayer**: Share a link or QR code to have friends join your lobby.
- **Flexible Answering**:
    - Submit free-text answers for a higher score (up to 5 points).
    - Request multiple-choice options for an easier guess (1 point).
- **AI-Powered Answer Evaluation**: Gemini leniently checks free-text answers for misspellings and close matches.
- **Live Scoreboard**: The organizer can see player scores and who has answered in real-time.

## How to Install the App

To run BlindTest Pro locally, you will need Node.js and npm installed.

**1. Clone the repository:**
```bash
git clone <your-repository-url>
cd blindtest-pro-app
```

**2. Create an Environment File:**
The application uses the Gemini API, which requires an API key.
Create a `.env` file in the root of the project by copying the example:
```bash
cp .env.example .env
```
Now, open the `.env` file and add your Gemini API key:
```
GEMINI_API_KEY="YOUR_API_KEY_HERE"
```

**3. Install Dependencies:**
The project is a monorepo with a `server` and a client application. The root `package.json` includes a script to install all dependencies for both.

From the root directory, run:
```bash
npm run install-all
```
This command will run `npm install` in the root directory and also in the `server/` directory.

**4. Start the Application:**
To start both the backend server and the frontend Vite development server concurrently, run the following command from the root directory:
```bash
npm start
```
This will:
- Start the Node.js server on `http://localhost:8080`.
- Start the Vite client application on `http://localhost:5173`.

You can now open **`http://localhost:5173`** in your browser to use the app.

---

## How to Use It

### 1. Create a Game
- Navigate to the app's homepage and click **"Create a New Game"**.
- This takes you to the **Setup Page**.

### 2. Configure the Game
On the Setup Page, you can:
- **Set the Rules**: Adjust settings like time to answer, the number of times a song clip plays, and whether to show scores to all players after each round.
- **Choose a Playlist**:
    - **Manual Selection**: Use tags and the search bar to filter the catalog and hand-pick the songs for your quiz.
    - **AI Powered**: Select this mode, describe the type of music you want (e.g., "songs from famous animated movies"), choose the number of songs, and click **"Generate Playlist"**.
    - **Random Selection**: Choose the number of songs you want, and the game will pick them randomly from the entire catalog.

- Once you're ready, click **"Start Lobby & Get Link"**.

### 3. The Lobby
- As the **Organizer**, you will see the lobby screen with an invite link and a QR code.
- Share this link with your friends.
- Other players opening the link will be prompted to enter their name to join the game.
- Once all players are in, the organizer can click **"Start Game For Everyone"**.

### 4. Gameplay
- Each round, a short audio clip will play.
- Players have two options:
    1.  **Free-text answer**: Type the song title and artist (or movie title) for a maximum of 5 points. This is the default view.
    2.  **Multiple Choice**: Click the "Show Multiple Choice" button. This will permanently switch the view for that round to 4 options. A correct answer here is worth 1 point.
- The organizer sees a live scoreboard on their screen.

### 5. Round Over & Game Over
- After each round, the correct answer is revealed, and scores are shown. The organizer then starts the next round.
- After the final song, the game ends, and a final leaderboard is displayed, crowning the winner.
- You can then choose to "Play Again", which takes you back to the setup page.

---

## How to Add a Song to the Catalog

Adding a new song involves two main steps: preparing the audio files and updating the data file.

### Step 1: Prepare Audio Files
1.  **Create Short Clips**: For each song, create one or more short (10-20 seconds) audio clips. Using multiple clips from different parts of the song makes the game more interesting.
2.  **Answer**: Create a longer audio file with the refrain of the song.
3.  **File Format**: MP3 is a safe and widely supported format.
4.  **Place Files**: Add your audio files to the `public/audio/` directory or a subfolder (e.g., `public/audio/001/`).


### Step 2: Update the Catalog File
1.  Open the `services/mockData.ts` file.
2.  Find the `SONG_CATALOG` array.
3.  Add a new song object to the array. Use the following structure as a template:

```typescript
{
  id: 'song-258', // A unique ID for the song
  title: 'Your Song Title',
  artist: 'The Artist',
  year: 2024,
  difficulty: 3, // A number from 1 (easy) to 5 (very hard)
  tags: ['2020s', 'Rock', 'Indie'], // Tags for filtering. Try to use existing ones.
  audioUrls: [
      '/audio/001/clip1.mp3', // Path relative to the /public directory
      '/audio/001/clip2.mp3'
  ],
  distractors: [
    'Wrong Song 1 - Wrong Artist 1',
    'Wrong Song 2 - Wrong Artist 2',
    'Wrong Song 3 - Wrong Artist 3'
    // For movie songs, just the wrong movie titles: 'Wrong Movie 1'
  ],
  movieTitle: 'The Movie Name', // Optional: if it's a movie song
  proofAudioUrl: '/audio/001/full_proof_clip.mp3' // Optional: a longer clip for the organizer to play
},
```

4.  **Save the file**. The Vite development server will automatically hot-reload, and your new song will be available on the setup page.