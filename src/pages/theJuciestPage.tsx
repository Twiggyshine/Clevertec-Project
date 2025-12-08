import { VStack } from '@chakra-ui/react';

import NavPanel from '../features/shared/layouts/nav/NavPanel';
import JuciestCards from '../features/shared/layouts/pageComponents/theJuciestCards';
import VeganKitchenSection from '../features/shared/sections/sectionRandom/randomKitchenSection';

const TheJuciestPage = () => (
    <VStack w='100%' p={{ xl: '0 24px', base: '0 20px' }} m='0 24px' justifyContent='center'>
        <NavPanel headingText='Самое сочное' />
        <JuciestCards />
        <VeganKitchenSection />
    </VStack>
);

export default TheJuciestPage;
