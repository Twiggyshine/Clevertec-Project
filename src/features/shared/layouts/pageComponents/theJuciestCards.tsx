import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

import recipesData from '~/data/recipes-data.json';

import { RecipeCard } from '../../../recipes/components/recipeCard/recipeCard';
import JuicyButton from '../../ui/buttonSelection/buttonSelection';

const JuciestCards = () => {
    const jucRecipes = [
        ...recipesData.theJuciest.filter((recipe) => [5, 6, 7, 8].includes(recipe.id)),
        ...recipesData.VegetarianCuisinePage.filter((recipe) =>
            [10, 11, 13, 14].includes(recipe.id),
        ),
    ];

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
