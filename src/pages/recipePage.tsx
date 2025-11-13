import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import CookingSection from '../features/recipes/components/RecipeDetails/CookingSection';
import { RootState } from '../store/configure-store';

const RecipePage = () => {
    const { category, subcategory, id } = useParams();

    const recipe = useSelector((state: RootState) =>
        state.recipes.recipes.find(
            (r) =>
                r.id === id &&
                category &&
                r.category.includes(category) &&
                subcategory &&
                r.subcategory.includes(subcategory),
        ),
    );

    return recipe ? <CookingSection recipe={recipe} /> : <Box>Recipe not found</Box>;
};

export default RecipePage;
