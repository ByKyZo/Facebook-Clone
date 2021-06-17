import React, { useEffect, useRef, useState } from 'react';
import socket from '../config/socket';
import { useAppSelector } from '../redux/redux.hook';
import axios from '../config/axios';

const SocketPageTester = () => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const user = useAppSelector((state) => state.user);
    const [files, setFiles] = useState<any[]>([]);

    const handleSocketEmitter = () => {
        // TODO ENVOYER LES SLICE FILE UN PAR PAR UN ET UPLOAD ENSUITE
        // TODO Faire une 'boucle de socket' avec event : Start / Done / ?Upload?
        // TODO Penser a decommenter le emit
        const formData = new FormData();
        formData.append('userID', user._id);
        formData.append('message', 'Ceci est un message de post');
        files.forEach((file) => {
            formData.append('attachments', file);
        });
        axios
            .post('/user/post', formData)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div>
                <input
                    ref={inputFileRef}
                    type="file"
                    onChange={(e) => setFiles([...files, e.target.files![0]])}
                />
            </div>
            {files.map((file, index) => {
                return (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <div>{file.name}</div>
                        <div>{file.type}</div>
                    </div>
                );
            })}
            <button
                onClick={() => handleSocketEmitter()}
                style={{ padding: '30px', margin: '50px', cursor: 'pointer' }}>
                Emit !
            </button>
        </>
    );
};

export default SocketPageTester;
