import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';

import CulinaryBlogCard from '../../components/sectionCookingVlogs/cookingVlogsCard';
import culinaryBlogsData from '../../data/culinaryBlogsData.json';
import JuicyButton from '../buttonSelection/buttonSelection';
import { BlogAuthor } from '../sectionCookingVlogs/blog';

const CulinaryBlogsSection = () => (
    <Box bg='#c4ff61' mb='40px' borderRadius='16px' p='24px' w={{ '3xl': '1360px', lg: '880px' }}>
        <Flex justifyContent='space-between' alignItems='center'>
            <Heading as='h1' fontSize='36px' mb='24px' fontWeight='400'>
                Кулинарные блоги
            </Heading>

            <JuicyButton bgColor='#c4ff61'>Все авторы</JuicyButton>
        </Flex>

        <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap='16px'>
            {culinaryBlogsData.map((author: BlogAuthor) => (
                <GridItem key={author.id}>
                    <CulinaryBlogCard author={author} />
                </GridItem>
            ))}
        </Grid>
    </Box>
);

export default CulinaryBlogsSection;
