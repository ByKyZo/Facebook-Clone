// @ts-ignore
import SocketIOFileClient from 'socket.io-file-client';
import React, { useCallback, useEffect, useState } from 'react';
import { toastCatchError } from '../utils/utils';
import SocketIO from 'socket.io';
import { IFileInfo } from '../typescript/types';

/**
 *
 * @returns Ref qui fait des rendu
 */
export const useRefUpdate = <T extends unknown>(): [
    T | null,
    React.Dispatch<React.SetStateAction<T | null>>
] => {
    const [stateRef, setStateRef] = useState<T | null>(null);
    const setRef = useCallback((node) => {
        if (node) {
            setStateRef(node);
        }
    }, []);
    return [stateRef, setRef];
};
// TODO Check pour clean up le use effect
/**
 *
 * @param socket Instance du socket
 * @param event Event du socket
 * @param data Data du socket
 * @returns [Un object uploader , la progression du telechargement du fichier]
 */
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

/**
 *
 * @param htmlElement Element de référence
 * @param setIsOpen Fonction qui gere le rendu de l'element
 * @param htmlElementsIgnore Tableau d'element à ignorer
 * - Demonter (close) le composant en cliquant dehors ou en pressant le touche Echap
 * - Peut ignorer des elements
 */
export const useComponentUnmount = (
    htmlElement: HTMLElement | null,
    setIsOpen: React.Dispatch<boolean>,
    htmlElementsIgnore?: [HTMLElement | null | undefined]
) => {
    useEffect(() => {
        const handleCloseOnClickOutside = (e: any) => {
            if (htmlElement && !htmlElement.contains(e.target)) {
                if (htmlElementsIgnore) {
                    htmlElementsIgnore.forEach((htmlElementIgnore) => {
                        if (htmlElementIgnore !== e.target) {
                            setIsOpen(false);
                        }
                    });
                } else {
                    setIsOpen(false);
                }
            }
        };
        const handleCloseOnPressEchap = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('mousedown', handleCloseOnClickOutside, true);
        window.addEventListener('keydown', handleCloseOnPressEchap, true);

        return () => {
            window.removeEventListener('mousedown', handleCloseOnClickOutside, true);
            window.removeEventListener('keydown', handleCloseOnPressEchap, true);
        };
    }, [htmlElement, htmlElementsIgnore, setIsOpen]);
};
