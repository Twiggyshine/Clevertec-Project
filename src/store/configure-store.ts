import { configureStore } from '@reduxjs/toolkit';

import recipesReducer from './app-slice';
import filtersReducer from './filters-slice';

export const store = configureStore({
    reducer: {
        recipes: recipesReducer,
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
