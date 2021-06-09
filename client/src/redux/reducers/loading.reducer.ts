import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let initialState: boolean = false;

const loaderSlice = createSlice({
    name: 'loader',
    initialState: initialState,
    reducers: {
        startLoading: (state, action) => {
            return state;
        },
        endLoading: (state, action) => {
            return state;
        },
    },
});

export default loaderSlice.reducer;
