import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

import recipesData from '~/data/recipes-data.json';

import JuicyButton from '../buttonSelection/buttonSelection';
import { RecipeCard } from '../sectionJuciest/recipeCard';

const VegetarianCuisineCards = () => {
    const vegRecipes = recipesData.VegetarianCuisinePage;

    return (
        <Box mb='40px'>
            <Grid
                templateColumns={{ '3xl': 'repeat(2, 1fr)', '2xl': 'repeat(1, 1fr)' }}
                gap={8}
                mb='16px'
            >
                {vegRecipes.map((recipe) => (
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

export default VegetarianCuisineCards;
