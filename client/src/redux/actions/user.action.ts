import { IUser, login } from '../reducers/user.reducer';
import { AppDispatch } from '../store';
import axios from '../../config/axios';

export const fetchUser = () => (dispatch: AppDispatch) => {
    axios
        .post('/login')
        .then((res) => {
            const user: IUser = res.data;
            // dispatch(login(user))
        })
        .catch((err) => {
            dispatch(login({ pseudo: 'test', email: 'test@', password: 'password' }));
        });
};
