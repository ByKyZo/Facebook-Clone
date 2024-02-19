import React, { useEffect, useState } from 'react';
import MainRouter from './router/router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import SocketHandler from './socket/SocketHandler';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContext } from './context/themeContext';

Modal.setAppElement('#root');

function App() {
    const [darkModeState, setDarkModeState] = useState<string | null>(null);

    useEffect(() => {
        if (darkModeState === 'off') {
            localStorage.setItem('DARK-MODE', 'off');
            document.querySelector('html')?.setAttribute('data-darkmode', 'off');
        } else if (darkModeState === 'on') {
            localStorage.setItem('DARK-MODE', 'on');
            document.querySelector('html')?.setAttribute('data-darkmode', 'on');
        }
    }, [darkModeState]);

    useEffect(() => {
        const darkModeValue = localStorage.getItem('DARK-MODE');
        if (darkModeValue) {
            setDarkModeState(darkModeValue);
        } else {
            setDarkModeState('off');
            localStorage.setItem('DARK-MODE', 'off');
        }
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
            <ThemeContext.Provider value={{ darkModeState, setDarkModeState }}>
                <Router>
                    <MainRouter />
                </Router>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
