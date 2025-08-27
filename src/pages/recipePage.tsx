// src/components/RecipePage.tsx
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from '../store/configure-store';
import CookingSection from './../features/recipes/components/RecipeDetails/RecipeDetails';

const RecipePage = () => {
    const { id } = useParams<{ id: string }>();
    const recipe = useSelector((state: RootState) =>
        state.recipes.recipes.find((r) => r.id === id),
    );

    return <CookingSection recipe={recipe} />;
};

export default RecipePage;
