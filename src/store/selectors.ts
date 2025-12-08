import { createSelector } from '@reduxjs/toolkit';

import { Recipe } from '../features/recipes/components/RecipeDetails/CookingSectionProops';
import { RootState } from './configure-store';

export const selectFilteredRecipes = createSelector(
    [(state: RootState) => state.recipes.data, (state: RootState) => state.filters],
    (recipes: Recipe[], filters) => {
        if (!filters.applied) return recipes;

        return recipes.filter((r) => {
            const matchCategory =
                filters.categories.length === 0 ||
                r.category.some((c) => filters.categories.includes(c));

            const matchAuthor =
                filters.authors.length === 0 ||
                (r.recommendedBy?.name ? filters.authors.includes(r.recommendedBy.name) : false);

            const matchMeat =
                filters.meats.length === 0 ||
                filters.meats.some((meat) => r.ingredients.some((i) => i.title.includes(meat)));

            const matchSide =
                filters.sides.length === 0 ||
                filters.sides.some((side) => r.subcategory.includes(side));

            return matchCategory && matchAuthor && matchMeat && matchSide;
        });
    },
);
