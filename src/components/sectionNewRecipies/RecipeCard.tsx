import { Badge, Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';

import * as ImgCards from '../../assets/menuIcons/index';
import { CustomHeartIcon, CustomSmileIcon } from '../customIcon/CustomIcon';

interface RecipeCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    likesCount?: number;
    favCount?: number;
    imgUrl: string;
}

const RecipeCard = ({
    id,
    title,
    description,
    category,
    likesCount,
    favCount,
    imgUrl,
}: RecipeCardProps) => (
    <Box
        width='322px'
        height='414px'
        borderWidth='1px'
        borderRadius='0px'
        position='relative'
        mb='40px'
    >
        <Image
            src={`../../../public/recipies/${id}.jpg`}
            alt={title}
            objectFit='cover'
            h='230px'
            w='322px'
        />
        <Box p='16px 24px 20px 24px'>
            <Box mb='24px'>
                <Text noOfLines={1} mb='8px' fontSize='20px' fontWeight='500'>
                    {title}
                </Text>
                <Text color='#000' fontSize='14px' noOfLines={{ lg: 1, sm: 3 }}>
                    {description}
                </Text>
            </Box>

            <Flex align='center' justify='space-between'>
                <Badge
                    backgroundColor='#d7ff94'
                    fontSize='14px'
                    borderRadius='4px'
                    p='2px 8px'
                    h='24px'
                    textTransform='none'
                    fontWeight='400'
                >
                    <Flex align='center' gap='8px'>
                        <Image
                            src={ImgCards[imgUrl as keyof typeof ImgCards]}
                            alt={category}
                            boxSize='16px'
                        />

                        <Text>{category}</Text>
                    </Flex>
                </Badge>
                <Flex align='center' gap='8px'>
                    {likesCount !== undefined && likesCount > 0 && (
                        <Flex align='center'>
                            <IconButton
                                aria-label='Лайк'
                                icon={<CustomHeartIcon />}
                                variant='ghost'
                                isRound
                                size='sm'
                            />
                            <Text fontSize='sm' color='#2db100' fontWeight='600'>
                                {likesCount}
                            </Text>
                        </Flex>
                    )}

                    {favCount !== undefined && favCount > 0 && (
                        <Flex align='center'>
                            <IconButton
                                aria-label='Смайлик'
                                icon={<CustomSmileIcon />}
                                variant='ghost'
                                isRound
                                size='sm'
                            />
                            <Text fontSize='sm' color='#2db100' fontWeight='600'>
                                {favCount}
                            </Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Box>
    </Box>
);

export default RecipeCard;
