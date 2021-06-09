import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user.reducer';
import loaderReducer from './reducers/loading.reducer';

// TODO Voir le configure store
// TODO Custom le usedispatch et les autres hooks possibles
// TODO Voir le type de payload Et Action.payload
// TODO Se referer a la doc pour faire un truc propre

export const store = configureStore({
    reducer: {
        user: userReducer,
        loader: loaderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type RootState = <typeof store.getState>
