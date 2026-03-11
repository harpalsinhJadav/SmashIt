// import { setSomeRealtimeState } from '../redux/slices/playerSlice';

class SocketService {
  private socket: any = null;

  connect(url: string) {
    // In a real app, you would use a library like socket.io-client or the native WebSocket API
    /*
        this.socket = new WebSocket(url);
    
        this.socket.onopen = () => {
          console.log('WebSocket Connected');
        };
    
        this.socket.onmessage = (e: any) => {
          const data = JSON.parse(e.data);
          console.log('WebSocket Message Received:', data);
          // Handle messages and dispatch to Redux
        };
    
        this.socket.onerror = (e: any) => {
          console.error('WebSocket Error:', e.message);
        };
    
        this.socket.onclose = (e: any) => {
          console.log('WebSocket Disconnected:', e.reason);
        };
        */
    console.log('WebSocket utility prepared for url:', url);
  }

  send(message: any) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}

export const socketService = new SocketService();
