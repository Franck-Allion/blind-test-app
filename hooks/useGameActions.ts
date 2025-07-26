

import { useCallback, useRef, useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import { evaluateAnswer } from '../services/geminiService';
import { PlayerAnswer, Game } from '../types';
import { socketService } from '../services/socketService';

export const useGameActions = () => {
    const { state } = useGame();
    const { playerId } = state;
    
    // By storing the game state in a ref, we ensure that the action functions
    // themselves are stable (i.e., they don't get recreated on every state change),
    // which prevents unnecessary re-renders and effect re-runs in consuming components.
    const gameRef = useRef<Game | null>(state.game);
    useEffect(() => {
        gameRef.current = state.game;
    }, [state.game]);

    const handlePlayerAnswer = useCallback(async (
        answer: { title: string; artist: string },
        timeTaken: number
    ) => {
        const game = gameRef.current;
        if (!game || !playerId || game.status !== 'IN_PROGRESS') return;

        const currentSong = game.playlist[game.currentSongIndex];
        if (!currentSong) return;

        socketService.send({type: 'SET_LOADING', payload: true});
        const evaluation = await evaluateAnswer(answer, currentSong);
        
        const isMovieSong = currentSong.tags.includes('Movie') && currentSong.movieTitle;
        let score = 0;
        if (isMovieSong) {
            if (evaluation.titleMatch) {
                score = 3; // 3 points for correct movie title
            }
        } else {
            if (evaluation.titleMatch && evaluation.artistMatch) {
                score = 5;
            } else if (evaluation.titleMatch || evaluation.artistMatch) {
                score = 2;
            }
        }

        const playerAnswer: PlayerAnswer = {
            playerId,
            songTitle: answer.title,
            artist: answer.artist,
            isMultipleChoice: false,
            timeTaken,
            score,
        };
        socketService.send({ type: 'SUBMIT_ANSWER', payload: { gameId: game.id, answer: playerAnswer } });
        socketService.send({type: 'SET_LOADING', payload: false});

    }, [playerId]);
    
    const handleMultipleChoiceAnswer = useCallback((choice: string, timeTaken: number) => {
        const game = gameRef.current;
        if (!game || !playerId || game.status !== 'IN_PROGRESS') return;

        const currentSong = game.playlist[game.currentSongIndex];
        if (!currentSong) return;
        
        const isMovieSong = currentSong.tags.includes('Movie') && currentSong.movieTitle;

        let correctAnswerText: string;
        let submittedTitle: string = choice;
        let submittedArtist: string | undefined = undefined;

        if (isMovieSong) {
            correctAnswerText = currentSong.movieTitle!;
        } else {
            correctAnswerText = `${currentSong.title} - ${currentSong.artist}`;
            const parts = choice.split(' - ');
            submittedTitle = parts[0];
            submittedArtist = parts[1];
        }
    
        const score = choice === correctAnswerText ? 1 : 0;

        const playerAnswer: PlayerAnswer = {
            playerId,
            isMultipleChoice: true,
            timeTaken,
            score,
            songTitle: submittedTitle,
            artist: submittedArtist,
        };
        socketService.send({ type: 'SUBMIT_ANSWER', payload: { gameId: game.id, answer: playerAnswer } });
    }, [playerId]);

    const runBotActions = useCallback(() => {
        const game = gameRef.current;
        if (!game) return;

        const bots = game.players.filter(p => p.isBot);
        const currentSong = game.playlist[game.currentSongIndex];
        if (!currentSong) return;

        bots.forEach(bot => {
            // Prevent bot from answering twice in the same round
            if (game.currentRoundAnswers.some(a => a.playerId === bot.id)) {
                return;
            }

            const delay = Math.random() * (game.settings.timeToAnswer / 2 * 1000) + 3000;
            setTimeout(() => {
                const doesBotKnow = Math.random() > 0.4;
                if (!doesBotKnow) return;

                const timeTaken = delay / 1000;
                
                const titleCorrect = Math.random() > 0.2;
                const artistCorrect = Math.random() > 0.4;
                let score = 0;
                if (titleCorrect && artistCorrect) score = 5;
                else if (titleCorrect || artistCorrect) score = 2;

                const botAnswer: PlayerAnswer = {
                    playerId: bot.id,
                    isMultipleChoice: false,
                    timeTaken,
                    score,
                    songTitle: titleCorrect ? currentSong.title : "Some other song",
                    artist: artistCorrect ? currentSong.artist : "Some other artist"
                };

                // Re-check the game state inside the timeout to ensure the round is still active
                const currentGame = gameRef.current;
                 if (currentGame && currentGame.id === game.id && currentGame.status === 'IN_PROGRESS' && currentGame.currentSongIndex === game.currentSongIndex) {
                    socketService.send({ type: 'SUBMIT_ANSWER', payload: { gameId: game.id, answer: botAnswer } });
                 }
            }, delay);
        });
    }, []);
    
    const startGame = useCallback(() => {
        const game = gameRef.current;
        if(game) socketService.send({ type: 'START_GAME', payload: { gameId: game.id } });
    }, []);

    const nextRound = useCallback(() => {
        const game = gameRef.current;
        if(game) socketService.send({ type: 'START_NEXT_ROUND', payload: { gameId: game.id } });
    }, []);

    const finishGame = useCallback(() => {
        const game = gameRef.current;
        if(game) socketService.send({ type: 'FINISH_GAME', payload: { gameId: game.id } });
    }, []);

    const resetGame = useCallback(() => {
        const game = gameRef.current;
        if(game) socketService.send({ type: 'RESET_GAME', payload: { gameId: game.id } });
    }, []);

    return { handlePlayerAnswer, handleMultipleChoiceAnswer, runBotActions, startGame, nextRound, finishGame, resetGame };
};
