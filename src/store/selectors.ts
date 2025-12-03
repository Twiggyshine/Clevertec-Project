import { createSelector } from '@reduxjs/toolkit';

import { RootState } from './configure-store';

const selectRecipes = (state: RootState) => state.recipes.recipes;
const selectFilters = (state: RootState) => state.filters;

export const selectFilteredRecipes = createSelector(
    [selectRecipes, selectFilters],
    (recipes, filters) =>
        recipes.filter((recipe) => {
            // фильтр по категориям
            if (filters.categories.length > 0) {
                if (!recipe.category?.some((c) => filters.categories.includes(c))) {
                    return false;
                }
            }

            // фильтр по авторам
            if (filters.authors.length > 0) {
                if (!filters.authors.includes(recipe.recommendedBy?.name ?? '')) {
                    return false;
                }
            }

            // по мясу (subcategory)
            if (filters.meats.length > 0) {
                if (!recipe.subcategory?.some((s) => filters.meats.includes(s))) {
                    return false;
                }
            }

            // гарнир
            if (filters.sides.length > 0) {
                if (!recipe.subcategory?.some((s) => filters.sides.includes(s))) {
                    return false;
                }
            }

            // аллергены
            if (filters.excludeAllergens) {
                if (recipe.ingredients?.some((i) => filters.diets.includes(i.title))) {
                    return false;
                }
            }

            return true;
        }),
);
