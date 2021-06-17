import React, { useEffect } from 'react';
import { useAppDispatch } from '../redux/redux.hook';
import socket from '../config/socket';
import { toastCatchError } from '../utils/utils';

const SocketHandler = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        socket.on('add post', (test) => {
            console.log(test);
        });
        socket.on('exception', () => {
            // NE PAS METTRE LE MESSAGE
            toastCatchError();
        });
    }, []);

    return <></>;
};

export default SocketHandler;
