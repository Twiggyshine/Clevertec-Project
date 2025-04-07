import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import { useState } from 'react';

interface CarouselProps {
    slides: JSX.Element[];
}

const RecipeCarousel: React.FC<CarouselProps> = ({ slides }) => {
    const CARD_WIDTH = 322;
    const GAP = 24;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 > slides.length - 4 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? slides.length - 4 : prevIndex - 1));
    };

    return (
        <Box position='relative' width='full' py={4}>
            <Flex width='full' position='relative'>
                {/* Кнопка "назад" - слева от слайдов */}
                <IconButton
                    aria-label='Предыдущий слайд'
                    icon={<ChevronLeftIcon boxSize={6} color='white' />}
                    position='absolute'
                    left={`-${CARD_WIDTH / 5.5}px`} // Выступает за пределы слайдера
                    top='50%'
                    transform='translateY(-50%)'
                    onClick={prevSlide}
                    borderRadius='4px' // Квадратные с небольшим скруглением
                    size='md'
                    bg='black'
                    colorScheme='blackAlpha'
                    zIndex={1}
                    _hover={{
                        bg: 'black',
                        transform: 'translateY(-50%) scale(1.05)',
                    }}
                    transition='all 0.2s ease'
                />

                <Flex gap={`${GAP}px`} width='full' justifyContent='center'>
                    {slides.slice(currentIndex, currentIndex + 4).map((slide, index) => (
                        <Box key={index} flexShrink={0} width={`${CARD_WIDTH}px`}>
                            {slide}
                        </Box>
                    ))}
                </Flex>

                {/* Кнопка "вперед" - справа от слайдов */}
                <IconButton
                    aria-label='Следующий слайд'
                    icon={<ChevronRightIcon boxSize={6} color='white' />}
                    position='absolute'
                    right={`-${CARD_WIDTH / 8}px`}
                    top='50%'
                    transform='translateY(-50%)'
                    onClick={nextSlide}
                    borderRadius='4px'
                    size='md'
                    bg='black'
                    colorScheme='blackAlpha'
                    zIndex={1}
                    _hover={{
                        bg: 'blackAlpha.800',
                        transform: 'translateY(-50%) scale(1.05)',
                    }}
                    transition='all 0.2s ease'
                />
            </Flex>
        </Box>
    );
};

function HomePage() {
    const recipeSlides = Array(8)
        .fill(0)
        .map((_, i) => (
            <Box
                key={i}
                width='322px'
                height='414px'
                border='1px solid rgba(0, 0, 0, 0.08)'
                borderRadius='8px'
                p={4}
                display='flex'
                alignItems='center'
                justifyContent='center'
                bg='white'
                boxShadow='sm'
            >
                Рецепт {i + 1}
            </Box>
        ));

    return (
        <Box pl={6} position='relative' maxW='container.xl' mx='auto'>
            <Heading as='h1' fontWeight={500} fontSize='48px' lineHeight='100%' mb={8}>
                Новые рецепты
            </Heading>
            <RecipeCarousel slides={recipeSlides} />
        </Box>
    );
}

export default HomePage;
