import { Server, Socket } from 'socket.io';
import SocketIOFile from 'socket.io-file';
import path from 'path';
import { FileInfo } from '../types';

export default (io: Server, socket: Socket) => {
    const uploader = new SocketIOFile(socket, {
        uploadDir: {
            // images: path.join(__dirname, '..', '..', 'dist', 'upload', 'images'),
            // videos: path.join(__dirname, '..', '..', 'dist', 'upload', 'videos'),
            post: path.join(__dirname, '..', '..', 'dist', 'upload', 'posts'),
            comment: path.join(__dirname, '..', '..', 'dist', 'upload', 'comments'),
            profile: path.join(__dirname, '..', '..', 'dist', 'upload', 'profiles'),
        },
        rename: (fileName, fileInfo: any) => {
            return `${fileInfo.data.userID}${Math.floor(
                Math.random() * 1000
            )}${Date.now()}-${fileName}`;
        },
        accepts: [
            'image/png',
            'image/jpg',
            'image/jpeg',
            'image/gif',
            'image/webp',
            'video/mp4',
            // 'video/MP2T',
            // 'video/quicktime',
        ],
        // maxFileSize: 4194304, // 4 MB. default is undefined(no limit)
        chunkSize: 10240, // default is 10240(1KB)
        transmissionDelay: 0, // delay of each transmission, higher value saves more cpu resources, lower upload speed. default is 0(no delay)
        overwrite: true, // overwrite file if exists, default is true.
    });
    uploader.on('start', (fileInfo: FileInfo) => {
        console.log('Start uploading');
    });
    uploader.on('stream', (fileInfo: FileInfo) => {
        // console.log(`${fileInfo.wrote} / ${fileInfo.size} byte(s)`);
    });
    uploader.on('complete', (fileInfo: FileInfo) => {
        // @ts-ignore
        console.log('Upload Complete.');
    });
    uploader.on('Done', (fileInfo: FileInfo) => {
        console.log('Upload Done.');
    });
    uploader.on('error', (err) => {
        console.log('Error!', err);
    });
    uploader.on('abort', (fileInfo: FileInfo) => {
        console.log('Aborted: ', fileInfo);
    });
};
