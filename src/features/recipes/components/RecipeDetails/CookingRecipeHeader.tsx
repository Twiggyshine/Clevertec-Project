import { Box, Flex, Heading, HStack, Image, Tag, Text } from '@chakra-ui/react';

import menuData from '../../../../data/DataMenu';
import RecipeStats from '../../../shared/ui/recipeStatus/recipeStatus';

interface RecipeHeaderProps {
    title: string;
    description: string;
    imgUrl: string;
    category: string[];
    likesCount: number;
    favCount: number;
}

const CookingRecipeHeader = ({
    title,
    description,
    imgUrl,
    category,
    likesCount,
    favCount,
}: RecipeHeaderProps) => {
    const getCategoryData = (path: string) => menuData.find((item) => item.path === path);

    return (
        <Box mb='30px'>
            <Flex gap='20px'>
                <Image
                    src={imgUrl}
                    alt={title}
                    borderRadius='12px'
                    mb='20px'
                    maxH='400px'
                    objectFit='cover'
                    w='553px'
                />
                <Flex direction='column'>
                    <Flex gap='10px' wrap='wrap' mb='10px' justify='space-between'>
                        {category.map((path) => {
                            const categoryItem = getCategoryData(path);
                            if (!categoryItem) return null;

                            return (
                                <Tag key={path} backgroundColor='#ffffd3'>
                                    <HStack spacing='8px'>
                                        {categoryItem.icon && (
                                            <Image
                                                src={categoryItem.icon}
                                                alt={categoryItem.category}
                                                boxSize='20px'
                                            />
                                        )}
                                        <Text>{categoryItem.category}</Text>
                                    </HStack>
                                </Tag>
                            );
                        })}

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
};

export default CookingRecipeHeader;
