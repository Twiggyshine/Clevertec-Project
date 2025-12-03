import { VStack } from '@chakra-ui/react';

import NavPanel from '../features/shared/layouts/nav/NavPanel';
import VegetarianCuisineCards from '../features/shared/layouts/pageComponents/veganCuisineCards';
import RandomKitchenSection from '../features/shared/sections/sectionVeganCuisine/randomKitchenSection';
import { VeganMenu } from '../features/shared/ui/menuVeganCuisinePage/MenuVegan';

function veganCuisinePage() {
    return (
        <VStack w='100%' p={{ xl: '0 24px', base: '0 20px' }} justifyContent='center'>
            <NavPanel
                headingText='Веганская кухня'
                subHeadingText='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
            <VeganMenu />
            <VegetarianCuisineCards />
            <RandomKitchenSection />
        </VStack>
    );
}

export default veganCuisinePage;
