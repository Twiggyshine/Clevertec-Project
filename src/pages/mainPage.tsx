import { Heading, VStack } from '@chakra-ui/react';

import NavPanel from '../components/nav/NavPanel';
import CulinaryVlogsSection from '../components/sectionCookingVlogs/sectionCookingVlogs';
import JuicyRecipesSection from '../components/sectionJuciest/sectionJuciest';
import RecipesGrid from '../components/sectionNewRecipies/FlexContainer';
import VeganKitchenSection from '../components/sectionVeganCuisine/sectionVeganCuisine';

const HomePage = () => (
    <VStack w='100%' p='0 24px' justifyContent='center'>
        <NavPanel />
        <Heading
            fontWeight={500}
            fontSize={{ '3xl': '48px', '2xl': '36px', sm: '24px' }}
            mb={8}
            alignSelf='flex-start'
        >
            Новые рецепты
        </Heading>
        <RecipesGrid />
        <JuicyRecipesSection />
        <CulinaryVlogsSection />
        <VeganKitchenSection />
    </VStack>
);

export default HomePage;
