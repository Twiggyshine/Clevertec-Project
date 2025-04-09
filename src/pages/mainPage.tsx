import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Heading, IconButton } from '@chakra-ui/react';

import RecipesGrid from '../components/recipeCard/GridContainer';

function HomePage() {
    return (
        <Box pl={6} position='relative'>
            <Heading as='h1' fontWeight={500} fontSize='48px' lineHeight='100%' mb={8}>
                Новые рецепты
            </Heading>

            {/* Контейнер для карусели с абсолютно позиционированными кнопками */}
            <Box position='relative'>
                {/* Кнопка "назад" - слева */}
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
                    _hover={{
                        bg: 'black',
                        transform: 'translateY(-50%) scale(1.05)',
                    }}
                />

                {/* Основной контент - грид с рецептами */}
                <Box>
                    <RecipesGrid />
                </Box>

                {/* Кнопка "вперед" - справа */}
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
                    _hover={{
                        bg: 'blackAlpha.800',
                        transform: 'translateY(-50%) scale(1.05)',
                    }}
                />
            </Box>
        </Box>
    );
}

export default HomePage;
