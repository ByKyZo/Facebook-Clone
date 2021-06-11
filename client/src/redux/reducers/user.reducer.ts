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
    createdAt: Date;
    updateAt: Date;
}

type UserState = IUser | null;

let initialState = null as UserState;

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<IUser>) => {
            return { ...action.payload };
        },
        test: (state, action) => {},
    },
});

export const { login } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
