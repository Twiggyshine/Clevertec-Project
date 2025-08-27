// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { ApplicationState } from './configure-store';
// export type AppState = typeof initialState;

// const initialState = {
//     isLoading: false,
//     error: '' as string | null,
// };
// export const appSlice = createSlice({
//     name: 'app',
//     initialState,
//     reducers: {
//         setAppError(state, { payload: error }: PayloadAction<string | null>) {
//             state.error = error;
//         },
//         setAppLoader(state, { payload: isLoading }: PayloadAction<boolean>) {
//             state.isLoading = isLoading;
//         },
//     },
// });
// export const userLoadingSelector = (state: ApplicationState) => state.app.isLoading;
// export const userErrorSelector = (state: ApplicationState) => state.app.error;

// export const { setAppError, setAppLoader } = appSlice.actions;
// export default appSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Ingredient {
    title: string;
    count: string;
    measureUnit: string;
}

interface Step {
    stepNumber: number;
    description: string;
    image?: string;
}

interface NutritionValue {
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
}

export interface Recipe {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string[];
    subcategory: string[];
    bookmarks: number;
    likes: number;
    date: string;
    time: string;
    portions: number;
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
    steps: Step[];
    meat?: string;
    side?: string;
}

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
