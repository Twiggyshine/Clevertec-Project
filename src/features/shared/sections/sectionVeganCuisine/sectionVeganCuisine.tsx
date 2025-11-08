import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
// const VeganKitchenSection = ({
//     headingText = 'Веганская кухня',
//     descriptionText = 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда',
//     firstInputText = 'Стейк для вегетарианцев',
//     secondInputText = 'Котлеты из гречки и фасоли',
//     thirdInputText = 'Сырный суп с лапшой и брокколи',
//     firstInputIcon = <img src='../../../public/menuIcons/second dish.svg' alt='search' />,
//     secondInputIcon = <img src='../../../public/menuIcons/second dish.svg' alt='search' />,
//     thirdInputIcon = <img src='../../../public/menuIcons/first dish.svg' alt='search' />,
//     recipes = recipesData.filter((recipe) => recipe.id === '9' || recipe.id === '2'),
// }) => (
//     <Box mb={{ sm: '100px', lg: '16px' }}>
//         <Grid
//             templateColumns={{
//                 xl: '1fr 1fr 3fr',
//                 sm: '1fr',
//             }}
//             gap='24px'
//             alignItems='center'
//             mb='24px'
//         >
//             <Heading
//                 as='h1'
//                 fontSize={{ '2xl': '48px', md: '36px', sm: '24px' }}
//                 fontWeight='500'
//                 gridColumn={{ sm: '1 / 3', md: '1 / 2' }}
//             >
//                 {headingText}
//             </Heading>
//             <Text
//                 fontSize='16px'
//                 fontWeight='500'
//                 color='rgba(0, 0, 0, 0.64)'
//                 lineHeight='150%'
//                 gridColumn={{ '3xl': '3 / 4', xl: '4 / 4' }}
//                 mb={{ sm: '16px', xl: '0px' }}
//             >
//                 {descriptionText}
//             </Text>
//         </Grid>
//         <SimpleGrid
//             templateColumns={{
//                 '3xl': '1fr 1fr 2fr',
//                 md: '1fr 1fr 1fr',
//             }}
//             gap={{ '3xl': '24px', '2xl': '16px', sm: '12px' }}
//         >
//             {recipes.map((recipe) => (
//                 <SliderCard
//                     key={recipe.id}
//                     title={recipe.title}
//                     description={recipe.description}
//                     category={recipe.category}
//                     imgUrl={recipe.imgUrl}
//                     bookmarks={recipe.bookmarks}
//                     likes={recipe.likes}
//                     alwaysShowBadge={true}
//                     border='1px solid #E6E6E6'
//                     borderRadius='8px'
//                     badgeColor='#ffffd3'
//                     p={{ '3xl': '24px 24px 20px 24px', md: '16px', sm: '12px' }}
//                 />
//             ))}
//             <Flex direction='column' gap='12px'>
//                 <CustomInput text={firstInputText} icon={firstInputIcon} />
//                 <CustomInput text={secondInputText} icon={secondInputIcon} />
//                 <CustomInput text={thirdInputText} icon={thirdInputIcon} />
//             </Flex>
//         </SimpleGrid>
//     </Box>
// );
// export default VeganKitchenSection;
import { useEffect, useMemo, useState } from 'react';

import recipesData from '~/data/recipiesData.json';
import { SliderCard } from '~/features/recipes/components/sliderCard/SliderCard';

import { CustomInput } from './CookingElement';

const availableCategories = ['vegan', 'second-dish', 'first-dish', 'soups', 'desserts'];

const categoryHeadings: Record<string, string> = {
    vegan: 'Веганская кухня',
    'second-dish': 'Вторые блюда',
    'first-dish': 'Первые блюда',
    desserts: 'Десерты',
};

const categoryDescriptions: Record<string, string> = {
    vegan: 'Вкусные рецепты без продуктов животного происхождения',
    'second-dish': 'Горячие и сытные блюда на каждый день',
    'first-dish': 'Супы и бульоны на любой вкус',
    desserts: 'Сладкие рецепты для удовольствия',
};

const RandomKitchenSection = () => {
    const [category, setCategory] = useState<string>('');

    // ✅ Выбираем категорию рандомно при загрузке
    useEffect(() => {
        const random = Math.floor(Math.random() * availableCategories.length);
        setCategory(availableCategories[random]);
    }, []);

    const filteredRecipes = useMemo(() => {
        if (!category) return [];
        return recipesData.filter((r) => r.category.includes(category)).slice(0, 2);
    }, [category]);

    // ✅ Рандом для CustomInput
    const randomInputs = useMemo(() => {
        const categoryRecipes = recipesData.filter((r) => r.category.includes(category));

        return [...categoryRecipes].sort(() => Math.random() - 0.5).slice(0, 3); // ✅ именно 3
    }, [category]);

    if (!category) return null; // пока грузится категория

    return (
        <Box mb='100px'>
            <Heading fontSize='48px' fontWeight='500'>
                {categoryHeadings[category]}
            </Heading>

            <Text color='rgba(0,0,0,.64)' mb='24px'>
                {categoryDescriptions[category]}
            </Text>

            <SimpleGrid columns={{ md: 3 }} gap='16px'>
                {filteredRecipes.map((recipe) => (
                    <SliderCard key={recipe.id} {...recipe} />
                ))}

                <Flex direction='column' gap='12px'>
                    {randomInputs.map((recipe) => (
                        <CustomInput key={recipe.id} text={recipe.title} />
                    ))}
                </Flex>
            </SimpleGrid>
        </Box>
    );
};

export default RandomKitchenSection;
