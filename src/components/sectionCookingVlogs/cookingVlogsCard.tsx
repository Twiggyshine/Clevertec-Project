import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';

import { BlogAuthor } from '../sectionCookingVlogs/blog';

interface CulinaryBlogCardProps {
    author: BlogAuthor;
}

const CulinaryBlogCard = ({ author }: CulinaryBlogCardProps) => (
    <Box
        bg='#fff'
        borderRadius='8px'
        border='1px solid rgba(0, 0, 0, 0.08)'
        transition='all 0.2s'
        _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
    >
        <Flex gap={4} alignItems='flex-start' p='24px 24px 16px 24px'>
            <Image
                src={author.avatar}
                alt={author.name}
                borderRadius='full'
                boxSize='48px'
                objectFit='cover'
            />
            <VStack align='flex-start' spacing={1}>
                <Heading as='h3' fontSize='18px' fontWeight='500' lineHeight='156%'>
                    {author.name}
                </Heading>
                <Text fontSize='14px' color='rgba(0, 0, 0, 0.64)'>
                    {author.username}
                </Text>
            </VStack>
        </Flex>
        <Text color='#000' p='12px 24px 20px 24px'>
            {author.description}
        </Text>
    </Box>
);

export default CulinaryBlogCard;
