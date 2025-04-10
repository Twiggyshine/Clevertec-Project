import { SimpleGrid } from '@chakra-ui/react';

import recipesData from '../../data/recipes-data.json';
import RecipeCard from './RecipeCard';

const RecipesGrid = () => {
    // Берем только veganCuisine рецепты
    const veganRecipes = recipesData.veganCuisine;

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap='24px'>
            {veganRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
            ))}
        </SimpleGrid>
    );
};

export default RecipesGrid;
