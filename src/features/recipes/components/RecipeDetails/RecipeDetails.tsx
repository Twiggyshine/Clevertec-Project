// import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

// const cookingSection = () => (
//     <Box mb='40px'>
//         <Heading fontSize='48px' fontWeight='500'>
//             Шаги приготовления
//         </Heading>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 1</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе Зелёный лук
//                     нарезать на 1 см. кружочки. Лук и чеснок на мелкие кубики.{' '}
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 2</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе Мясо помыть,
//                     высушить, нарезать на полосочки и обжарить на масле. Посолить, поперчить и
//                     вынуть со сковороды.
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 3</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе Спагетти
//                     отварить в течение 10 минут в подсоленной воде.
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 4</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе В сковороде,
//                     на оставшемся жире поджарить лук до золотистого цвета, добавить чеснок и
//                     прожарить ещё около 1 минуты.
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 5</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе Всыпать
//                     шафран, корицу и муки, перемешать и коротко прожарить.
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 6</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе В сковороде,
//                     на оставшемся жире поджарить лук до золотистого цвета, добавить чеснок и
//                     прожарить ещё около 1 минуты.
//                 </Text>
//             </Box>
//         </Flex>
//         <Text>Всыпать шафран, корицу и муки, перемешать и коротко прожарить.</Text>
//         <Flex mb='20px'>
//             <Box>
//                 <Text>Шаг 7</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе Сливки смешать
//                     с бульоном, влить к луку и протушить на среднем огне около 10 минут.
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Box>
//                 <Text>Шаг 8</Text>
//                 <Text>
//                     Соус посолить, поперчить, вложить мясо, зелёный лук. Прогреть и осторожно
//                     смешать со спагетти. При подаче посыпать нарезанной петрушкой.
//                 </Text>
//             </Box>
//         </Flex>
//     </Box>
// );

// export default cookingSection;

import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '~/assets/customIcon/CustomIcon';

import { BadgeWithIcon } from '../../../shared/ui/customBadge/customBadge';
import RecipeActions from '../../../shared/ui/recipeActionBar/recipeActions';
import SectionCalories from '../sectionCal/sectionCalories';

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
            <Flex
                borderWidth='1px'
                borderColor='rgba(0, 0, 0, 0.08)'
                borderRadius='8px'
                overflow='hidden'
                h='100%'
                _hover={{
                    boxShadow:
                        '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                    background: '#fff',
                    transition: 'all 0.3s ease',
                }}
            >
                <Box position='relative' flexShrink={0}>
                    <Image
                        src={image}
                        alt={title}
                        objectFit='cover'
                        height='100%'
                        width='auto'
                        maxW={{ base: '158px', xl: '100%' }}
                    />

                    <Box position='absolute' top='10px' left='10px'>
                        <BadgeWithIcon category={category[0]} imgUrl={image} />
                    </Box>
                </Box>

                <Flex
                    flex='1'
                    p={{ '2xl': '20px 24px', sm: '8px 8px 4px 8px' }}
                    flexDirection='column'
                >
                    <Flex justify='space-between' align='flex-start'>
                        <BadgeWithIcon category={category[0]} imgUrl={image} />

                        <Flex align='center' gap='8px'>
                            <Flex align='center'>
                                <IconButton
                                    aria-label='Лайк'
                                    icon={<CustomHeartIcon width='12px' height='12px' />}
                                    variant='ghost'
                                    isRound
                                    size='sm'
                                />
                                <Text fontSize='sm' color='#2db100' fontWeight='600'>
                                    {likesCount}
                                </Text>
                            </Flex>

                            <Flex align='center'>
                                <IconButton
                                    aria-label='Смайлик'
                                    icon={<CustomSmileIcon width='12px' height='12px' />}
                                    variant='ghost'
                                    isRound
                                    size='sm'
                                />
                                <Text fontSize='sm' color='#2db100' fontWeight='600'>
                                    {favCount}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Box>
                        <Text
                            fontSize={{ '3xl': '24px', sm: '16px', xl: '18px' }}
                            mb='8px'
                            color='#000'
                            fontWeight='500'
                            noOfLines={{ xl: 1, sm: 2 }}
                        >
                            {title}
                        </Text>

                        <Text
                            color='#000'
                            mb='24px'
                            fontSize='14px'
                            lineHeight='143%'
                            noOfLines={3}
                        >
                            {description}
                        </Text>
                    </Box>
                    <RecipeActions />
                </Flex>
            </Flex>

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
        </Box>
    );
};

export default CookingSection;
