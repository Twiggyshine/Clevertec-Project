import { Box, Heading } from '@chakra-ui/react';

import CulinaryVlogsSection from '../components/sectionCookingVlogs/sectionCookingVlogs';
import JuicyRecipesSection from '../components/sectionJuciest/sectionJuciest';
import RecipesGrid from '../components/sectionNewRecipies/FlexContainer';
import VeganKitchenSection from '../components/sectionVeganCuisine/sectionVeganCuisine';
import MainLayout from './mainLayout';

const HomePage = () => (
    <MainLayout>
        <Box pl={6}>
            <Heading as='h1' fontWeight={500} fontSize='48px' mb={8}>
                Новые рецепты
            </Heading>
            <RecipesGrid />
            <JuicyRecipesSection />
            <CulinaryVlogsSection />
            <VeganKitchenSection />
        </Box>
    </MainLayout>
);

export default HomePage;
