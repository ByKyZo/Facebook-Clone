let API_URL: string;
let SOCKET_URL: string;

if (process.env.NODE_ENV === 'production') {
    API_URL = '';
    SOCKET_URL = '';
} else {
    API_URL = 'http://localhost:5000/api';
    SOCKET_URL = 'http://localhost:5000';
}

export { API_URL, SOCKET_URL };
