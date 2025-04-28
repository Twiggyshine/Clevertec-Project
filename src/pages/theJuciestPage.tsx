import { Box, Flex } from '@chakra-ui/react';

import Aside from '~/components/aside/Aside';

import Header from '../components/header/Header';
import NavPanel from '../components/nav/NavPanel';
import VeganKitchenSection from '../components/sectionVeganCuisine/sectionVeganCuisine';
import Sidebar from '../components/sidebar/Sidebar';
import recipesData from '../data/recipes-data.json';
import JuciestCards from '../pages/theJuciestCards';

function TheJuciestPage() {
    return (
        <Box width='100%' display='flex' flexDirection='column' maxW='1920px'>
            <Header />

            <Flex flex='1' minH='0'>
                <Sidebar />
                <Box
                    flex='1'
                    display='flex'
                    flexDirection='column'
                    minH='0'
                    alignItems='center'
                    pl='24px'
                >
                    <NavPanel headingText='Самое сочное' />
                    <JuciestCards />
                    <VeganKitchenSection
                        headingText='Веганская кухня'
                        descriptionText='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                        firstInputText='Стейк для вегетаринцев'
                        secondInputText='Котлеты из гречки и фасоли'
                        thirdInputText='Сырный суп с лапшой и брокколи'
                        recipes={[
                            ...recipesData.Deserts.filter((recipe) => recipe.id === 18),
                            ...recipesData.Deserts.filter((recipe) => recipe.id === 19),
                        ]}
                        firstInputIcon={
                            <img src='../../public/menuIcons/second dish.svg' alt='new icon' />
                        }
                        secondInputIcon={
                            <img src='../../public/menuIcons/second dish.svg' alt='new icon' />
                        }
                        thirdInputIcon={
                            <img src='../../public/menuIcons/first dish.svg' alt='new icon' />
                        }
                    />
                </Box>
                <Aside />
            </Flex>
        </Box>
    );
}

export default TheJuciestPage;
