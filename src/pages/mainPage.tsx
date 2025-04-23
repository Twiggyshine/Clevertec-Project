import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';

import Aside from '~/components/aside/Aside';

import Header from '../components/header/Header';
import NavPanel from '../components/nav/NavPanel';
import CulinaryVlogsSection from '../components/sectionCookingVlogs/sectionCookingVlogs';
import JuicyRecipesSection from '../components/sectionJuciest/sectionJuciest';
import RecipesGrid from '../components/sectionNewRecipies/GridContainer';
import VeganKitchenSection from '../components/sectionVeganCuisine/sectionVeganCuisine';
import Sidebar from '../components/sidebar/Sidebar';

function HomePage() {
    return (
        <Box width='100%' display='flex' flexDirection='column' maxW='1920px'>
            <Header />

            <Flex flex='1' minH='0'>
                <Sidebar />
                <Box flex='1' display='flex' flexDirection='column' minH='0'>
                    <NavPanel />
                    <Box flex='1'>
                        <Box pl={6} position='relative' maxW='1360px'>
                            <Heading as='h1' fontWeight={500} fontSize='48px' mb={8}>
                                Новые рецепты
                            </Heading>
                            <Box position='relative'>
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
                                <Box>
                                    <RecipesGrid />
                                </Box>
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

                            <JuicyRecipesSection />
                            <CulinaryVlogsSection />
                            <VeganKitchenSection />
                        </Box>
                    </Box>
                </Box>

                <Aside />
            </Flex>
        </Box>
    );
}

export default HomePage;
