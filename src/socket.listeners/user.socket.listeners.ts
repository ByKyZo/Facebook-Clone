import { Server, Socket } from 'socket.io';
import UserSocketController from '../socket.controllers/user.socket.controller';

// TODO Faire un socket middleware pour recuperer le token du user dans le header et verifier ses permissions (dans chaque requete)
// TODO Faire de meme pour les requetes HTTP

// TODO Gerer les amis
// TODO Faire les notifs (le plus tot possible)
// TODO Gerer le status des users (connecté / deconnecté / il ya x temps)
// TODO Gerer la photo de profil et de couverture

// TODO Faire le add post avec socket io ?

export default (io: Server, socket: Socket) => {
    /**
     *
     */
    socket.on('react post', async ({ userID, postID, reaction }) => {
        try {
            await UserSocketController.reactPost(userID, postID, reaction);
            io.emit('react post', { userID, postID, reaction });
        } catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    });
    /**
     *
     */
    socket.on('comment post', async ({ token, userID, postID, message, attachment }) => {
        try {
            const comment = await UserSocketController.commentPost(
                userID,
                postID,
                message,
                attachment
            );
            console.log('after middleware', token);
            io.emit('comment post', { userID, postID, comment });
        } catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    });
    /**
     *
     */
    socket.on('react comment', async ({ userID, postID, commentID, reaction }) => {
        try {
            await UserSocketController.reactComment(userID, postID, commentID, reaction);
            io.emit('react comment', { userID, postID, commentID, reaction });
        } catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    });
    /**
     *
     */
    socket.on('reply comment', async ({ userID, postID, commentID, message, attachment }) => {
        try {
            const reply = await UserSocketController.replyComment(
                userID,
                postID,
                commentID,
                message,
                attachment
            );
            io.emit('reply comment', { userID, postID, commentID, reply });
        } catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    });
    /**
     *
     */
    socket.on('react reply', async ({ userID, postID, commentID, replyID, reaction }) => {
        try {
            await UserSocketController.reactReply(userID, postID, commentID, replyID, reaction);
            io.emit('react reply', { userID, postID, commentID, replyID, reaction });
        } catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    });
    /**
     * TODO A faire
     */
    socket.on('add friend', async ({ userID, postID, commentID, replyID, reaction }) => {
        try {
            await UserSocketController.reactReply(userID, postID, commentID, replyID, reaction);
            io.emit('add friend', { userID, postID, commentID, replyID, reaction });
        } catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    });
    /**
     * TODO A faire
     */
    socket.on('remove friend', async ({ userID, postID, commentID, replyID, reaction }) => {
        try {
            await UserSocketController.reactReply(userID, postID, commentID, replyID, reaction);
            io.emit('remove friend', { userID, postID, commentID, replyID, reaction });
        } catch (err) {
            console.log(err.message);
            io.emit('exception');
        }
    });
};
