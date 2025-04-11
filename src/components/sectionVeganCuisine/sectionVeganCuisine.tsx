import { Badge, Box, Flex, Heading, IconButton, SimpleGrid, Text } from '@chakra-ui/react';

// import * as ImgCards from '../../assets/menuIcons/index';
import recipesData from '../../data/recipes-data.json';
import { CustomHeartIcon, CustomSmileIcon } from '../customIcon/CustomIcon';

// interface VeganRecipeCardProps {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     likesCount?: number;
//     favCount?: number;
//   }

const VeganKitchenSection = () => {
    const veganRecipes = recipesData.newRecipies;

    return (
        <Box maxW='1200px' mx='auto' p={5}>
            <Flex justify='space-between' align='center' mb={8}>
                <Heading as='h1' size='xl'>
                    Веганская кухня
                </Heading>
                <Text maxW='400px' fontSize='lg' color='gray.600'>
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда
                </Text>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                {veganRecipes.map((recipe) => (
                    <Box
                        key={recipe.id}
                        borderWidth='1px'
                        borderRadius='lg'
                        p={6}
                        _hover={{ shadow: 'md' }}
                    >
                        <Heading fontSize='xl' mb={2}>
                            {recipe.title}
                        </Heading>
                        <Text mb={4}>{recipe.description}</Text>

                        <Flex justify='space-between' align='center'>
                            <Badge colorScheme='green' variant='subtle'>
                                {recipe.category}
                            </Badge>

                            <Flex gap={2}>
                                {recipe.likesCount && (
                                    <Flex align='center'>
                                        <IconButton
                                            aria-label='Лайк'
                                            icon={<CustomHeartIcon />}
                                            variant='ghost'
                                            size='sm'
                                        />
                                        <Text>{recipe.likesCount}</Text>
                                    </Flex>
                                )}

                                {recipe.favCount && (
                                    <Flex align='center'>
                                        <IconButton
                                            aria-label='Сохранено'
                                            icon={<CustomSmileIcon />}
                                            variant='ghost'
                                            size='sm'
                                        />
                                        <Text>{recipe.favCount}</Text>
                                    </Flex>
                                )}
                            </Flex>
                        </Flex>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default VeganKitchenSection;
