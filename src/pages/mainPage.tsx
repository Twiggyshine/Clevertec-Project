import { Heading, VStack } from '@chakra-ui/react';

import NavPanel from '../features/shared/layouts/nav/NavPanel';
import CulinaryVlogsSection from '../features/shared/sections/sectionCookingVlogs/sectionCookingVlogs';
import JuicyRecipesSection from '../features/shared/sections/sectionJuciest/sectionJuciest';
import RecipesSlider from '../features/shared/sections/sectionNewRecipies/Slider';
import VeganKitchenSection from '../features/shared/sections/sectionVeganCuisine/sectionVeganCuisine';

const HomePage = () => (
    <VStack w='100%' p={{ xl: '0 24px', base: '0 20px' }} justifyContent='center'>
        <NavPanel />
        <Heading
            fontWeight='500'
            fontSize={{ '2xl': '48px', md: '36px', sm: '24px' }}
            mb={8}
            alignSelf='flex-start'
        >
            Новые рецепты
        </Heading>
        <RecipesSlider />
        <JuicyRecipesSection />
        <CulinaryVlogsSection />
        <VeganKitchenSection />
    </VStack>
);

export default HomePage;
