import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IUser {
    pseudo: string;
    email: string;
    password: string;
}

let initialState: IUser = {
    pseudo: '',
    email: '',
    password: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<IUser>) => {
            return { ...state, pseudo: action.payload.pseudo };
        },
    },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
