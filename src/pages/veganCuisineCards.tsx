import { Box, Flex, Grid, GridItem, Heading, IconButton, Image, Text } from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '../assets/customIcon/CustomIcon';
import ButtonsGroup from '../components/buttonsGroup.tsx/buttons';
import { BadgeWithIcon } from '../components/CustomBadge/customBadge';
import recipesData from '../data/recipes-data.json';

interface RecipeCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    likesCount?: number;
    favCount?: number;
    imgUrl: string;
}

const VegetarianCuisineCards = () => {
    const vegRecipes = recipesData.VegetarianCuisinePage;

    return (
        <Box mb='40px'>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                {vegRecipes.map((recipe: RecipeCardProps) => (
                    <GridItem key={recipe.id}>
                        <Flex
                            borderWidth='1px'
                            borderColor='gray.200'
                            borderRadius='lg'
                            overflow='hidden'
                            h='100%'
                            transition='all 0.2s ease-in-out'
                        >
                            {/* Блок с изображением */}
                            <Box position='relative'>
                                <Image
                                    src={`../../public/recipies/${recipe.id}.jpg`}
                                    alt={recipe.title}
                                    objectFit='cover'
                                    h='244px'
                                    w='346px'
                                />
                            </Box>

                            {/* Блок с текстом и кнопками */}
                            <Box flex='1' p='20px 24px' display='flex' flexDirection='column'>
                                <Flex justify='space-between' align='flex-start' mb='24px'>
                                    <BadgeWithIcon
                                        category={recipe.category}
                                        imgUrl={recipe.imgUrl}
                                    />

                                    <Flex align='center' gap='8px'>
                                        {recipe.likesCount !== undefined &&
                                            recipe.likesCount > 0 && (
                                                <Flex align='center'>
                                                    <IconButton
                                                        aria-label='Лайк'
                                                        icon={<CustomHeartIcon />}
                                                        variant='ghost'
                                                        isRound
                                                        size='sm'
                                                    />
                                                    <Text
                                                        fontSize='sm'
                                                        color='#2db100'
                                                        fontWeight='600'
                                                    >
                                                        {recipe.likesCount}
                                                    </Text>
                                                </Flex>
                                            )}

                                        {recipe.favCount !== undefined && recipe.favCount > 0 && (
                                            <Flex align='center'>
                                                <IconButton
                                                    aria-label='Смайлик'
                                                    icon={<CustomSmileIcon />}
                                                    variant='ghost'
                                                    isRound
                                                    size='sm'
                                                />
                                                <Text
                                                    fontSize='sm'
                                                    color='#2db100'
                                                    fontWeight='600'
                                                >
                                                    {recipe.favCount}
                                                </Text>
                                            </Flex>
                                        )}
                                    </Flex>
                                </Flex>
                                <Box>
                                    <Heading
                                        as='h3'
                                        fontSize='20px'
                                        mb='8px'
                                        color='#000'
                                        fontWeight='500'
                                        noOfLines={1}
                                    >
                                        {recipe.title}
                                    </Heading>

                                    <Text
                                        color='#000'
                                        mb='24px'
                                        fontSize='14px'
                                        lineHeight='143%'
                                        noOfLines={3}
                                    >
                                        {recipe.description}
                                    </Text>
                                </Box>

                                <ButtonsGroup />
                            </Box>
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default VegetarianCuisineCards;
