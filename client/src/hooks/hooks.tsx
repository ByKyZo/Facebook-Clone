// @ts-ignore
import SocketIOFileClient from 'socket.io-file-client';
import { useEffect, useState } from 'react';
import { toastCatchError } from '../utils/utils';
import SocketIO from 'socket.io';
import { IFileInfo } from '../typescript/types';

// TODO Check pour clean up le use effect
export const useSocketFileUpload = (
    socket: SocketIO.Socket,
    event: string,
    data: (fileInfo: IFileInfo) => {}
) => {
    const [fileProgress, setFileProgress] = useState<number>(0);
    const uploader = new SocketIOFileClient(socket);

    useEffect(() => {
        uploader.on('start', (fileInfo: IFileInfo) => {
            console.log('Start uploading', fileInfo);
        });
        uploader.on('stream', (fileInfo: any) => {
            console.log('stream');
            setFileProgress((fileInfo.sent * 100) / fileInfo.size);
        });
        uploader.on('complete', (fileInfo: IFileInfo) => {
            setFileProgress(100);
            console.log('Upload Complete', fileInfo);
            socket.emit(event, data(fileInfo));
        });
        uploader.on('error', (err: any) => {
            console.log('Error!', err);
            toastCatchError();
        });
        uploader.on('abort', (fileInfo: IFileInfo) => {
            console.log('Aborted: ', fileInfo);
        });
        // return () => {
        //     console.log('unmounted uploader');
        //     uploader.off();
        // };
    });

    return { uploader: uploader, fileProgress: Math.floor(fileProgress) };
};
