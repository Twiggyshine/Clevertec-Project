import { Box, Flex } from '@chakra-ui/react';

import Aside from '~/components/aside/Aside';

import Header from '../components/header/Header';
import NavPanel from '../components/nav/NavPanel';
import VeganKitchenSection from '../components/sectionVeganCuisine/sectionVeganCuisine';
import Sidebar from '../components/sidebar/Sidebar';
import recipesData from '../data/recipes-data.json';
import VegetarianCuisineCards from '../pages/veganCuisineCards';

function veganCuisinePage() {
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
                    <NavPanel
                        headingText='Веганская кухня'
                        subHeadingText='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                    />
                    <VegetarianCuisineCards />
                    <VeganKitchenSection
                        headingText='Десерты, выпечка'
                        descriptionText='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
                        firstInputText='Домашние сырные палочки'
                        secondInputText='Панкейки'
                        thirdInputText='Воздушное банановое печенье на сковороде'
                        recipes={[
                            ...recipesData.Deserts.filter((recipe) => recipe.id === 18),
                            ...recipesData.Deserts.filter((recipe) => recipe.id === 19),
                        ]}
                        firstInputIcon={
                            <img src='../../public/menuIcons/children.svg' alt='new icon' />
                        }
                        secondInputIcon={
                            <img src='../../public/menuIcons/national.svg' alt='new icon' />
                        }
                        thirdInputIcon={
                            <img src='../../public/menuIcons/vegan.svg' alt='new icon' />
                        }
                    />
                </Box>
                <Aside />
            </Flex>
        </Box>
    );
}

export default veganCuisinePage;
