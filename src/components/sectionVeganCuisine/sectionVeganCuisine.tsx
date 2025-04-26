import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import recipesData from '../../data/recipes-data.json';
import { CustomCard } from '../customCard/customCard';
import { CustomInput } from '../sectionVeganCuisine/CookingElement';

const VeganKitchenSection = ({
    headingText = 'Веганская кухня',
    descriptionText = 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда',
    firstInputText = 'Стейк для вегетарианцев',
    secondInputText = 'Котлеты из гречки и фасоли',
    thirdInputText = 'Сырный суп с лапшой и брокколи',
}) => {
    const filteredRecipes = [
        ...recipesData.VeganCuisine.filter((recipe) => recipe.id === 9),
        ...recipesData.newRecipies.filter((recipe) => recipe.id === 2),
    ];

    return (
        <Box maxW='1360px'>
            <Flex justify='space-between' align='center' mb='24px'>
                <Heading as='h1' fontSize='48px' fontWeight='500'>
                    {headingText}
                </Heading>
                <Text
                    maxW='668px'
                    fontSize='16px'
                    fontWeight='500'
                    color='rgba(0, 0, 0, 0.64);'
                    lineHeight='150%;'
                    pl='24px'
                >
                    {descriptionText}
                </Text>
            </Flex>
            <SimpleGrid
                templateColumns={{
                    md: '1fr 1fr 2fr',
                }}
                gap='24px'
            >
                {filteredRecipes.map((recipe) => (
                    <CustomCard
                        key={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        category={recipe.category}
                        imgUrl={recipe.imgUrl}
                        likesCount={recipe.likesCount}
                        favCount={recipe.favCount}
                        p='24px 24px 20px 24px'
                        border='1px solid #E6E6E6'
                        borderRadius='8px'
                        badgeColor='#ffffd3'
                    />
                ))}
                <Flex direction='column' gap='12px'>
                    <CustomInput
                        text={firstInputText}
                        icon={<img src='../../../public/menuIcons/second dish.svg' alt='search' />}
                    />
                    <CustomInput
                        text={secondInputText}
                        icon={<img src='../../../public/menuIcons/second dish.svg' alt='search' />}
                    />
                    <CustomInput
                        text={thirdInputText}
                        icon={<img src='../../../public/menuIcons/first dish.svg' alt='search' />}
                    />
                </Flex>
            </SimpleGrid>
        </Box>
    );
};

export default VeganKitchenSection;
