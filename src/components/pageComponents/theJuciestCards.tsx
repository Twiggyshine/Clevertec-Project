import {
    Box,
    Flex,
    Grid,
    GridItem,
    IconButton,
    Image,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

import recipesData from '~/data/recipes-data.json';

import { CustomHeartIcon, CustomSmileIcon } from '../../assets/customIcon/CustomIcon';
import RecommendsBadge from '../badgeRecom/badgeRecom';
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

const recommendedRecipeIds: Record<number, { name: string; avatarSrc: string }> = {
    6: { name: 'Елена Высоцкая', avatarSrc: './../../../public/icons/Avatar1.svg' },
    7: { name: 'Alex Cook', avatarSrc: './../../../public/icons/Avatar2.svg' },
};
const JuciestCards = () => {
    const showDescription = useBreakpointValue({ lg: true, sm: false });
    const hideRecommendsBadge = useBreakpointValue({ xl: true, sm: false });
    const showBadge = useBreakpointValue({ xl: true, base: false });
    const hideBadge = useBreakpointValue({ xl: false, base: true });
    const jucRecipes = [
        ...recipesData.theJuciest.filter((recipe) => [5, 6, 7, 8].includes(recipe.id)),
        ...recipesData.VegetarianCuisinePage.filter((recipe) =>
            [10, 11, 13, 14].includes(recipe.id),
        ),
    ];

    return (
        <Box mb='40px'>
            <Grid
                templateColumns={{ '3xl': 'repeat(2, 1fr)', '2xl': 'repeat(1, 1fr)' }}
                gap={8}
                mb='16px'
            >
                {jucRecipes.map((recipe: RecipeCardProps) => (
                    <GridItem key={recipe.id}>
                        <Flex
                            borderWidth='1px'
                            borderColor='border: 1px solid rgba(0, 0, 0, 0.08);'
                            borderRadius='8px'
                            overflow='hidden'
                            h='100%'
                        >
                            <Box position='relative'>
                                <Image
                                    src={`../../public/recipies/${recipe.id}.jpg`}
                                    alt={recipe.title}
                                    objectFit='cover'
                                    height='100%'
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
                <JuicyButton icon={null}>Загрузить ещё</JuicyButton>
            </Flex>
        </Box>
    );
};

export default JuciestCards;
