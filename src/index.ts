import express from 'express';
import dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '..', 'config', '.env.local') });
import './database/database';
import UserRoutes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import * as http from 'http';
import userSocketListener from './socket.listeners/user.socket.listeners';
import uploadFileSocketListener from './socket.listeners/uploadfile.socket.listener';
import JwtHandler from './utils/jwtHandler';
import UserModel from './models/user.model';
// import SocketIOFile from 'socket.io-file';

// TODO Faire la connexion avec postman
// TODO Gerer le add post avec socket ?
// TODO Finir les types

// **** CONFIG ****
const PORT: number = process.env.PORT as unknown as number | 5000;
const CORS_ORIGIN: string = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';

// **** STARTER ****
const server = express();
const httpServer = http.createServer(server);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        credentials: true,
    },
});

// **** MIDDLEWARE ****
server.use(cookieParser());
server.use(express.json());
server.use(cors({ origin: '*', credentials: true })); // REMETTRE CORS_ORIGIN
server.use(express.urlencoded({ extended: true }));
// server.use((req, res, next) => {
//     console.log('MIDDLEWARE HTTP', req.headers.authorization);
//     next();
// });
// io.use(async (socket, next) => {
//     try {
//         const tokenDecoded: any = JwtHandler.verifyTokenAndDecode(socket.handshake.auth.token);
//         if (!tokenDecoded) return next(new Error('unauthorized'));
//         const user = await UserModel.findById(tokenDecoded.userID);
//         if (!user) return next(new Error('unauthorized'));
//         next();
//         console.log('socket token', socket.handshake.auth.token);
//     } catch {
//         next(new Error('unauthorized'));
//     }
// });

// **** ROUTES ****
server.use('/api/auth', AuthRoutes);
server.use('/api/user', UserRoutes);
server.use('/upload', express.static(path.join(__dirname, '..', 'dist', 'upload')));

// **** SERVER LISTENER ****
httpServer.listen(PORT, () => {
    console.log(`listen on port ${PORT}`);
});

let users: any = {};

io.on('connect', (socket) => {
    // users.push(socket.id);
    userSocketListener(io, socket);
    uploadFileSocketListener(io, socket);

    socket.on('error', (err) => {
        console.log(`socket error : ${err}`);
    });
});
