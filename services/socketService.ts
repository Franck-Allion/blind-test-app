import { GameSettings } from "../types";

const serverHostname = window.location.hostname;
const API_URL = `http://${serverHostname}:8080`;
const WS_URL = `ws://${serverHostname}:8080`;

class SocketService {
  private ws: WebSocket | null = null;
  private emitter = new EventTarget();
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  public async createGame(payload: { settings: GameSettings, songIds: string[] }): Promise<{ gameId: string; organizerPlayerId: string; }> {
      const response = await fetch(`${API_URL}/api/create-game`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
      });
      if (!response.ok) {
          throw new Error('Failed to create game');
      }
      return response.json();
  }
  
  public connect(gameId: string, playerId: string | null) {
    // Prevent creating a new connection if one is already open or in the process of connecting.
    // This is crucial for handling React StrictMode's double useEffect invocation in development.
    if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.send({ type: 'JOIN_GAME', payload: { gameId, playerId } });
        }
        return;
    }

    this.ws = new WebSocket(WS_URL);

    this.ws.onopen = () => {
      console.log('WebSocket connected');
      this.reconnectAttempts = 0;
      // Identify this connection to the server's game room
      this.send({ type: 'JOIN_GAME', payload: { gameId, playerId } });
    };

    this.ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        this.emitter.dispatchEvent(new CustomEvent(message.type, { detail: message.payload }));
      } catch (error) {
          console.error('Error parsing message:', error);
      }
    };

    this.ws.onclose = () => {
      console.log('WebSocket disconnected');
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        setTimeout(() => {
          this.reconnectAttempts++;
          this.connect(gameId, playerId);
        }, 3000);
      }
    };
    
    this.ws.onerror = (err) => {
        console.error('WebSocket error:', err);
        this.emitter.dispatchEvent(new CustomEvent('ERROR', { detail: 'Connection to the server failed.'}));
        this.ws?.close();
    };
  }

  public send(data: object) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    } else {
        console.error('WebSocket is not connected.');
    }
  }

  public on(eventName: string, callback: (data: any) => void) {
    this.emitter.addEventListener(eventName, (event: any) => {
      callback(event.detail);
    });
  }

  public disconnect() {
    this.reconnectAttempts = this.maxReconnectAttempts; // prevent reconnection
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

export const socketService = new SocketService();