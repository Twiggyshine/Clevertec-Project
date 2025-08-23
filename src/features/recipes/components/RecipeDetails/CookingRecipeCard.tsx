import { Flex, IconButton, Image, Text } from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '~/assets/customIcon/CustomIcon';

import { BadgeWithIcon } from '../../../shared/ui/customBadge/customBadge';
import RecipeActions from '../../../shared/ui/recipePageActionBar/recipeActions';

interface RecipeHeaderProps {
    title: string;
    description: string;
    image: string;
    category: string[];
    likesCount: number;
    favCount: number;
}

const RecipeHeader = ({
    title,
    description,
    image,
    category,
    likesCount,
    favCount,
}: RecipeHeaderProps) => (
    <Flex>
        <Image
            src={image}
            alt={title}
            objectFit='cover'
            borderRadius='8px'
            h={{ base: '224px', '2xl': '410px' }}
            w={{ base: '328px', lg: '232px', '2xl': '553px' }}
        />
        <Flex align='center' gap='8px' ml='16px' direction='column' justify='space-between'>
            <Flex justify='space-between' align='flex-start' width='100%'>
                <BadgeWithIcon category={category[0]} imgUrl={image} />
                <BadgeWithIcon category={category[0]} imgUrl={image} />
                <BadgeWithIcon category={category[0]} imgUrl={image} />
            </Flex>

            <Flex width='100%' justify='space-between'>
                <Flex align='center'>
                    <IconButton
                        aria-label='Лайк'
                        icon={<CustomHeartIcon width='12px' height='12px' />}
                        variant='ghost'
                        isRound
                        size='sm'
                    />
                    <Text fontSize='sm' color='#2db100' fontWeight='600'>
                        {likesCount}
                    </Text>
                </Flex>
                <Flex align='center'>
                    <IconButton
                        aria-label='Смайлик'
                        icon={<CustomSmileIcon width='12px' height='12px' />}
                        variant='ghost'
                        isRound
                        size='sm'
                    />
                    <Text fontSize='sm' color='#2db100' fontWeight='600'>
                        {favCount}
                    </Text>
                </Flex>
            </Flex>

            <Flex flexDirection='column' width='100%'>
                <Text
                    fontSize={{ '3xl': '24px', sm: '16px', xl: '18px' }}
                    mb='8px'
                    color='#000'
                    fontWeight='500'
                    noOfLines={{ xl: 1, sm: 2 }}
                >
                    {title}
                </Text>

                <Text color='#000' mb='24px' fontSize='14px' lineHeight='143%' noOfLines={3}>
                    {description}
                </Text>
            </Flex>

            <RecipeActions />
        </Flex>
    </Flex>
);
export default RecipeHeader;
