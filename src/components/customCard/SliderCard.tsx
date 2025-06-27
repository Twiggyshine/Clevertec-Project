import { Box, chakra, Flex, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '../../assets/customIcon/CustomIcon';
import { BadgeWithIcon } from '../CustomBadge/customBadge';
import { CustomCardProps } from './SliderCardProp';

export const CustomCard = chakra(
    ({
        title,
        description,
        category,
        likesCount,
        favCount,
        imgUrl,
        badgeColor,
        alwaysShowBadge = false,
        ...props
    }: CustomCardProps & { alwaysShowBadge?: boolean }) => {
        const showBadge = useBreakpointValue({
            base: false,
            '2xl': true,
        });

        return (
            <Flex
                {...props}
                flexDirection='column'
                flex='1'
                justify='space-between'
                transition='all 0.3s ease'
                _hover={{
                    boxShadow:
                        '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                    background: '#fff',
                    transition: 'all 0.3s ease',
                }}
            >
                <Box mb='24px'>
                    <Text
                        noOfLines={{ md: 1, base: 2 }}
                        mb='8px'
                        fontSize={{ '3xl': '24px', sm: '16px', xl: '18px' }}
                        fontWeight={{ sm: '500' }}
                    >
                        {title}
                    </Text>
                    <Text
                        color='#000'
                        fontSize='14px'
                        lineHeight='143%'
                        noOfLines={{ lg: 1, sm: 3 }}
                    >
                        {description}
                    </Text>
                </Box>

                <Flex align='center' justify='space-between'>
                    {(alwaysShowBadge || showBadge) && (
                        <BadgeWithIcon category={category} imgUrl={imgUrl} bgColor={badgeColor} />
                    )}
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
                </Flex>
            </Flex>
        );
    },
);
