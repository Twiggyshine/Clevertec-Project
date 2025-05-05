import { Box, Heading } from '@chakra-ui/react';

import NavPanel from '../components/nav/NavPanel';
import CulinaryVlogsSection from '../components/sectionCookingVlogs/sectionCookingVlogs';
import JuicyRecipesSection from '../components/sectionJuciest/sectionJuciest';
import RecipesGrid from '../components/sectionNewRecipies/FlexContainer';
import VeganKitchenSection from '../components/sectionVeganCuisine/sectionVeganCuisine';

const HomePage = () => (
    <Box pl={6} maxW={{ '3xl': '1360px', lg: '880px' }}>
        <NavPanel />
        <Heading as='h1' fontWeight={500} fontSize='48px' mb={8}>
            Новые рецепты
        </Heading>
        <RecipesGrid />
        <JuicyRecipesSection />
        <CulinaryVlogsSection />
        <VeganKitchenSection />
    </Box>
);

export default HomePage;
