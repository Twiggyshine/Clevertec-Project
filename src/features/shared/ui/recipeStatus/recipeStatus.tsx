// RecipeStats.tsx
import { Flex, IconButton, Text } from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '~/assets/customIcon/CustomIcon'; // укажите правильный путь

interface RecipeStatsProps {
    likesCount?: number;
    favCount?: number;
}

export const RecipeStats = ({ likesCount, favCount }: RecipeStatsProps) => (
    <Flex align='center' gap='8px'>
        {likesCount !== undefined && likesCount > 0 && (
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
        )}

        {favCount !== undefined && favCount > 0 && (
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
        )}
    </Flex>
);

export default RecipeStats;
