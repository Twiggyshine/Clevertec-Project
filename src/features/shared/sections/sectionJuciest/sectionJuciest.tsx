import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import recipesData from '~/data/recipes-data.json';

import { RecipeCard } from '../../../recipes/components/recipeCard/recipeCard';
import JuicyButton from '../../ui/buttonSelection/buttonSelection';

export const JuicyRecipesSection = () => {
    const featuredRecipes = recipesData.theJuciest;

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
                <JuicyButton test='juiciest-link-mobile' display={{ lg: 'none', base: 'flex' }}>
                    Вся подборка
                </JuicyButton>
            </Flex>
        </Box>
    );
};
export default JuicyRecipesSection;
