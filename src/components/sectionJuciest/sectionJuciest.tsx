import { Box, Button, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import recipesData from '../../data/recipes-data.json';
import { CustomHeartIcon } from '../recipeCard/CustomIcon';

const JuicyRecipesSection = () => {
    // Получаем рецепты из свойства theJuciest
    const featuredRecipes = recipesData.theJuciest;

    return (
        <Box h='584px' maxW='1200px' mx='auto' p={5}>
            <Flex justify='space-between' align='center' mb={8}>
                <Heading as='h1' size='xl'>
                    Самое сочное
                </Heading>
                <Button variant='outline' borderRadius='full' px={6} _hover={{ bg: 'gray.50' }}>
                    Вся подборка
                </Button>
            </Flex>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                {featuredRecipes.map((recipe) => (
                    <GridItem key={recipe.id}>
                        <Box
                            borderWidth='1px'
                            borderColor='gray.200'
                            borderRadius='lg'
                            p={6}
                            h='100%'
                            transition='all 0.2s ease-in-out'
                            _hover={{
                                transform: 'translateY(-4px)',
                                shadow: 'md',
                                borderColor: 'gray.300',
                            }}
                        >
                            <Text
                                color='gray.500'
                                fontSize='sm'
                                mb={2}
                                textTransform='uppercase'
                                letterSpacing='wide'
                            >
                                {recipe.category}
                            </Text>

                            <Heading as='h3' size='md' mb={3} color='gray.800'>
                                {recipe.title}
                            </Heading>

                            <Text color='gray.600' mb={4} flexGrow={1} lineHeight='tall'>
                                {recipe.description}
                            </Text>

                            <Flex gap={3} mt='auto'>
                                <Button variant='outline' size='sm' leftIcon={<CustomHeartIcon />}>
                                    Сохранить
                                </Button>
                                <Button bg='black' size='sm'>
                                    Готовить
                                </Button>
                            </Flex>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default JuicyRecipesSection;
