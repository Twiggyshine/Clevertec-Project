import { Box, chakra, Flex, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '../../../../assets/customIcon/CustomIcon';
import { BadgeWithIcon } from '../../../shared/ui/customBadge/customBadge';
import { Recipe } from './SliderCardProp';

export const SliderCard = chakra(
    ({
        title,
        description,
        category,
        bookmarks,
        likes,
        badgeColor,
        alwaysShowBadge = false,
        imgUrl,
        ...props
    }: Recipe & { alwaysShowBadge?: boolean }) => {
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
                border='1px solid #E6E6E6'
                borderRadius='8px'
                p={{ '3xl': '24px 24px 20px 24px', md: '16px', sm: '12px' }}
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

                <Flex align='center' justify='space-between' gap='8px'>
                    {(alwaysShowBadge || showBadge) && (
                        <BadgeWithIcon category={category} bgColor={badgeColor} />
                    )}

                    <Flex align='center' gap='8px'>
                        {bookmarks !== undefined && bookmarks > 0 && (
                            <Flex align='center'>
                                <IconButton
                                    aria-label='Лайк'
                                    icon={<CustomHeartIcon width='12px' height='12px' />}
                                    variant='ghost'
                                    isRound
                                    size='sm'
                                />
                                <Text fontSize='sm' color='#2db100' fontWeight='600'>
                                    {bookmarks}
                                </Text>
                            </Flex>
                        )}

                        {likes !== undefined && likes > 0 && (
                            <Flex align='center'>
                                <IconButton
                                    aria-label='Смайлик'
                                    icon={<CustomSmileIcon width='12px' height='12px' />}
                                    variant='ghost'
                                    isRound
                                    size='sm'
                                />
                                <Text fontSize='sm' color='#2db100' fontWeight='600'>
                                    {likes}
                                </Text>
                            </Flex>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        );
    },
);
