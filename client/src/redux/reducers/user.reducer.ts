import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// TODO Rajouter dans le types IUser : friends / photos / posts / story / notifications / messenger + en Backend
export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthday: {
        day: string;
        month: string;
        year: string;
        format: string;
    };
    gender: string;
    createdAt?: Date;
    updateAt?: Date;
    isAuth: boolean;
    isLoading: boolean;
}

let initialState: IUser = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: {
        day: '',
        month: '',
        year: '',
        format: '',
    },
    gender: '',
    createdAt: undefined,
    updateAt: undefined,
    isAuth: false,
    isLoading: false,
};

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
        // rememberMe: (state, action: PayloadAction<IUser>) => {
        //     return { ...action.payload, isAuth: true };
        // },
        test: (state, action) => {},
    },
});

export const { login, startUserLoading, endUserLoading } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
