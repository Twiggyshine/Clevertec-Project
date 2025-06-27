import { Flex, Text } from '@chakra-ui/react';

import {
    CustomHeartIcon,
    CustomSmileIcon,
    CustomUsersIcon,
} from '../../../../assets/customIcon/CustomIcon';

const textStyles = {
    fontFamily: 'var(--font-family)',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '150%',
    color: '#2db100',
};

export const StatsIcons = () => (
    <>
        <Flex
            justify='center'
            alignItems='center'
            borderRadius='6px'
            padding={{ base: '0 12px', md: '0px 16px' }}
            height='24px'
            gap='6px'
        >
            <CustomHeartIcon width='16px' height='16px' />
            <Text {...textStyles}>185</Text>
        </Flex>

        <Flex
            justify='center'
            alignItems='center'
            borderRadius='6px'
            padding={{ base: '0 12px', md: '0px 16px' }}
            height='40px'
            gap='6px'
        >
            <CustomUsersIcon width='16px' height='16px' />
            <Text {...textStyles}>589</Text>
        </Flex>

        <Flex
            alignItems='center'
            justify='center'
            borderRadius='6px'
            padding={{ base: '0 12px', md: '0px 16px' }}
            height='40px'
            gap='6px'
        >
            <CustomSmileIcon width='16px' height='16px' />
            <Text {...textStyles}>587</Text>
        </Flex>
    </>
);

export default StatsIcons;
