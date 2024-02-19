import React, { useEffect } from 'react';
import { useAppDispatch } from '../redux/redux.hook';
import socket from '../config/socket';
import { toastCatchError } from '../utils/utils';

const SocketHandler = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        /**
         * Gere les erreurs generer par le socket
         */
        socket.on('error', () => {
            toastCatchError();
        });
        /**
         * Gere les erreurs generer par le serveur
         */
        socket.on('exception', () => {
            toastCatchError();
        });
        /**
         * Gere les erreurs d'Autorisation
         */
        socket.on('connect_error', () => {
            toastCatchError('Unauthorized');
        });
    }, []);

    return <></>;
};

export default SocketHandler;
