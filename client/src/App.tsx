import React from 'react';
import MainRouter from './router/router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
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
            <MainRouter />
        </div>
    );
}

export default App;
