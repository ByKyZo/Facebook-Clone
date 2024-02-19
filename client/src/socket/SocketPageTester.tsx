import React, { useEffect, useRef, useState } from 'react';
import socket from '../config/socket';
import { useAppSelector } from '../redux/redux.hook';
import { useSocketFileUpload } from '../hooks/hooks';

// const SOCKET_EVENT = 'react post';
const SOCKET_EVENT = 'comment post';
// const SOCKET_EVENT = 'react comment;
// const SOCKET_EVENT = 'reply comment';
// const SOCKET_EVENT = 'react reply';
// const SOCKET_EVENT = 'comment post';

const SocketPageTester = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFile] = useState<any[]>([]);
    const user = useAppSelector((state) => state.user);
    const { uploader, fileProgress } = useSocketFileUpload(socket, SOCKET_EVENT, (fileInfo) => {
        return {
            userID: user._id,
            postID: '60cfb12fc1abe43fc8380708',
            message: 'Message de test',
            attachment: fileInfo,
        };
    });

    const handleSocketEmitter = () => {
        uploader.upload(files, {
            uploadTo: 'comment',
            data: {
                userID: user._id,
                nbFilesSended: files.length,
            },
        });
    };

    useEffect(() => {
        socket.on(SOCKET_EVENT, (data) => {
            console.log(data);
        });
        socket.on('online', (userID) => {
            console.log(`online : ${userID}`);
        });
        socket.on('offline', (userID) => {
            console.log(`offline : ${userID}`);
        });
    }, []);

    return (
        <>
            <span>{fileProgress + '%'}</span>
            {/*<input ref={inputRef} type="file" onChange={(e) => setFile(e.target.files)} />*/}
            <input
                ref={inputRef}
                type="file"
                // @ts-ignore
                onChange={(e) => setFile((oldState) => [...oldState, ...e.target.files!])}
            />
            <button
                onClick={() => handleSocketEmitter()}
                style={{ padding: '30px', margin: '50px', cursor: 'pointer' }}>
                Emit !
            </button>
        </>
    );
};

export default SocketPageTester;
