import { Box, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import recipesData from '../../data/recipes-data.json';
import { CustomCard } from '../customCard/customCard';
import { CustomInput } from '../sectionVeganCuisine/CookingElement';

const VeganKitchenSection = ({
    headingText = 'Веганская кухня',
    descriptionText = 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда',
    firstInputText = 'Стейк для вегетарианцев',
    secondInputText = 'Котлеты из гречки и фасоли',
    thirdInputText = 'Сырный суп с лапшой и брокколи',
    firstInputIcon = <img src='../../../public/menuIcons/second dish.svg' alt='search' />,
    secondInputIcon = <img src='../../../public/menuIcons/second dish.svg' alt='search' />,
    thirdInputIcon = <img src='../../../public/menuIcons/first dish.svg' alt='search' />,
    recipes = [
        ...recipesData.VeganCuisine.filter((recipe) => recipe.id === 9),
        ...recipesData.newRecipies.filter((recipe) => recipe.id === 2),
    ],
}) => (
    <Box mb={{ sm: '100px', lg: '16px' }}>
        <Grid
            templateColumns={{
                xl: '1fr 1fr 3fr',
                sm: '1fr',
            }}
            gap='24px'
            alignItems='center'
            mb='24px'
        >
            <Heading
                as='h1'
                fontSize={{ '2xl': '48px', md: '36px', sm: '24px' }}
                fontWeight='500'
                gridColumn={{ sm: '1 / 3', md: '1 / 2' }}
            >
                {headingText}
            </Heading>

            <Text
                fontSize='16px'
                fontWeight='500'
                color='rgba(0, 0, 0, 0.64)'
                lineHeight='150%'
                gridColumn={{ '3xl': '3 / 4', xl: '4 / 4' }}
                mb={{ sm: '16px', xl: '0px' }}
            >
                {descriptionText}
            </Text>
        </Grid>

        <SimpleGrid
            templateColumns={{
                '3xl': '1fr 1fr 2fr',
                md: '1fr 1fr 1fr',
            }}
            gap={{ '3xl': '24px', '2xl': '16px', sm: '12px' }}
        >
            {recipes.map((recipe) => (
                <CustomCard
                    key={recipe.id}
                    title={recipe.title}
                    description={recipe.description}
                    category={recipe.category}
                    imgUrl={recipe.imgUrl}
                    likesCount={recipe.likesCount}
                    favCount={recipe.favCount}
                    forceShowBadge={false}
                    border='1px solid #E6E6E6'
                    borderRadius='8px'
                    badgeColor='#ffffd3'
                    p={{ '3xl': '24px 24px 20px 24px', md: '16px', sm: '12px' }}
                />
            ))}

            <Flex direction='column' gap='12px'>
                <CustomInput text={firstInputText} icon={firstInputIcon} />
                <CustomInput text={secondInputText} icon={secondInputIcon} />
                <CustomInput text={thirdInputText} icon={thirdInputIcon} />
            </Flex>
        </SimpleGrid>
    </Box>
);

export default VeganKitchenSection;
