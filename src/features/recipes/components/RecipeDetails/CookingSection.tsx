import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';

import IngredientsTable from '../IngredientsTable/ingridTable';
import Banner from './../AutorsBanner/banner';
import RecipeHeader from './CookingRecipeHeader';
import { CookingSectionProps } from './CookingSectionProops';
import SectionCalories from './sectionCal/sectionCalories';

const CookingSection = ({ recipe }: CookingSectionProps) => {
    if (!recipe) return null;
    const { title, description, image, category, likes, bookmarks } = recipe;
    return (
        <Box mb='40px' mt='56px'>
            <RecipeHeader
                title={title}
                description={description}
                image={image}
                category={category}
                likesCount={likes}
                favCount={bookmarks}
            />
            <VStack w='668px' justifyContent='center'>
                <SectionCalories nutrition={recipe.nutritionValue} />
                <IngredientsTable />

                <Heading fontSize='48px' fontWeight='500' mb='20px' mt='40px'>
                    Шаги приготовления: {recipe.title}
                </Heading>
                <VStack spacing='20px' align='stretch'>
                    {recipe.steps.map((step) => (
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
                <Banner />
            </VStack>
        </Box>
    );
};

export default CookingSection;
