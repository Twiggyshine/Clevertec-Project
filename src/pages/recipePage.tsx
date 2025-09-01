// src/components/RecipePage.tsx
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import CookingSection from '../features/recipes/components/RecipeDetails/CookingSection';
import { RootState } from '../store/configure-store';

const RecipePage = () => {
    const { pathname } = useLocation();
    const id = pathname.split('/').at(-1);
    const recipe = useSelector((state: RootState) =>
        state.recipes.recipes.find((r) => r.id === id),
    );
    console.log(recipe);
    return <CookingSection recipe={recipe} />;
};

export default RecipePage;
