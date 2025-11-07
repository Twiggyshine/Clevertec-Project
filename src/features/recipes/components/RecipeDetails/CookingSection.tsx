import { Box, VStack } from '@chakra-ui/react';

import type { CategoryPath } from '../../../../utils/categoryHelpers';
import RecipesSlider from '../../../shared/sections/sectionNewRecipies/Slider';
import CookingSteps from '../cookingSteps/cookingSteps';
import IngredientsTable from '../IngredientsTable/ingridTable';
import Banner from './../AutorsBanner/banner';
import RecipeHeader from './CookingRecipeHeader';
import { Recipe as RecipeType } from './CookingSectionProops';
import SectionCalories from './sectionCal/sectionCalories';

const CookingSection = ({ recipe }: { recipe: RecipeType }) => {
    if (!recipe) return null;
    const {
        title,
        description,
        imgUrl,
        category,
        likes,
        bookmarks,
        nutritionValue,
        ingredients,
        steps,
    } = recipe;

    return (
        <Box mb='40px' mt='56px'>
            <RecipeHeader
                title={title}
                description={description}
                image={imgUrl}
                category={category as CategoryPath[]}
                likesCount={likes}
                favCount={bookmarks}
            />

            <VStack w='100%' maxW='668px' mx='auto' spacing='40px'>
                <SectionCalories nutrition={nutritionValue} />

                <Box w='100%'>
                    <IngredientsTable ingredients={ingredients} />
                </Box>
                <CookingSteps steps={steps} />
                <Banner />
            </VStack>
            <RecipesSlider />
        </Box>
    );
};

export default CookingSection;
