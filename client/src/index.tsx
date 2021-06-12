import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { userRememberMe } from './redux/actions/user.action';

store.dispatch(userRememberMe());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
