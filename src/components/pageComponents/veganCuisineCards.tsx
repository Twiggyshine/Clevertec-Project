import { Box, Flex, Grid, GridItem, IconButton, Image, Text, VStack } from '@chakra-ui/react';

import recipesData from '~/data/recipes-data.json';

import { CustomHeartIcon, CustomSmileIcon } from '../../assets/customIcon/CustomIcon';
import JuicyButton from '../buttonSelection/buttonSelection';
import ButtonsGroup from '../buttonsGroup.tsx/buttons';
import { BadgeWithIcon } from '../CustomBadge/customBadge';
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
            <Grid
                templateColumns={{ '3xl': 'repeat(2, 1fr)', '2xl': 'repeat(1, 1fr)' }}
                gap={8}
                mb='16px'
            >
                {vegRecipes.map((recipe: RecipeCardProps) => (
                    <GridItem key={recipe.id}>
                        <Flex
                            borderWidth='1px'
                            borderColor='border: 1px solid rgba(0, 0, 0, 0.08)'
                            borderRadius='8px'
                            overflow='hidden'
                            h='100%'
                        >
                            <VStack position='relative'>
                                <Image
                                    src={`../../public/recipies/${recipe.id}.jpg`}
                                    alt={recipe.title}
                                    objectFit='cover'
                                    // h='244px'
                                    // w='346px'
                                />
                            </VStack>

                            <Box flex='1' p='20px 24px' display='flex' flexDirection='column'>
                                <Flex justify='space-between' align='flex-start'>
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
                                                        icon={
                                                            <CustomHeartIcon
                                                                width='12px'
                                                                height='12px'
                                                            />
                                                        }
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
                                                    icon={
                                                        <CustomSmileIcon
                                                            width='12px'
                                                            height='12px'
                                                        />
                                                    }
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
                                    <Text
                                        fontSize={{ '3xl': '24px', sm: '16px', xl: '18px' }}
                                        mb='8px'
                                        color='#000'
                                        fontWeight='500'
                                        noOfLines={{ lg: 1, sm: 2 }}
                                    >
                                        {recipe.title}
                                    </Text>

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
            <Flex justifyContent='center'>
                <JuicyButton icon={null}>Загрузить ещё</JuicyButton>
            </Flex>
        </Box>
    );
};

export default VegetarianCuisineCards;
