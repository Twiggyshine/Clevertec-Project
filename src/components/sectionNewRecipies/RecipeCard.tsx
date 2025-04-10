import { Badge, Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '../customIcon/CustomIcon';

interface RecipeCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    likesCount?: number;
    favCount?: number;
}

const RecipeCard = ({
    id,
    title,
    description,
    category,
    likesCount,
    favCount,
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
            mb='24px'
        />

        <Box p='16px 24px 20px 24px'>
            <Text fontWeight='semibold' fontSize='lg' noOfLines={1} mb='1'>
                {title}
            </Text>
            <Text noOfLines={2} color='#000' fontSize='14px'>
                {description}
            </Text>
        </Box>

        <Flex p='2' align='center' justify='space-between'>
            <Badge backgroundColor='#d7ff94' px='2' fontSize='xs'>
                {category}
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
);

export default RecipeCard;
