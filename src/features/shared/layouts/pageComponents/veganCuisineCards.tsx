import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

import recipesData from '~/data/recipiesData.json';

import { RecipeCard } from '../../../recipes/components/recipeCard/recipeCard';
import JuicyButton from '../../ui/buttonSelection/buttonSelection';

const VegetarianCuisineCards = () => {
    const vegRecipes = recipesData.filter(
        (recipe) => recipe.category.includes('vegan') || recipe.subcategory.includes('vegetables'),
    );

    const [visibleCount, setVisibleCount] = useState(8);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 8);
    };

    return (
        <Box mb='40px'>
            <Grid
                templateColumns={{
                    '3xl': 'repeat(2, 1fr)',
                    '2xl': 'repeat(1, 1fr)',
                }}
                gap={8}
                mb='16px'
            >
                {vegRecipes.slice(0, visibleCount).map((recipe) => (
                    <GridItem key={recipe.id}>
                        <RecipeCard
                            id={recipe.id}
                            title={recipe.title}
                            description={recipe.description}
                            category={recipe.category}
                            subcategory={recipe.subcategory}
                            imgUrl={recipe.imgUrl}
                            likesCount={recipe.likes}
                            favCount={recipe.bookmarks}
                            recommendedBy={recipe.recommendedBy}
                        />
                    </GridItem>
                ))}
            </Grid>

            {visibleCount < vegRecipes.length && (
                <Flex justifyContent='center'>
                    <JuicyButton icon={null} onClick={loadMore}>
                        Загрузить ещё
                    </JuicyButton>
                </Flex>
            )}
        </Box>
    );
};

export default VegetarianCuisineCards;
