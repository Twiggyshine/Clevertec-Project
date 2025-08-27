// import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import { apiSlice } from '~/query/create-api';

// import appReducer, { appSlice } from './app-slice';
// const isProduction = false;
// const rootReducer = combineReducers({
//     [appSlice.name]: appReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer,
// });

// export type ApplicationState = ReturnType<typeof rootReducer>;
// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
//     devTools: !isProduction,
// });

// src/store.ts
import { configureStore } from '@reduxjs/toolkit';

import recipesReducer from './app-slice';

export const store = configureStore({
    reducer: {
        recipes: recipesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
