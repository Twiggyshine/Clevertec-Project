import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Recipe } from '../features/recipes/components/RecipeDetails/CookingSectionProops';

export interface RecipesState {
    data: Recipe[];
    loading: boolean;
    error?: string;
}

const initialState: RecipesState = {
    data: [],
    loading: false,
    error: undefined,
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes(state, action: PayloadAction<Recipe[]>) {
            state.data = action.payload;
        },
    },
});

export const { setRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
