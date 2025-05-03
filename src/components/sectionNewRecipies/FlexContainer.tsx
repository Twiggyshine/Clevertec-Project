import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';

import recipesData from '../../data/recipes-data.json';
import RecipeCard from './RecipeCardWithPic';

const RecipesGrid = () => {
    const newRecipes = recipesData.newRecipies;

    return (
        // <Box  w={{ '3xl': '1360px', '2xl': '880px' }}>
        //     <Box position='relative'>
        //         <IconButton
        //             aria-label='Предыдущий слайд'
        //             icon={<ChevronLeftIcon boxSize={6} color='white' />}
        //             position='absolute'
        //             left='-10px'
        //             top='50%'
        //             transform='translateY(-50%)'
        //             borderRadius='4px'
        //             size='md'
        //             bg='black'
        //             colorScheme='blackAlpha'
        //             zIndex={1}
        //             _hover={{
        //                 bg: 'black',
        //                 transform: 'translateY(-50%) scale(1.05)',
        //             }}
        //         />

        //         <SimpleGrid
        //             display='inline-grid'
        //             gridAutoFlow='column'
        //             gap={{ '3xl': '24px', '2xl': '12px' }}
        //             width='100%'
        //             overflow='hidden'
        //         >
        //             {newRecipes.map((recipe) => (
        //                 <RecipeCard key={recipe.id} {...recipe} />
        //             ))}
        //         </SimpleGrid>
        //         <IconButton
        //             aria-label='Следующий слайд'
        //             icon={<ChevronRightIcon boxSize={6} color='white' />}
        //             position='absolute'
        //             right='-10px'
        //             top='50%'
        //             transform='translateY(-50%)'
        //             borderRadius='4px'
        //             size='md'
        //             bg='black'
        //             colorScheme='blackAlpha'
        //             zIndex={1}
        //             _hover={{
        //                 bg: 'blackAlpha.800',
        //                 transform: 'translateY(-50%) scale(1.05)',
        //             }}
        //         />
        //     </Box>
        // </Box>
        <Box w={{ '3xl': '1360px', '2xl': '880px' }} position='relative'>
            {/* Декоративные кнопки (без функционала прокрутки) */}
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

            <Flex overflow='auto' gap={{ '3xl': '24px', '2xl': '12px' }}>
                {newRecipes.map((recipe) => (
                    <Box key={recipe.id} flex='1 1 auto' minW={{ '3xl': '322px', '2xl': '277px' }}>
                        <RecipeCard {...recipe} />
                    </Box>
                ))}
            </Flex>

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
        </Box>
    );
};

export default RecipesGrid;
