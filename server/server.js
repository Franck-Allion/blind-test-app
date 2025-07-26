
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

// Serve static audio files from the 'public/audio' directory at the root of the project.
// Any request to /audio/filename.mp3 will be served from there.
app.use('/audio', express.static(path.join(__dirname, '..', 'public', 'audio')));


const server = http.createServer(app);
// Initialize the WebSocket server without attaching it to the HTTP server directly.
// We will handle the upgrade manually.
const wss = new WebSocket.Server({ noServer: true });

// --- In-memory store for games and clients. ---
const games = {};
const wsToPlayerMap = new Map();
const gameTimers = {}; // Store for server-side round timers
const CLIENT_PREPARATION_TIME_MS = 2000; // Corresponds to the client's "Get Ready" delay

// --- HTTP Endpoints ---
app.get('/', (req, res) => {
    console.log(`[${new Date().toISOString()}] Health check request received from ${req.ip}`);
    res.send('BlindTest Pro Server is running!');
});

app.post('/api/create-game', (req, res) => {
    const { settings, songIds } = req.body;
    const gameId = uuidv4().substring(0, 6).toUpperCase();
    const organizerPlayerId = uuidv4();

    const organizer = {
        id: organizerPlayerId,
        name: 'Organizer',
        isBot: false,
        score: 0,
        totalTime: 0,
        answerCount: 0,
        isOrganizer: true,
    };

    games[gameId] = {
        id: gameId,
        status: 'LOBBY',
        settings,
        playlist: songIds,
        players: [organizer],
        currentSongIndex: -1,
        currentRoundAnswers: [],
    };

    console.log(`Game created: ${gameId} by organizer ${organizerPlayerId}`);
    res.status(201).json({ gameId, organizerPlayerId });
});


// --- WebSocket Logic ---

const broadcast = (gameId, message) => {
    const game = games[gameId];
    if (!game) return;
    
    console.log(`[${gameId}] Broadcasting ${message.type} to ${game.players.length} players.`);

    // Broadcast to all players in the game
    game.players.forEach(player => {
        for (const [ws, { playerId: pId }] of wsToPlayerMap.entries()) {
            if (pId === player.id && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify(message));
            }
        }
    });
    
    // Also send to clients who are connected but haven't chosen a name yet
    for (const [ws, { gameId: gId, playerId }] of wsToPlayerMap.entries()) {
        if(gId === gameId && !playerId && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(message));
        }
    }
};

const endRoundForGame = (gameId) => {
    const game = games[gameId];
    if (game && game.status === 'IN_PROGRESS') {
        console.log(`[${gameId}] Round ended. Either by time or all players answered.`);
        // Clear any running timer
        if (gameTimers[gameId]) {
            clearTimeout(gameTimers[gameId]);
            delete gameTimers[gameId];
        }
        game.status = 'ROUND_OVER';
        broadcast(gameId, { type: 'GAME_STATE_UPDATE', payload: game });
    }
};

server.on('upgrade', (request, socket, head) => {
  // Manually handle the WebSocket upgrade.
  // This bypasses any Express middleware that might be interfering with the handshake.
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    console.log(`Client connected from IP: ${ip}`);

    ws.on('message', (rawMessage) => {
        try {
            const message = JSON.parse(rawMessage);
            const { type, payload } = message;
            
            console.log(`[MSG IN] type: ${type}, payload:`, payload);

            const { gameId, playerId, playerName, answer } = payload;
            
            if (!gameId) {
                console.log(`[ERROR] Message received without gameId`);
                return;
            }

            const game = games[gameId];

            if (!game && type !== 'JOIN_GAME') {
                console.log(`[ERROR] Game not found: ${gameId}`);
                ws.send(JSON.stringify({ type: 'ERROR', payload: 'Game not found' }));
                return;
            }

            switch (type) {
                case 'JOIN_GAME': {
                    if (!game) {
                         console.log(`[ERROR] Join attempt failed for non-existent game: ${gameId}`);
                         ws.send(JSON.stringify({ type: 'ERROR', payload: `Game with ID ${gameId} does not exist.` }));
                         return;
                    }

                    let player;
                    // Case 1: A returning player with a known ID (organizer or re-joining player)
                    if (playerId) {
                        player = game.players.find(p => p.id === playerId);
                        if(player) console.log(`[${gameId}] Player ${player.name} (${playerId}) is rejoining.`);
                    }

                    // Case 2: A new player joining with a name
                    if (!player && playerName) {
                        if (game.players.some(p => p.name.toLowerCase() === playerName.toLowerCase())) {
                            console.log(`[${gameId}] Denied join for duplicate name: ${playerName}`);
                            ws.send(JSON.stringify({ type: 'ERROR', payload: 'Name is already taken.' }));
                            return;
                        }
                        player = {
                            id: uuidv4(),
                            name: playerName,
                            isBot: false,
                            score: 0,
                            totalTime: 0,
                            answerCount: 0,
                            isOrganizer: false,
                        };
                        game.players.push(player);
                        console.log(`[${gameId}] New player ${player.name} (${player.id}) joined.`);
                    }
                    
                    if (player) {
                        // Associate this websocket with the successfully identified/created player
                        wsToPlayerMap.set(ws, { gameId, playerId: player.id });
                        // Tell the specific client who they are
                        ws.send(JSON.stringify({ type: 'PLAYER_ID_SET', payload: { gameId, playerId: player.id, isOrganizer: player.isOrganizer } }));
                    } else if (gameId) {
                         // A new client is connecting but hasn't picked a name yet.
                         // Just associate them with the game so they receive updates.
                         wsToPlayerMap.set(ws, { gameId, playerId: null });
                         console.log(`[${gameId}] New connection established, waiting for player to join.`);
                    }
                    
                    // Always broadcast the latest state to everyone in the game
                    broadcast(gameId, { type: 'GAME_STATE_UPDATE', payload: game });
                    break;
                }

                case 'START_GAME': {
                    game.status = 'IN_PROGRESS';
                    game.currentSongIndex = 0;
                    broadcast(gameId, { type: 'GAME_STATE_UPDATE', payload: game });
                    
                    // Account for client-side "Get Ready..." delay
                    const roundDuration = (game.settings.timeToAnswer * 1000) + CLIENT_PREPARATION_TIME_MS;

                    if (gameTimers[gameId]) clearTimeout(gameTimers[gameId]);
                    gameTimers[gameId] = setTimeout(() => {
                        console.log(`[${gameId}] Timer expired.`);
                        endRoundForGame(gameId);
                    }, roundDuration);
    
                    console.log(`[${gameId}] Starting game. Server timer set for ${game.settings.timeToAnswer}s + ${CLIENT_PREPARATION_TIME_MS / 1000}s preparation.`);
                    break;
                }
                
                case 'SUBMIT_ANSWER':
                    const playerIndex = game.players.findIndex(p => p.id === answer.playerId);
                    if (playerIndex !== -1 && game.status === 'IN_PROGRESS') {
                        // Prevent duplicate answers
                        if (game.currentRoundAnswers.some(a => a.playerId === answer.playerId)) {
                            console.log(`[${gameId}] Player ${answer.playerId} tried to answer twice. Ignoring.`);
                            return; 
                        }
                        
                        game.players[playerIndex].score += answer.score;
                        // Accumulate time and count for every answer, regardless of correctness
                        game.players[playerIndex].totalTime += answer.timeTaken;
                        game.players[playerIndex].answerCount++;
                        
                        game.currentRoundAnswers.push(answer);
                        
                        // Check if all players have answered
                        const allAnswered = game.players.length === game.currentRoundAnswers.length;

                        if (allAnswered) {
                            console.log(`[${gameId}] All players have answered.`);
                            endRoundForGame(gameId);
                        } else {
                            // If not all answered, just broadcast the current state so players see who has answered
                            broadcast(gameId, { type: 'GAME_STATE_UPDATE', payload: game });
                        }
                    }
                    break;

                case 'START_NEXT_ROUND':
                    if (game.currentSongIndex < game.playlist.length - 1) {
                        game.status = 'IN_PROGRESS';
                        game.currentSongIndex++;
                        game.currentRoundAnswers = [];
                        broadcast(gameId, { type: 'GAME_STATE_UPDATE', payload: game });
                        
                        // Account for client-side "Get Ready..." delay
                        const roundDuration = (game.settings.timeToAnswer * 1000) + CLIENT_PREPARATION_TIME_MS;

                        if (gameTimers[gameId]) clearTimeout(gameTimers[gameId]);
                        gameTimers[gameId] = setTimeout(() => {
                            console.log(`[${gameId}] Timer expired for next round.`);
                            endRoundForGame(gameId);
                        }, roundDuration);
                         console.log(`[${gameId}] Starting next round. Server timer set for ${game.settings.timeToAnswer}s + ${CLIENT_PREPARATION_TIME_MS / 1000}s preparation.`);
                    }
                    break;

                case 'FINISH_GAME':
                    game.status = 'FINISHED';
                    broadcast(gameId, { type: 'GAME_STATE_UPDATE', payload: game });
                    break;
                
                case 'RESET_GAME':
                    console.log(`[${gameId}] Game reset and deleted.`);
                    if (gameTimers[gameId]) {
                        clearTimeout(gameTimers[gameId]);
                        delete gameTimers[gameId];
                    }
                    delete games[gameId]; 
                    break;
            }
        } catch (error) {
            console.error('Failed to process message:', error);
        }
    });
    
    ws.on('error', (error) => {
        console.error(`[WebSocket Error] for IP ${ip}:`, error);
    });

    ws.on('close', () => {
        if (wsToPlayerMap.has(ws)) {
            const { gameId, playerId } = wsToPlayerMap.get(ws);
            wsToPlayerMap.delete(ws);
            console.log(`Client disconnected. Player ${playerId || '(new connection)'} from game ${gameId}. Player data is preserved.`);
        } else {
            console.log(`Client from IP ${ip} disconnected before joining a game.`);
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`---- Server is running ----`);
    console.log(`Listening on all network interfaces on port ${PORT}`);
    console.log(`Organizer should open: http://localhost:5173`);
    console.log(`Tell players to use the unique URL from the lobby.`);
    console.log(`-------------------------`);
});