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
import { BadgeWithIcon } from '../CustomBadge/customBadge';
import { RecipeCardProps } from './recipeCardProps';

const recommendedRecipeIds: Record<number, { name: string; avatarSrc: string }> = {
    6: { name: 'Елена Высоцкая', avatarSrc: './../../../public/icons/Avatar1.svg' },
    7: { name: 'Alex Cook', avatarSrc: './../../../public/icons/Avatar2.svg' },
};
const JuicyRecipesSection = () => {
    const featuredRecipes = recipesData.theJuciest;

    const showDescription = useBreakpointValue({ lg: true, sm: false });
    const showJuicyButton = useBreakpointValue({ lg: true, sm: false });
    const hideJuicyButton = useBreakpointValue({ lg: false, sm: true });
    const hideRecommendsBadge = useBreakpointValue({ xl: true, sm: false });
    const showBadge = useBreakpointValue({ xl: true, base: false });

    const hideBadge = useBreakpointValue({ xl: false, base: true });
    return (
        <Box mb='40px' w='100%'>
            <Flex justify='space-between' align='center'>
                <Heading
                    fontWeight={500}
                    fontSize={{ '2xl': '48px', md: '36px', sm: '24px' }}
                    mb={8}
                >
                    Самое сочное
                </Heading>
                {showJuicyButton && <JuicyButton>Вся подборка</JuicyButton>}
                <JuicyButton>Вся подборка</JuicyButton>
            </Flex>

            <Grid
                templateColumns={{
                    '3xl': 'repeat(2, 1fr)',
                    xl: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    sm: 'repeat(1, 1fr)',
                }}
                gap={8}
                mb='12px'
            >
                {featuredRecipes.map((recipe: RecipeCardProps) => (
                    <GridItem key={recipe.id}>
                        <Flex
                            borderWidth='1px'
                            borderColor='border: 1px solid rgba(0, 0, 0, 0.08);'
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
                            <Box position='relative'>
                                <Image
                                    src={`/recipies/${recipe.id}.jpg`}
                                    alt={recipe.title}
                                    objectFit='cover'
                                    height='100%'
                                    width='auto'
                                    maxW={{ base: '158px', xl: '100%' }}
                                />
                                {hideBadge && (
                                    <Box position='absolute' top='10px' left='10px'>
                                        <BadgeWithIcon
                                            category={recipe.category}
                                            imgUrl={recipe.imgUrl}
                                        />
                                    </Box>
                                )}
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

                            <Flex
                                flex='1'
                                p={{ '2xl': '20px 24px', sm: '8px 8px 4px 8px;' }}
                                flexDirection='column'
                            >
                                <Flex justify='space-between' align='flex-start'>
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
                                        noOfLines={{ xl: 1, sm: 2 }}
                                    >
                                        {recipe.title}
                                    </Text>

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
                            </Flex>
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
