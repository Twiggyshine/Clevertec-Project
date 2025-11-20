import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import recipesData from '~/data/recipiesData.json';

import { RecipeCard } from '../../../recipes/components/recipeCard/recipeCard';
import { RecipeCardProps } from '../../../shared/sections/sectionJuciest/recipeCardProps';
import JuicyButton from '../../ui/buttonSelection/buttonSelection';

interface RawRecipeData {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory?: string[];
    imgUrl: string;
    likes: number;
    bookmarks: number;
    recommendedBy?: {
        name: string;
        avatarSrc: string;
    };
}
// импортировать из RecipeCardProps
// Функция для получения самых популярных рецептов по лайкам
const getMostLikedRecipes = (
    recipes: RawRecipeData[],
    minLikes = 100,
    limit = 8,
): RecipeCardProps[] =>
    recipes
        .filter((recipe) => recipe.likes >= minLikes)
        .sort((a, b) => b.likes - a.likes)
        .slice(0, limit)
        .map((recipe) => ({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            category: recipe.category,
            subcategory: recipe.subcategory,
            imgUrl: recipe.imgUrl,
            likesCount: recipe.likes,
            favCount: recipe.bookmarks,
            recommendedBy: recipe.recommendedBy,
        }));

export const JuicyRecipesSection = () => {
    // Получаем самые популярные рецепты (8 штук с минимум 100 лайков)
    const featuredRecipes = getMostLikedRecipes(recipesData as RawRecipeData[], 100, 8);

    return (
        <Box mb='40px' w='100%'>
            <Flex justify='space-between' align='center'>
                <Heading
                    fontWeight={500}
                    fontSize={{ '2xl': '48px', md: '36px', sm: '24px' }}
                    mb={8}
                >
                    Самое сочное
                </Heading>
                <JuicyButton
                    test='juiciest-link'
                    display={{ lg: 'flex', base: 'none' }}
                    as={RouterLink}
                    to='/theJuciestPage'
                >
                    Вся подборка
                </JuicyButton>
            </Flex>

            <Grid
                templateColumns={{
                    '3xl': 'repeat(2, 1fr)',
                    xl: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    sm: 'repeat(1, 1fr)',
                }}
                gap={8}
                mb='12px'
            >
                {featuredRecipes.map((recipe) => (
                    <GridItem key={recipe.id}>
                        <RecipeCard {...recipe} />
                    </GridItem>
                ))}
            </Grid>
            <Flex justifyContent='center'>
                <JuicyButton
                    test='juiciest-link-mobile'
                    display={{ lg: 'none', base: 'flex' }}
                    as={RouterLink}
                    to='/theJuciestPage'
                >
                    Вся подборка
                </JuicyButton>
            </Flex>
        </Box>
    );
};

export default JuicyRecipesSection;
