import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    IconButton,
    Image,
    Text,
} from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '../../assets/customIcon/CustomIcon';
import recipesData from '../../data/recipes-data.json';
import RecommendsBadge from '../badgeRecom/badgeRecom';
import JuicyButton from '../buttonSelection/buttonSelection';
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

const recommendedRecipeIds: Record<number, { name: string; avatarSrc: string }> = {
    6: { name: 'Елена Высоцкая', avatarSrc: './../../../public/icons/Avatar1.svg' },
    7: { name: 'Alex Cook', avatarSrc: './../../../public/icons/Avatar2.svg' },
};
const JuicyRecipesSection = () => {
    const featuredRecipes = recipesData.theJuciest;

    return (
        <Box mb='40px'>
            <Flex justify='space-between' align='center'>
                <Heading as='h1' fontWeight={500} fontSize='48px' mb={8}>
                    Самое сочное
                </Heading>
                <JuicyButton />
            </Flex>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                {featuredRecipes.map((recipe: RecipeCardProps) => (
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
                                    src={`../../../public/recipies/${recipe.id}.jpg`}
                                    alt={recipe.title}
                                    objectFit='cover'
                                    h='244px'
                                    w='346px'
                                />
                                {recommendedRecipeIds[recipe.id] && (
                                    <Box position='absolute' bottom='4' left='4'>
                                        <RecommendsBadge
                                            name={recommendedRecipeIds[recipe.id].name}
                                            avatarSrc={recommendedRecipeIds[recipe.id].avatarSrc}
                                        />
                                    </Box>
                                )}
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

                                <Flex gap='8px' mt='auto' justifyContent='flex-end'>
                                    <Button
                                        variant='outline'
                                        size='sm'
                                        leftIcon={<CustomHeartIcon />}
                                    >
                                        Сохранить
                                    </Button>
                                    <Button
                                        bg='black'
                                        color='white'
                                        size='sm'
                                        _hover={{ bg: 'gray.700' }}
                                    >
                                        Готовить
                                    </Button>
                                </Flex>
                            </Box>
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default JuicyRecipesSection;
