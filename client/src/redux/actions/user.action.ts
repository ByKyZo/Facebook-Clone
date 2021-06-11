import { IUser, login } from '../reducers/user.reducer';
import { AppDispatch } from '../store';
import axios from '../../config/axios';

export const userLogin = (email: string, password: string) => (dispatch: AppDispatch) => {
    console.log('userLogin');
    axios
        .post('/user/signup', { email, password })
        .then((res) => {
            const user: IUser = res.data;
            dispatch(login(user));
        })
        .catch((err) => {
            console.log('LOGIN ERROR SEND TOAST ERROR');
            console.log(err.response);
        });
};
