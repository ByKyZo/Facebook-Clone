import { endUserLoading, IUser, login, startUserLoading } from '../reducers/user.reducer';
import { AppDispatch } from '../store';
import axios from '../../config/axios';
import { toastCatchError, toastSuccess } from '../../utils/utils';

export const userLogin = (email: string, password: string) => (dispatch: AppDispatch) => {
    dispatch(startUserLoading());
    axios
        .post('/auth/signin', { email, password })
        .then((res) => {
            const user: IUser = res.data.user;
            const token: string = res.data.token;
            console.log(res.data);
            dispatch(login(user));
            toastSuccess('Connection successful');
        })
        .catch((err) => {
            toastCatchError('Connection failed');
        })
        .finally(() => {
            dispatch(endUserLoading());
        });
};
