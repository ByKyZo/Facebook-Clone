"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_socket_controller_1 = __importDefault(require("../socket.controllers/user.socket.controller"));
// TODO Faire un socket middleware pour recuperer le token du user dans le header et verifier ses permissions (dans chaque requete)
// TODO Faire de meme pour les requetes HTTP
// TODO Gerer les amis
// TODO Faire les notifs (le plus tot possible)
// TODO Gerer le status des users (connecté / deconnecté / il ya x temps)
// TODO Gerer la photo de profil et de couverture
// TODO Faire le add post avec socket io ?
exports.default = (io, socket) => {
    /**
     *
     */
    socket.on('react post', ({ userID, postID, reaction }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield user_socket_controller_1.default.reactPost(userID, postID, reaction);
            io.emit('react post', { userID, postID, reaction });
        }
        catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    }));
    /**
     *
     */
    socket.on('comment post', ({ token, userID, postID, message, attachment }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const comment = yield user_socket_controller_1.default.commentPost(userID, postID, message, attachment);
            console.log('after middleware', token);
            io.emit('comment post', { userID, postID, comment });
        }
        catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    }));
    /**
     *
     */
    socket.on('react comment', ({ userID, postID, commentID, reaction }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield user_socket_controller_1.default.reactComment(userID, postID, commentID, reaction);
            io.emit('react comment', { userID, postID, commentID, reaction });
        }
        catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    }));
    /**
     *
     */
    socket.on('reply comment', ({ userID, postID, commentID, message, attachment }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const reply = yield user_socket_controller_1.default.replyComment(userID, postID, commentID, message, attachment);
            io.emit('reply comment', { userID, postID, commentID, reply });
        }
        catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    }));
    /**
     *
     */
    socket.on('react reply', ({ userID, postID, commentID, replyID, reaction }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield user_socket_controller_1.default.reactReply(userID, postID, commentID, replyID, reaction);
            io.emit('react reply', { userID, postID, commentID, replyID, reaction });
        }
        catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    }));
    /**
     * TODO A faire
     */
    socket.on('add friend', ({ userID, postID, commentID, replyID, reaction }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield user_socket_controller_1.default.reactReply(userID, postID, commentID, replyID, reaction);
            io.emit('add friend', { userID, postID, commentID, replyID, reaction });
        }
        catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    }));
    /**
     * TODO A faire
     */
    socket.on('remove friend', ({ userID, postID, commentID, replyID, reaction }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield user_socket_controller_1.default.reactReply(userID, postID, commentID, replyID, reaction);
            io.emit('remove friend', { userID, postID, commentID, replyID, reaction });
        }
        catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    }));
};
