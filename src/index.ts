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
import UserSocketController from './socket.controllers/user.socket.controller';

// TODO Faire la connexion avec postman
// TODO Gerer le add post avec socket
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

// **** ROUTES ****
server.use('/api/auth', AuthRoutes);
server.use('/api/user', UserRoutes);
server.use('/upload/image', express.static(path.join(__dirname, '..', 'dist', 'upload', 'images')));
server.use('/upload/video', express.static(path.join(__dirname, '..', 'dist', 'upload', 'videos')));

// **** SERVER LISTENER ****
httpServer.listen(PORT, () => {
    console.log(`listen on port ${PORT}`);
});

const clients: string[] = [];

io.on('connect', (socket) => {
    userSocketListener(io, socket);

    socket.on('error', (err) => {
        console.log(`socket error : ${err}`);
    });

    clients.push(socket.id);
    console.log(`user connected : ${socket.id}`);
});
