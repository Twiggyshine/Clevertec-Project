import { Box, Flex, Heading, Image, Tag, Text } from '@chakra-ui/react';

import RecipeStats from '../../../shared/ui/recipeStatus/recipeStatus';

interface RecipeHeaderProps {
    title: string;
    description: string;
    image: string;
    category: string[];
    likesCount: number;
    favCount: number;
}

const CookingRecipeHeader = ({
    title,
    description,
    image,
    category,
    likesCount,
    favCount,
}: RecipeHeaderProps) => (
    <Box mb='30px'>
        <Flex gap='20px'>
            <Image
                src={image}
                alt={title}
                borderRadius='12px'
                mb='20px'
                maxH='400px'
                objectFit='cover'
                w='553px'
            />
            <Flex direction='column'>
                <Flex gap='10px' wrap='wrap' mb='10px' justify='space-between'>
                    {category.map((i) => (
                        <Tag key={i} colorScheme='green'>
                            {i}
                        </Tag>
                    ))}

                    <Flex gap='20px' fontWeight='bold'>
                        <RecipeStats likesCount={likesCount} favCount={favCount} />
                    </Flex>
                </Flex>
                <Heading fontSize='36px' mb='10px'>
                    {title}
                </Heading>
                <Text mb='10px'>{description}</Text>
            </Flex>
        </Flex>
    </Box>
);

export default CookingRecipeHeader;
