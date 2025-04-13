import { SimpleGrid } from '@chakra-ui/react';

import recipesData from '../../data/recipes-data.json';
import RecipeCard from './RecipeCardWithPic';

const RecipesGrid = () => {
    // Берем только newRecipies рецепты
    const newRecipes = recipesData.newRecipies;

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap='24px'>
            {newRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
            ))}
        </SimpleGrid>
    );
};

export default RecipesGrid;
