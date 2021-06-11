import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user.reducer';
import loaderReducer from './reducers/loading.reducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        loader: loaderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type RootState = <typeof store.getState>
