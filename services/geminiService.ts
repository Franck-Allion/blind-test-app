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