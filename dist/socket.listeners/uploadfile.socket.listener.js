"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_file_1 = __importDefault(require("socket.io-file"));
const path_1 = __importDefault(require("path"));
exports.default = (io, socket) => {
    const uploader = new socket_io_file_1.default(socket, {
        uploadDir: {
            // images: path.join(__dirname, '..', '..', 'dist', 'upload', 'images'),
            // videos: path.join(__dirname, '..', '..', 'dist', 'upload', 'videos'),
            post: path_1.default.join(__dirname, '..', '..', 'dist', 'upload', 'posts'),
            comment: path_1.default.join(__dirname, '..', '..', 'dist', 'upload', 'comments'),
            profile: path_1.default.join(__dirname, '..', '..', 'dist', 'upload', 'profiles'),
        },
        rename: (fileName, fileInfo) => {
            return `${fileInfo.data.userID}${Math.floor(Math.random() * 1000)}${Date.now()}-${fileName}`;
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
        chunkSize: 10240,
        transmissionDelay: 0,
        overwrite: true, // overwrite file if exists, default is true.
    });
    uploader.on('start', (fileInfo) => {
        console.log('Start uploading');
    });
    uploader.on('stream', (fileInfo) => {
        // console.log(`${fileInfo.wrote} / ${fileInfo.size} byte(s)`);
    });
    uploader.on('complete', (fileInfo) => {
        // @ts-ignore
        console.log('Upload Complete.');
    });
    uploader.on('Done', (fileInfo) => {
        console.log('Upload Done.');
    });
    uploader.on('error', (err) => {
        console.log('Error!', err);
    });
    uploader.on('abort', (fileInfo) => {
        console.log('Aborted: ', fileInfo);
    });
};
