import express from 'express';
import dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '..', 'config', '.env.local') });
import './database/database';
import UserRoutes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const server = express();
// @ts-ignore
const PORT: number = process.env.PORT | 5000;
const CORS_ORIGIN: string = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';

server.use(cookieParser());
server.use(express.json());
// REMETTER CORS_ORIGIN
server.use(cors({ origin: '*', credentials: true }));
server.use(express.urlencoded({ extended: true }));

server.use('/api/auth', AuthRoutes);
server.use('/api/user', UserRoutes);

server.listen(PORT, () => {
    console.log(`listen on port ${PORT}`);
});
