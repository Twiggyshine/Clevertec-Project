import { VStack } from '@chakra-ui/react';

import recipesData from '../data/recipes-data.json';
import NavPanel from '../features/shared/layouts/nav/NavPanel';
import JuciestCards from '../features/shared/layouts/pageComponents/theJuciestCards';
import VeganKitchenSection from '../features/shared/sections/sectionVeganCuisine/sectionVeganCuisine';

const TheJuciestPage = () => (
    <VStack w='100%' p={{ xl: '0 24px', base: '0 20px' }} m='0 24px' justifyContent='center'>
        <NavPanel headingText='Самое сочное' />
        <JuciestCards />
        <VeganKitchenSection
            headingText='Веганская кухня'
            descriptionText='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.'
            firstInputText='Стейк для вегетарианцев'
            secondInputText='Котлеты из гречки и фасоли'
            thirdInputText='Сырный суп с лапшой и брокколи'
            recipes={[
                ...recipesData.Deserts.filter((recipe) => recipe.id === 18),
                ...recipesData.Deserts.filter((recipe) => recipe.id === 19),
            ]}
            firstInputIcon={<img src='../../public/menuIcons/second dish.svg' alt='new icon' />}
            secondInputIcon={<img src='../../public/menuIcons/second dish.svg' alt='new icon' />}
            thirdInputIcon={<img src='../../public/menuIcons/first dish.svg' alt='new icon' />}
        />
    </VStack>
);

export default TheJuciestPage;
