import { ChevronLeftIcon, ChevronRightIcon, useBreakpointValue } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';

import recipesData from '../../data/recipes-data.json';
import RecipeCard from '../customCard/RecipeCardWithPic';

const RecipesGrid = () => {
    const newRecipes = recipesData.newRecipies;
    const hideIconButton = useBreakpointValue({ sm: false, '2xl': true });

    return (
        <Box width='100%'>
            <Box position='relative'>
                {hideIconButton && (
                    <IconButton
                        aria-label='Предыдущий слайд'
                        icon={<ChevronLeftIcon boxSize={6} color='white' />}
                        position='absolute'
                        left='-10px'
                        top='50%'
                        transform='translateY(-50%)'
                        borderRadius='4px'
                        size='md'
                        bg='black'
                        colorScheme='blackAlpha'
                        zIndex={1}
                        _hover={{ bg: 'black' }}
                    />
                )}

                <Flex overflowX='auto' gap={{ '3xl': '24px', sm: '12px' }}>
                    {newRecipes.map((recipe) => (
                        <Box key={recipe.id} flex='1 1 auto'>
                            <RecipeCard {...recipe} />
                        </Box>
                    ))}
                </Flex>
                {hideIconButton && (
                    <IconButton
                        aria-label='Следующий слайд'
                        icon={<ChevronRightIcon boxSize={6} color='white' />}
                        position='absolute'
                        right='-10px'
                        top='50%'
                        transform='translateY(-50%)'
                        borderRadius='4px'
                        size='md'
                        bg='black'
                        colorScheme='blackAlpha'
                        zIndex={1}
                        _hover={{ bg: 'black' }}
                    />
                )}
            </Box>
        </Box>
    );
};

export default RecipesGrid;
