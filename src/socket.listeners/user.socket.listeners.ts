import { Server, Socket } from 'socket.io';
import UserSocketController from '../socket.controllers/user.socket.controller';
// @ts-ignore
import ss from 'socket.io-stream';
// @ts-ignore
import siofu from 'socket.iosocketio-file-upload';
import fs from 'fs';

let files: any = {};

export default (io: Server, socket: Socket) => {
    // TODO IMPORTANT REMETTRE UN ARRAY ATTACHMENT
    socket.on('react to post', async ({ userID, postID }) => {
        // try {
        //     // const post = await UserSocketController.addPost(userID, message, attachments);
        //     // io.emit('add post', post);
        // } catch (e) {
        //     console.error(e.message);
        //     io.emit('exception');
        // }
    });
};
