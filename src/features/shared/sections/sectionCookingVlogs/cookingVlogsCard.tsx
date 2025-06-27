import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';

import { BlogAuthor } from './blog';

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
        <HStack gap={{ base: '8px', xl: '12px' }} alignItems='flex-start' p='24px 24px 16px 24px'>
            <Image
                src={author.avatar}
                alt={author.name}
                borderRadius='full'
                boxSize='48px'
                objectFit='cover'
            />
            <Box>
                <Heading
                    as='h3'
                    fontSize='18px'
                    fontWeight='500'
                    lineHeight='156%'
                    noOfLines={{ sm: 1 }}
                >
                    {author.name}
                </Heading>
                <Text
                    fontSize={{ base: '12px', xl: '14px' }}
                    lineHeight='14px'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    {author.username}
                </Text>
            </Box>
        </HStack>
        <Box p={{ base: '0 24px 20px', '2xl': '0 16px 16px' }}>
            <Text color='#000' fontSize='14px' fontWeight='400px' noOfLines={{ sm: 3 }}>
                {author.description}
            </Text>
        </Box>
    </Box>
);

export default CulinaryBlogCard;
