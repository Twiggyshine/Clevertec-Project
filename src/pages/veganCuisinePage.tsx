import { VStack } from '@chakra-ui/react';

import { VeganMenu } from '../components/menuVeganCuisinePage/MenuVegan';
import NavPanel from '../components/nav/NavPanel';
import VegetarianCuisineCards from '../components/pageComponents/veganCuisineCards';
import VeganKitchenSection from '../components/sectionVeganCuisine/sectionVeganCuisine';
import recipesData from '../data/recipes-data.json';

function veganCuisinePage() {
    return (
        <VStack w='100%' p={{ xl: '0 24px', base: '0 20px' }} justifyContent='center'>
            <NavPanel
                headingText='Веганская кухня'
                subHeadingText='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
            <VeganMenu />
            <VegetarianCuisineCards />
            <VeganKitchenSection
                headingText='Десерты, выпечка'
                descriptionText='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
                firstInputText='Домашние сырные палочки'
                secondInputText='Панкейки'
                thirdInputText='Воздушное банановое печенье на сковороде'
                recipes={[
                    ...recipesData.VeganCuisine.filter((recipe) => recipe.id === 9),
                    ...recipesData.newRecipies.filter((recipe) => recipe.id === 2),
                ]}
                firstInputIcon={<img src='../../public/menuIcons/children.svg' alt='new icon' />}
                secondInputIcon={<img src='../../public/menuIcons/national.svg' alt='new icon' />}
                thirdInputIcon={<img src='../../public/menuIcons/vegan.svg' alt='new icon' />}
            />
        </VStack>
    );
}

export default veganCuisinePage;
