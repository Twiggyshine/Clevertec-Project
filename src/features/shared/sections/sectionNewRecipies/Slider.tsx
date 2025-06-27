import 'swiper/css';
import 'swiper/css/navigation';

import { useBreakpointValue } from '@chakra-ui/react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import recipesData from '~/data/recipes-data.json';
import RecipeCard from '~/features/recipes/components/sliderCard/SliderCardwithPic';

const RecipesSlider = () => {
    const newRecipes = recipesData.newRecipies;
    const isDesktop = useBreakpointValue({ base: false, xl: true });

    return (
        <Box width='100%'>
            <Box position='relative'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={12}
                    slidesPerView='auto'
                    loop={true}
                    touchEventsTarget={isDesktop ? 'container' : 'wrapper'}
                    allowTouchMove={!isDesktop}
                    navigation={
                        isDesktop
                            ? {
                                  nextEl: '.swiper-button-next',
                                  prevEl: '.swiper-button-prev',
                              }
                            : false
                    }
                >
                    {newRecipes.map((recipe) => (
                        <SwiperSlide key={recipe.id}>
                            <Flex
                                px={1}
                                height='100%'
                                flex='1 1 auto '
                                maxW={{ '3xl': '322px', '2xl': '277px', sm: '158px' }}
                            >
                                <RecipeCard {...recipe} />
                            </Flex>
                        </SwiperSlide>
                    ))}
                    <style>{`
                    .swiper-slide {
                width: auto !important; 
                height: auto;
                        }
                        .swiper-button-next,
                        .swiper-button-prev {
                            background: black;
                            color: white;
                            width: 40px;
                            height: 40px;
                            border-radius: 4px;
                            position: absolute;
                            top: 40%;  
                        }
                            .swiper-button-prev {
                                left: -10px; 
                        }
                                 .swiper-button-next {
                            right: -10px; 
                        }
                        .swiper-button-next:after,
                        .swiper-button-prev:after {
                            font-size: 20px;
                        }
                    `}</style>
                </Swiper>

                {isDesktop && (
                    <>
                        <IconButton className='swiper-button-prev' aria-label='Предыдущий слайд' />
                        <IconButton className='swiper-button-next' aria-label='Следующий слайд' />
                    </>
                )}
            </Box>
        </Box>
    );
};

export default RecipesSlider;
