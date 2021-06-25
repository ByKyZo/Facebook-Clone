import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IUser } from '../../typescript/types';

// TODO Rajouter dans le types IUser : friends / images / posts / story / notifications / messenger + en Backend

// let initialState: IUser = {
//     _id: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     birthday: {
//         day: '',
//         month: '',
//         year: '',
//         format: '',
//     },
//     gender: '',
//     createdAt: '' as unknown as Date,
//     updateAt: '' as unknown as Date,
//     isAuth: false,
//     isLoading: false,
// };

const initialState = {} as IUser;

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        startUserLoading: (state, action: PayloadAction<undefined>) => {
            return { ...state, isLoading: true };
        },
        endUserLoading: (state, action: PayloadAction<undefined>) => {
            return { ...state, isLoading: false };
        },
        login: (state, action: PayloadAction<IUser>) => {
            return { ...action.payload, isAuth: true };
        },
        rememberMe: (state, action: PayloadAction<IUser>) => {
            return { ...action.payload, isAuth: true };
        },
    },
});

export const { login, startUserLoading, endUserLoading } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
