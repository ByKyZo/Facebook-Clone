"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
let initialState = false;
const loaderSlice = toolkit_1.createSlice({
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
exports.default = loaderSlice.reducer;
