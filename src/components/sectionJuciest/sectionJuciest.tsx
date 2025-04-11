import {
    Badge,
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

import * as ImgCards from '../../assets/menuIcons/index';
import recipesData from '../../data/recipes-data.json';
import RecommendsBadge from '../badgeRecom/badgeRecom';
import { CustomHeartIcon, CustomSmileIcon } from '../customIcon/CustomIcon';

interface RecipeCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    likesCount?: number;
    favCount?: number;
    imgUrl: string;
}
// const recommendedRecipeIds = [6,7];

const recommendedRecipeIds: Record<number, { name: string; avatarSrc: string }> = {
    6: { name: 'Елена Высоцкая', avatarSrc: './../../../public/icons/Avatar1.svg' },
    7: { name: 'Alex Cook', avatarSrc: './../../../public/icons/Avatar2.svg' },
};
const JuicyRecipesSection = () => {
    const featuredRecipes = recipesData.theJuciest;

    return (
        <Box>
            <Flex justify='space-between' align='center'>
                <Heading as='h1' fontWeight={500} fontSize='48px' mb={8}>
                    Самое сочное
                </Heading>
                <Button
                    w='197px'
                    h='48px'
                    p='0px 24px'
                    bg='#b1ff2e'
                    borderRadius='6px'
                    fontSize='18px'
                >
                    Вся подборка
                    <svg
                        width='14'
                        height='10'
                        viewBox='0 0 14 10'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ marginLeft: '8px' }}
                    >
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M0 5.00001C0 4.8674 0.0526784 4.74022 0.146447 4.64645C0.240215 4.55268 0.367392 4.50001 0.5 4.50001H12.293L9.146 1.35401C9.05211 1.26012 8.99937 1.13278 8.99937 1.00001C8.99937 0.86723 9.05211 0.739893 9.146 0.646006C9.23989 0.552119 9.36722 0.499374 9.5 0.499374C9.63278 0.499374 9.76011 0.552119 9.854 0.646006L13.854 4.64601C13.9006 4.69245 13.9375 4.74763 13.9627 4.80837C13.9879 4.86912 14.0009 4.93424 14.0009 5.00001C14.0009 5.06577 13.9879 5.13089 13.9627 5.19164C13.9375 5.25238 13.9006 5.30756 13.854 5.35401L9.854 9.35401C9.76011 9.44789 9.63278 9.50064 9.5 9.50064C9.36722 9.50064 9.23989 9.44789 9.146 9.35401C9.05211 9.26012 8.99937 9.13278 8.99937 9.00001C8.99937 8.86723 9.05211 8.73989 9.146 8.64601L12.293 5.50001H0.5C0.367392 5.50001 0.240215 5.44733 0.146447 5.35356C0.0526784 5.25979 0 5.13261 0 5.00001V5.00001Z'
                            fill='black'
                        />
                    </svg>
                </Button>
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
                                    <Badge
                                        backgroundColor='#ffffd3'
                                        fontSize='14px'
                                        borderRadius='4px'
                                        p='2px 8px'
                                        h='24px'
                                        textTransform='none'
                                        fontWeight='400'
                                    >
                                        <Flex align='center' gap='8px'>
                                            <Image
                                                src={
                                                    ImgCards[recipe.imgUrl as keyof typeof ImgCards]
                                                }
                                                alt={recipe.category}
                                                boxSize='16px'
                                            />

                                            <Text>{recipe.category}</Text>
                                        </Flex>
                                    </Badge>

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
                                <Box w='274px' h='100px'>
                                    <Heading
                                        as='h3'
                                        fontSize='20px'
                                        mb='8px'
                                        color='#000'
                                        fontWeight='500'
                                    >
                                        {recipe.title}
                                    </Heading>

                                    <Text
                                        color='#000'
                                        mb='24px'
                                        fontSize='14px'
                                        lineHeight='143%'
                                        noOfLines={{ lg: 1, sm: 3 }}
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
