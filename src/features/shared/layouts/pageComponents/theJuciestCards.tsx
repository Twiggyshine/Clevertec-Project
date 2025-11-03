import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

import recipesData from '~/data/recipiesData.json';

import { Recipe } from '../../../../features/recipes/components/RecipeDetails/CookingSectionProops';
import { RecipeCard } from '../../../recipes/components/recipeCard/recipeCard';
import { RecipeCardProps } from '../../../shared/sections/sectionJuciest/recipeCardProps';
import JuicyButton from '../../ui/buttonSelection/buttonSelection';
const getMostLikedRecipes = (recipes: Recipe[], minLikes = 100): RecipeCardProps[] =>
    recipes
        .filter((recipe) => recipe.likes > minLikes)
        .sort((a, b) => b.likes - a.likes)
        .map((recipe) => ({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            category: recipe.category,
            subcategory: recipe.subcategory,
            imgUrl: recipe.imgUrl,
            likesCount: recipe.likes,
            favCount: recipe.bookmarks,
        }));

const JuciestCards: React.FC = () => {
    const jucRecipes = getMostLikedRecipes(recipesData, 100);

    return (
        <Box mb='40px'>
            <Grid
                templateColumns={{ '3xl': 'repeat(2, 1fr)', '2xl': 'repeat(1, 1fr)' }}
                gap={8}
                mb='16px'
            >
                {jucRecipes.map((recipe) => (
                    <GridItem key={recipe.id}>
                        <RecipeCard {...recipe} />
                    </GridItem>
                ))}
            </Grid>

            <Flex justifyContent='center'>
                <JuicyButton icon={null}>Загрузить ещё</JuicyButton>
            </Flex>
        </Box>
    );
};

export default JuciestCards;
