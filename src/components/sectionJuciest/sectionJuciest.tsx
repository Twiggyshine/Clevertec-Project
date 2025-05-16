import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    IconButton,
    Image,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '../../assets/customIcon/CustomIcon';
import recipesData from '../../data/recipes-data.json';
import RecommendsBadge from '../badgeRecom/badgeRecom';
import JuicyButton from '../buttonSelection/buttonSelection';
import ButtonsGroup from '../buttonsGroup.tsx/buttons';
import { BadgeWithIcon } from '../customBadge/customBadge';
import { RecipeCardProps } from './recipeCardProps';

const recommendedRecipeIds: Record<number, { name: string; avatarSrc: string }> = {
    6: { name: 'Елена Высоцкая', avatarSrc: './../../../public/icons/Avatar1.svg' },
    7: { name: 'Alex Cook', avatarSrc: './../../../public/icons/Avatar2.svg' },
};
const JuicyRecipesSection = () => {
    const featuredRecipes = recipesData.theJuciest;

    const showDescription = useBreakpointValue({ '2xl': true, sm: false });
    const showJuicyButton = useBreakpointValue({ lg: true, sm: false });
    const hideJuicyButton = useBreakpointValue({ lg: false, sm: true });
    const hideRecommendsBadge = useBreakpointValue({ '2xl': true, sm: false });
    const showBadge = useBreakpointValue({ '2xl': true, '3xl': false });

    return (
        <Box mb='40px'>
            <Flex justify='space-between' align='center'>
                <Heading
                    fontWeight={500}
                    fontSize={{ '3xl': '48px', '2xl': '36px', sm: '24px' }}
                    mb={8}
                >
                    Самое сочное
                </Heading>
                {showJuicyButton && <JuicyButton>Вся подборка</JuicyButton>}
            </Flex>

            <Grid
                templateColumns={{
                    '3xl': 'repeat(2, 1fr)',
                    '2xl': 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                }}
                gap={8}
                mb='12px'
            >
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
                                    // h='244px'
                                    // w='346px'
                                />
                                {recommendedRecipeIds[recipe.id] && (
                                    <Box position='absolute' bottom='4' left='4'>
                                        {hideRecommendsBadge && (
                                            <RecommendsBadge
                                                name={recommendedRecipeIds[recipe.id].name}
                                                avatarSrc={
                                                    recommendedRecipeIds[recipe.id].avatarSrc
                                                }
                                            />
                                        )}
                                    </Box>
                                )}
                            </Box>

                            {/* Блок с текстом и кнопками */}
                            <Box
                                flex='1'
                                p={{ '2xl': '20px 24px', sm: '8px 8px 4px 8px;' }}
                                display='flex'
                                flexDirection='column'
                            >
                                <Flex justify='space-between' align='flex-start' mb='24px'>
                                    {showBadge && (
                                        <BadgeWithIcon
                                            category={recipe.category}
                                            imgUrl={recipe.imgUrl}
                                        />
                                    )}

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

                                    {showDescription && (
                                        <Text
                                            color='#000'
                                            mb='24px'
                                            fontSize='14px'
                                            lineHeight='143%'
                                            noOfLines={3}
                                        >
                                            {recipe.description}
                                        </Text>
                                    )}
                                </Box>

                                <ButtonsGroup />
                            </Box>
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
            <Flex justifyContent='center'>
                {hideJuicyButton && <JuicyButton>Вся подборка</JuicyButton>}
            </Flex>
        </Box>
    );
};

export default JuicyRecipesSection;
