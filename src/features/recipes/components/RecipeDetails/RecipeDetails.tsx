import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import SectionCalories from '../sectionCal/sectionCalories';
import RecipeHeader from './CookingRecipeCard';

interface Ingredient {
    title: string;
    count: string;
    measureUnit: string;
}

interface NutritionValue {
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
}

interface CookingStep {
    stepNumber: number;
    description: string;
    image?: string;
}

interface Recipe {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    image: string;
    bookmarks: number;
    likes: number;
    date: string;
    time: string;
    portions: number;
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
    steps: CookingStep[];
    meat: string;
    side: string;
}

interface CookingSectionProps {
    recipe: Recipe;
}

const CookingSection = ({ recipe }: CookingSectionProps) => {
    const {
        title,
        description,
        image,
        category,
        likes: likesCount,
        bookmarks: favCount,
        steps,
    } = recipe;

    return (
        <Box mb='40px'>
            <Flex>
                <RecipeHeader
                    title={title}
                    description={description}
                    image={image}
                    category={category}
                    likesCount={likesCount}
                    favCount={favCount}
                />
                <SectionCalories nutrition={recipe.nutritionValue} />

                <Heading fontSize='48px' fontWeight='500' mb='20px'>
                    Шаги приготовления: {title}
                </Heading>

                {steps.map((step) => (
                    <Flex
                        key={step.stepNumber}
                        mb='20px'
                        gap='20px'
                        direction={{ base: 'column', md: 'row' }}
                    >
                        {step.image && (
                            <Image
                                src={step.image}
                                alt={`Шаг ${step.stepNumber}`}
                                boxSize={{ base: '100%', md: '200px' }}
                                objectFit='cover'
                                borderRadius='8px'
                                flexShrink={0}
                            />
                        )}
                        <Box flex='1'>
                            <Text fontWeight='bold' mb='8px' fontSize='lg'>
                                Шаг {step.stepNumber}
                            </Text>
                            <Text fontSize='md' lineHeight='tall'>
                                {step.description}
                            </Text>
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

export default CookingSection;
