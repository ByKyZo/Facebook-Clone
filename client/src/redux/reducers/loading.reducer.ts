import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let initialState: boolean = false;

const loaderSlice = createSlice({
    name: 'loader',
    initialState: initialState,
    reducers: {
        startLoading: (state, action: PayloadAction<boolean>) => {
            return state;
        },
        endLoading: (state, action: PayloadAction<boolean>) => {
            return state;
        },
    },
});

export default loaderSlice.reducer;
