import { Box, Heading } from '@chakra-ui/react';

import NavPanel from '../components/nav/NavPanel';
import CulinaryVlogsSection from '../components/sectionCookingVlogs/sectionCookingVlogs';
import JuicyRecipesSection from '../components/sectionJuciest/sectionJuciest';
import RecipesGrid from '../components/sectionNewRecipies/FlexContainer';
import VeganKitchenSection from '../components/sectionVeganCuisine/sectionVeganCuisine';

const HomePage = () => (
    <Box pl={6} pr={{ base: 6, lg: 0 }} maxW={{ '3xl': '1360px', lg: '880px' }}>
        <NavPanel />
        <Heading fontWeight={500} fontSize={{ '3xl': '48px', '2xl': '36px', sm: '24px' }} mb={8}>
            Новые рецепты
        </Heading>
        <RecipesGrid />
        <JuicyRecipesSection />
        <CulinaryVlogsSection />
        <VeganKitchenSection />
    </Box>
);

export default HomePage;
