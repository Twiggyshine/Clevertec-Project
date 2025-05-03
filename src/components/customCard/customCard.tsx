import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '../../assets/customIcon/CustomIcon';
import { BadgeWithIcon } from '../customBadge/customBadge';
import { CustomCardProps } from './customCardProps';

export const CustomCard = chakra(
    ({
        title,
        description,
        category,
        likesCount,
        favCount,
        imgUrl,
        badgeColor,
        ...props
    }: CustomCardProps) => (
        <Box {...props}>
            <Box mb='24px'>
                <Text noOfLines={1} mb='8px' fontSize='20px' fontWeight='500'>
                    {title}
                </Text>
                <Text color='#000' fontSize='14px' noOfLines={{ lg: 1, sm: 3 }}>
                    {description}
                </Text>
            </Box>

            <Flex align='center' justify='space-between'>
                <BadgeWithIcon category={category} imgUrl={imgUrl} bgColor={badgeColor} />

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
    ),
);
