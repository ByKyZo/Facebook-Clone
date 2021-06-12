"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectUser = exports.endUserLoading = exports.startUserLoading = exports.login = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
let initialState = {
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
const userSlice = toolkit_1.createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        startUserLoading: (state, action) => {
            return Object.assign(Object.assign({}, state), { isLoading: true });
        },
        endUserLoading: (state, action) => {
            return Object.assign(Object.assign({}, state), { isLoading: false });
        },
        login: (state, action) => {
            return Object.assign(Object.assign({}, action.payload), { isAuth: true });
        },
        // rememberMe: (state, action: PayloadAction<IUser>) => {
        //     return { ...action.payload, isAuth: true };
        // },
        test: (state, action) => { },
    },
});
_a = userSlice.actions, exports.login = _a.login, exports.startUserLoading = _a.startUserLoading, exports.endUserLoading = _a.endUserLoading;
const selectUser = (state) => state.user;
exports.selectUser = selectUser;
exports.default = userSlice.reducer;
