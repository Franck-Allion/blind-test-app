
import { useCallback } from 'react';
import { useGame } from '../contexts/GameContext';
import { evaluateAnswer } from '../services/geminiService';
import { PlayerAnswer, Song } from '../types';
import { socketService } from '../services/socketService';

export const useGameActions = () => {
    const { state } = useGame();
    const { game, playerId } = state;

    const handlePlayerAnswer = useCallback(async (
        answer: { title: string; artist: string },
        timeTaken: number
    ) => {
        if (!game || !playerId) return;

        const currentSong = game.playlist[game.currentSongIndex];
        if (!currentSong) return;

        socketService.send({type: 'SET_LOADING', payload: true});
        const evaluation = await evaluateAnswer(answer, currentSong);
        
        let score = 0;
        if (evaluation.titleMatch && evaluation.artistMatch) {
            score = 5;
        } else if (evaluation.titleMatch || evaluation.artistMatch) {
            score = 2;
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

    }, [game, playerId]);
    
    const handleMultipleChoiceAnswer = useCallback((choice: string, timeTaken: number) => {
        if (!game || !playerId) return;
        const currentSong = game.playlist[game.currentSongIndex];
        if (!currentSong) return;

        const correctAnswer = `${currentSong.title} - ${currentSong.artist}`;
        const score = choice === correctAnswer ? 1 : 0;
        
        const playerAnswer: PlayerAnswer = {
            playerId,
            isMultipleChoice: true,
            timeTaken,
            score,
            songTitle: choice.split(' - ')[0],
            artist: choice.split(' - ')[1],
        };
        socketService.send({ type: 'SUBMIT_ANSWER', payload: { gameId: game.id, answer: playerAnswer } });
    }, [game, playerId]);

    const runBotActions = useCallback(() => {
        if (!game) return;
        const bots = game.players.filter(p => p.isBot);
        const currentSong = game.playlist[game.currentSongIndex];
        if (!currentSong) return;

        bots.forEach(bot => {
            const delay = Math.random() * (game.settings.timeToAnswer / 2 * 1000) + 3000;
            setTimeout(() => {
                const doesBotKnow = Math.random() > 0.4;
                if (!doesBotKnow) return;

                const timeTaken = delay / 1000;
                
                // Bots now only do free text for simplicity
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
                socketService.send({ type: 'SUBMIT_ANSWER', payload: { gameId: game.id, answer: botAnswer } });

            }, delay);
        });

    }, [game]);
    
    const startGame = () => {
        if(game) socketService.send({ type: 'START_GAME', payload: { gameId: game.id } });
    };

    const nextRound = () => {
        if(game) socketService.send({ type: 'START_NEXT_ROUND', payload: { gameId: game.id } });
    };

    const finishGame = () => {
        if(game) socketService.send({ type: 'FINISH_GAME', payload: { gameId: game.id } });
    };

    const resetGame = () => {
        if(game) socketService.send({ type: 'RESET_GAME', payload: { gameId: game.id } });
    };

    return { handlePlayerAnswer, handleMultipleChoiceAnswer, runBotActions, startGame, nextRound, finishGame, resetGame };
};
