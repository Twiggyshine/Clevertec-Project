// import { createSelector } from '@reduxjs/toolkit';

// import { Recipe } from '../features/recipes/components/RecipeDetails/CookingSectionProops';
// import { RootState } from './configure-store';

// export const selectFilteredRecipes = createSelector(
//     [(state: RootState) => state.recipes.data, (state: RootState) => state.filters],
//     (recipes: Recipe[], filters) => {
//         if (!filters.applied) return recipes;

//         return recipes.filter((recipe) => {
//             // Существующие проверки
//             const matchCategory =
//                 filters.categories.length === 0 ||
//                 recipe.category.some((c) => filters.categories.includes(c));

//             const matchAuthor =
//                 filters.authors.length === 0 ||
//                 (recipe.recommendedBy?.name
//                     ? filters.authors.includes(recipe.recommendedBy.name)
//                     : false);

//             const matchMeat =
//                 filters.meats.length === 0 ||
//                 filters.meats.some((meat) =>
//                     recipe.ingredients.some((i) => i.title.includes(meat)),
//                 );

//             const matchSide =
//                 filters.sides.length === 0 ||
//                 filters.sides.some((side) => recipe.subcategory.includes(side));

//             // НОВАЯ ЛОГИКА: ИСКЛЮЧЕНИЕ РЕЦЕПТОВ С ВЫБРАННЫМИ АЛЛЕРГЕНАМИ
//             const excludeAllergens = () => {
//                 // Если аллергены не выбраны - пропускаем все рецепты
//                 if (!filters.allergens || filters.allergens.length === 0) {
//                     return true;
//                 }

//                 // Проверяем каждый выбранный аллерген
//                 for (const allergen of filters.allergens) {
//                     // Ищем аллерген в названиях ингредиентов
//                     const hasAllergen = recipe.ingredients.some((ingredient) => {
//                         // Приводим к нижнему регистру для более точного сравнения
//                         const ingredientName = ingredient.title.toLowerCase();
//                         const allergenName = allergen.toLowerCase();

//                         // Проверяем точное совпадение или вхождение
//                         return (
//                             ingredientName.includes(allergenName) ||
//                             allergenName.includes(ingredientName)
//                         );
//                     });

//                     // Если нашли хотя бы один аллерген - исключаем рецепт
//                     if (hasAllergen) {
//                         return false;
//                     }
//                 }

//                 // Если ни один аллерген не найден - оставляем рецепт
//                 return true;
//             };

//             return matchCategory && matchAuthor && matchMeat && matchSide && excludeAllergens();
//         });
//     },
// );

import { createSelector } from '@reduxjs/toolkit';

import { Recipe } from '../features/recipes/components/RecipeDetails/CookingSectionProops';
import { RootState } from './configure-store';

const selectRecipes = (state: RootState) => state.recipes.data;
const selectExcludeAllergens = (state: RootState) => state.filters.excludeAllergens;
const selectAllergens = (state: RootState) => state.filters.allergens;

export const hasAllergen = (recipe: Recipe, allergens: string[]): boolean => {
    const normalized = allergens.map((a) => a.trim().toLowerCase()).filter(Boolean);

    return recipe.ingredients.some((ingredient) => {
        const title = ingredient.title.toLowerCase();
        return normalized.some((allergen) => title.includes(allergen));
    });
};

export const selectRecipesWithoutAllergens = createSelector(
    [selectRecipes, selectExcludeAllergens, selectAllergens],
    (recipes, excludeAllergens, allergens) =>
        !excludeAllergens || allergens.length === 0
            ? recipes
            : recipes.filter((recipe) => !hasAllergen(recipe, allergens)),
);

export const selectFilteredRecipes = createSelector(
    [selectRecipesWithoutAllergens, (state: RootState) => state.filters],
    (recipes, filters) => {
        if (!filters.applied) return recipes;

        return recipes.filter((recipe) => {
            const matchCategory =
                filters.categories.length === 0 ||
                recipe.category.some((c) => filters.categories.includes(c));

            const matchAuthor =
                filters.authors.length === 0 ||
                (recipe.recommendedBy?.name
                    ? filters.authors.includes(recipe.recommendedBy.name)
                    : false);

            const matchMeat =
                filters.meats.length === 0 ||
                filters.meats.some((meat) =>
                    recipe.ingredients.some((i) => i.title.includes(meat)),
                );

            const matchSide =
                filters.sides.length === 0 ||
                filters.sides.some((side) => recipe.subcategory.includes(side));

            return matchCategory && matchAuthor && matchMeat && matchSide;
        });
    },
);
