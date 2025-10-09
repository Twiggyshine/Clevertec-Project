import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Recipe } from '../features/recipes/components/RecipeDetails/CookingSectionProops';

export interface RecipesState {
    recipes: Recipe[];
}

const initialState: RecipesState = {
    recipes: [],
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes(state, action: PayloadAction<Recipe[]>) {
            state.recipes = action.payload;
        },
    },
});

export const { setRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
