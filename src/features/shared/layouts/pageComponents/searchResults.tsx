import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { useAppSelector } from '../../../../store/hooks';
import { selectSearchedRecipes } from '../../../../store/selectors';
import { RecipeCard } from '../../../recipes/components/recipeCard/recipeCard';

const SearchResults = () => {
    const recipes = useAppSelector(selectSearchedRecipes);
    const query = useAppSelector((state) => state.filters.search);

    return (
        <Box w='100%' mb='40px'>
            <Heading fontWeight='500' fontSize={{ '2xl': '48px', md: '36px', sm: '24px' }} mb={8}>
                Результаты поиска
            </Heading>

            {recipes.length === 0 ? (
                <Text color='rgba(0, 0, 0, 0.64)'>Ничего не найдено по запросу «{query}»</Text>
            ) : (
                <Grid
                    templateColumns={{
                        '3xl': 'repeat(2, 1fr)',
                        xl: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        sm: 'repeat(1, 1fr)',
                    }}
                    gap={8}
                >
                    {recipes.map((recipe) => (
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
            )}
        </Box>
    );
};

export default SearchResults;
