import { endUserLoading, IUser, login, startUserLoading } from '../reducers/user.reducer';
import { AppDispatch } from '../store';
import axios from '../../config/axios';
import { toastCatchError, toastSuccess } from '../../utils/utils';
import Login from '../../pages/Login';

// TODO Gerer les jwt avec le header x-access-token
// TODO Faire un middleware en back pour verifier si autorisé a chaque page

export const userLogin = (email: string, password: string) => (dispatch: AppDispatch) => {
    dispatch(startUserLoading());
    axios
        .post('/auth/signin', { email, password })
        .then((res) => {
            const user: IUser = res.data.user;
            const token: string = res.data.token;
            dispatch(login(user));
            localStorage.setItem('TOKEN', token);
            toastSuccess('Connection successful');
        })
        .catch((err) => {
            toastCatchError('Connection failed');
        })
        .finally(() => {
            dispatch(endUserLoading());
        });
};

export const userRememberMe = () => (dispatch: AppDispatch) => {
    console.log('remember me');
    const token = localStorage.getItem('TOKEN');
    if (!token) return console.log('NO TOKEN');
    console.log('token is here');
    dispatch(startUserLoading());
    axios
        .get('/auth/rememberme', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            const user: IUser = res.data.user;
            const token: string = res.data.token;
            console.log(res);
            dispatch(login(user));
            localStorage.setItem('TOKEN', token);
            toastSuccess('Connection successful');
        })
        .catch((err) => {
            toastCatchError('Remember me failed (change catch)');
        })
        .finally(() => {
            console.log('finally');
            dispatch(endUserLoading());
        });
};
