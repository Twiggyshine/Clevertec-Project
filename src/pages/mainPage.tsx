import { Box, Flex, Heading } from '@chakra-ui/react';

import Aside from '~/components/aside/Aside';

import Header from '../components/header/Header';
import NavPanel from '../components/nav/NavPanel';
import CulinaryVlogsSection from '../components/sectionCookingVlogs/sectionCookingVlogs';
import JuicyRecipesSection from '../components/sectionJuciest/sectionJuciest';
import RecipesGrid from '../components/sectionNewRecipies/FlexContainer';
import VeganKitchenSection from '../components/sectionVeganCuisine/sectionVeganCuisine';
import Sidebar from '../components/sidebar/Sidebar';

function HomePage() {
    return (
        <Box as='main' width='100%' display='flex' flexDirection='column' maxW='1920px'>
            <Header />
            <Flex flex='1' minH='0'>
                <Sidebar />
                <Box flex='1' display='flex' flexDirection='column' minH='0'>
                    <NavPanel />
                    <Box flex='1'>
                        <Box pl={6}>
                            <Heading as='h1' fontWeight={500} fontSize='48px' mb={8}>
                                Новые рецепты
                            </Heading>

                            <RecipesGrid />

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
