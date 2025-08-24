import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';

import RecipeHeader from './CookingRecipeHeader';
import { CookingSectionProps } from './RecipeDetailsProops';
import SectionCalories from './sectionCal/sectionCalories';

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
            <RecipeHeader
                title={title}
                description={description}
                image={image}
                category={category}
                likesCount={likesCount}
                favCount={favCount}
            />

            <SectionCalories nutrition={recipe.nutritionValue} />

            <Heading fontSize='48px' fontWeight='500' mb='20px' mt='40px'>
                Шаги приготовления: {title}
            </Heading>
            <VStack spacing='20px' align='stretch'>
                {steps.map((step) => (
                    <Flex
                        key={step.stepNumber}
                        gap='20px'
                        direction={{ base: 'column', md: 'row' }}
                        alignItems={{ base: 'center', md: 'flex-start' }}
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
            </VStack>
        </Box>
    );
};

export default CookingSection;
