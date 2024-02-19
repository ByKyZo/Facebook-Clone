import io from 'socket.io-client';
import { SOCKET_URL } from './config';
import SocketIO from 'socket.io';

// TODO A voir pour le token envoyé et le middleware
const socket: SocketIO.Socket = io(SOCKET_URL, {
    auth: {
        token: localStorage.getItem('TOKEN'),
    },
}) as unknown as SocketIO.Socket;

export default socket;
