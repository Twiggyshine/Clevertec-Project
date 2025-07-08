import { Box, Flex, Text } from '@chakra-ui/react';

import CalElement from '../../../shared/ui/pageCountingElement/calElement';

interface NutritionValue {
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
}

interface SectionCaloriesProps {
    nutrition: NutritionValue;
}

const SectionCalories = ({ nutrition }: SectionCaloriesProps) => (
    <Box w='668px' h='176px' mb='40px'>
        <Text color='rgba(0, 0, 0, 0.8)' fontWeight='400' fontSize='14px' textAlign='start'>
            * Калорийность на 1 порцию
        </Text>
        <Flex gap='24px'>
            <CalElement
                topText='калорийность'
                mainText={nutrition.calories.toString()}
                bottomText='ккал'
            />
            <CalElement
                topText='белки'
                mainText={nutrition.proteins.toString()}
                bottomText='грамм'
            />
            <CalElement topText='жиры' mainText={nutrition.fats.toString()} bottomText='грамм' />
            <CalElement
                topText='углеводы'
                mainText={nutrition.carbohydrates.toString()}
                bottomText='грамм'
            />
        </Flex>
    </Box>
);

export default SectionCalories;
