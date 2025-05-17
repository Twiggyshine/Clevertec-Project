import { VStack } from '@chakra-ui/react';

import NavPanel from '../components/nav/NavPanel';
import JuciestCards from '../components/pageComponents/theJuciestCards';
import VeganKitchenSection from '../components/sectionVeganCuisine/sectionVeganCuisine';
import recipesData from '../data/recipes-data.json';

const TheJuciestPage = () => (
    <VStack w='100%' p='0 24px' justifyContent='center'>
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
