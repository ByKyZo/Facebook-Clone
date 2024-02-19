"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path = __importStar(require("path"));
dotenv_1.default.config({ path: path.join(__dirname, '..', 'config', '.env.local') });
require("./database/database");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const socket_io_1 = require("socket.io");
const http = __importStar(require("http"));
const user_socket_listeners_1 = __importDefault(require("./socket.listeners/user.socket.listeners"));
const uploadfile_socket_listener_1 = __importDefault(require("./socket.listeners/uploadfile.socket.listener"));
// import SocketIOFile from 'socket.io-file';
// TODO Faire la connexion avec postman
// TODO Gerer le add post avec socket ?
// TODO Finir les types
// **** CONFIG ****
const PORT = process.env.PORT;
const CORS_ORIGIN = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';
// **** STARTER ****
const server = express_1.default();
const httpServer = http.createServer(server);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
        credentials: true,
    },
});
// **** MIDDLEWARE ****
server.use(cookie_parser_1.default());
server.use(express_1.default.json());
server.use(cors_1.default({ origin: '*', credentials: true })); // REMETTRE CORS_ORIGIN
server.use(express_1.default.urlencoded({ extended: true }));
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
server.use('/api/auth', auth_routes_1.default);
server.use('/api/user', user_routes_1.default);
server.use('/api/upload', express_1.default.static(path.join(__dirname, '..', 'dist', 'upload')));
// **** SERVER LISTENER ****
httpServer.listen(PORT, () => {
    console.log(`listen on port ${PORT}`);
});
let users = {};
io.on('connect', (socket) => {
    // users.push(socket.id);
    user_socket_listeners_1.default(io, socket);
    uploadfile_socket_listener_1.default(io, socket);
    socket.on('error', (err) => {
        console.log(`socket error : ${err}`);
    });
});
