import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { Song } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface AnswerEvaluation {
  titleMatch: boolean;
  artistMatch: boolean;
}

/**
 * Evaluates a player's free-text answer against the correct song title and artist.
 * It asks Gemini to check for close matches, allowing for misspellings.
 * @param playerAnswer - The title and artist provided by the player.
 * @param correctSong - The correct song object.
 * @returns A promise that resolves to an object indicating if the title and/or artist match.
 */
export const evaluateAnswer = async (playerAnswer: { title: string; artist: string }, correctSong: Song): Promise<AnswerEvaluation> => {
  const isMovieSong = correctSong.tags.includes('Movie') && correctSong.movieTitle;

  const prompt = isMovieSong ?
  `
    You are a lenient judge in a music quiz game. The player needs to guess the movie title from a song.
    Correct Answer:
    - Movie Name: "${correctSong.movieTitle}"

    Player's Answer:
    - Movie Name: "${playerAnswer.title}"
    
    Analyze the player's answer. The movie name is a match if it's very close to the correct movie name (e.g., "Lion King" for "The Lion King").
    The 'artistMatch' is not applicable for this question.

    Return your evaluation in the specified JSON format. The 'titleMatch' should be your evaluation of the movie name. The 'artistMatch' should always be false.
  `
  :
  `
    You are a lenient judge in a music quiz game. A player submitted an answer. I need you to check if their answer is a reasonable match for the correct song, even with typos or minor errors.

    Correct Answer:
    - Title: "${correctSong.title}"
    - Artist: "${correctSong.artist}"

    Player's Answer:
    - Title: "${playerAnswer.title}"
    - Artist: "${playerAnswer.artist}"

    Analyze the player's answer. The title is a match if it's very close to the correct title (e.g., "Bohemian Rapsody" for "Bohemian Rhapsody"). The artist is a match if it's very close to the correct artist (e.g., "Michael Jakson" for "Michael Jackson").

    Return your evaluation in the specified JSON format.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              titleMatch: { type: Type.BOOLEAN },
              artistMatch: { type: Type.BOOLEAN },
            },
            required: ["titleMatch", "artistMatch"],
          },
        }
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as AnswerEvaluation;
  } catch (error) {
    console.error("Gemini API Error (evaluateAnswer):", error);
    // Fallback to strict equality if API fails
    const fallbackTitle = isMovieSong ? correctSong.movieTitle! : correctSong.title;
    return {
      titleMatch: playerAnswer.title.toLowerCase() === fallbackTitle.toLowerCase(),
      artistMatch: isMovieSong ? false : playerAnswer.artist.toLowerCase() === correctSong.artist.toLowerCase(),
    };
  }
};

/**
 * Generates a playlist of song IDs based on a user prompt.
 * @param userPrompt - The user's description of the desired playlist.
 * @param numberOfSongs - The number of songs to select.
 * @param catalog - The full catalog of available songs.
 * @returns A promise that resolves to an array of song IDs.
 */
export const generatePlaylistFromPrompt = async (userPrompt: string, numberOfSongs: number, catalog: Song[]): Promise<string[]> => {
    // Simplify the catalog to send only relevant data to the API, saving tokens.
    const simplifiedCatalog = catalog.map(song => ({
        id: song.id,
        title: song.title,
        artist: song.artist,
        year: song.year,
        tags: song.tags,
        movieTitle: song.movieTitle,
        difficulty: song.difficulty
    }));

    const prompt = `
        You are an expert music quiz playlist creator. Your task is to select songs from a given catalog to create a themed quiz based on a user's request.

        Here is the catalog of available songs in JSON format:
        ${JSON.stringify(simplifiedCatalog)}

        Here is the user's request:
        - Theme/Description: "${userPrompt}"
        - Number of songs to select: ${numberOfSongs}

        Based on the user's request, please select exactly ${numberOfSongs} songs from the catalog that best fit the theme. Consider all song properties like title, artist, year, tags, and difficulty to make your selection.

        Return your response as a JSON object containing a single key "song_ids", which is an array of the selected song ID strings. Do not include any other text or explanation.
    `;

    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        song_ids: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                            description: `An array of exactly ${numberOfSongs} song ID strings that match the user's request.`
                        }
                    },
                    required: ["song_ids"]
                },
            }
        });

        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText) as { song_ids: string[] };
        
        // Ensure the correct number of songs is returned
        if (result.song_ids && result.song_ids.length > 0) {
            return result.song_ids.slice(0, numberOfSongs);
        }
        return [];

    } catch (error) {
        console.error("Gemini API Error (generatePlaylistFromPrompt):", error);
        throw new Error("The AI failed to generate a playlist. Please try a different prompt.");
    }
};
