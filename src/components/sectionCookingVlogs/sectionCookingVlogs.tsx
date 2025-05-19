import { Box, Flex, Grid, GridItem, Heading, useBreakpointValue } from '@chakra-ui/react';

import CulinaryBlogCard from '../../components/sectionCookingVlogs/cookingVlogsCard';
import culinaryBlogsData from '../../data/culinaryBlogsData.json';
import JuicyButton from '../buttonSelection/buttonSelection';
import { BlogAuthor } from '../sectionCookingVlogs/blog';

const CulinaryBlogsSection = () => {
    const hideJuicyButton = useBreakpointValue({
        base: false,
        lg: true,
    });
    const showJuicyButton = useBreakpointValue({
        base: true,
        lg: false,
    });
    return (
        <Box bg='#c4ff61' mb='40px' borderRadius='16px' p='24px'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading
                    fontSize={{ '2xl': '36px', md: '30px', sm: '24px' }}
                    mb='24px'
                    fontWeight='500'
                >
                    Кулинарные блоги
                </Heading>

                {hideJuicyButton && <JuicyButton bgColor='#c4ff61'>Все авторы</JuicyButton>}
            </Flex>

            <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap='16px' mb='12px'>
                {culinaryBlogsData.map((author: BlogAuthor) => (
                    <GridItem key={author.id}>
                        <CulinaryBlogCard author={author} />
                    </GridItem>
                ))}
            </Grid>
            <Flex justify='center'>
                {showJuicyButton && <JuicyButton bgColor='#c4ff61'>Все авторы</JuicyButton>}
            </Flex>
        </Box>
    );
};
export default CulinaryBlogsSection;
