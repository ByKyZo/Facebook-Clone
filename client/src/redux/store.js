"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const user_reducer_1 = __importDefault(require("./reducers/user.reducer"));
const loading_reducer_1 = __importDefault(require("./reducers/loading.reducer"));
exports.store = toolkit_1.configureStore({
    reducer: {
        user: user_reducer_1.default,
        loader: loading_reducer_1.default,
    },
});
// export type RootState = <typeof store.getState>
