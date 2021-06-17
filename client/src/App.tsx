import React, { useEffect } from 'react';
import MainRouter from './router/router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import SocketHandler from './socket/SocketHandler';

Modal.setAppElement('#root');

function App() {
    useEffect(() => {
        const darkModeValue = localStorage.getItem('DARK-MODE');
        if (!darkModeValue)
            return document.querySelector('html')!.setAttribute('data-darkmode', 'off');
        document.querySelector('html')!.setAttribute('data-darkmode', darkModeValue);
    }, []);

    return (
        <div className="app">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <SocketHandler />
            <MainRouter />
        </div>
    );
}

export default App;
