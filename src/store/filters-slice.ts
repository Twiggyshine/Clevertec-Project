import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
    categories: string[];
    authors: string[];
    meats: string[];
    sides: string[];
    excludeAllergens: boolean;
    diets: string[];
    applied: boolean;
}

const initialState: FiltersState = {
    categories: [],
    authors: [],
    meats: [],
    sides: [],
    excludeAllergens: false,
    diets: [],
    applied: false,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
        setAuthors: (state, action: PayloadAction<string[]>) => {
            state.authors = action.payload;
        },
        setMeats: (state, action: PayloadAction<string[]>) => {
            state.meats = action.payload;
        },
        setSides: (state, action: PayloadAction<string[]>) => {
            state.sides = action.payload;
        },
        setExcludeAllergens: (state, action: PayloadAction<boolean>) => {
            state.excludeAllergens = action.payload;
        },
        setDiets: (state, action: PayloadAction<string[]>) => {
            state.diets = action.payload;
        },
        applyFilters(state) {
            state.applied = true;
        },
        resetFilters: () => initialState,
    },
});

export const {
    setCategories,
    setAuthors,
    setMeats,
    setSides,
    setExcludeAllergens,
    setDiets,
    resetFilters,
    applyFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
