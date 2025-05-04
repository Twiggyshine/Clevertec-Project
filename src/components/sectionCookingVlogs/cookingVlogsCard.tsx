import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

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
            <Box flex='1' minWidth='0'>
                <Heading
                    as='h3'
                    fontSize='18px'
                    fontWeight='500'
                    lineHeight='156%'
                    noOfLines={{ '2xl': 1 }}
                >
                    {author.name}
                </Heading>
                <Text fontSize='14px' color='rgba(0, 0, 0, 0.64)'>
                    {author.username}
                </Text>
            </Box>
        </Flex>
        <Box p={{ base: '0 24px 20px', '2xl': '0 16px 16px' }} flex='1' minHeight='0'>
            <Text color='#000' fontSize='14px' fontWeight='400px' noOfLines={{ lg: 3 }}>
                {author.description}
            </Text>
        </Box>
    </Box>
);

export default CulinaryBlogCard;
