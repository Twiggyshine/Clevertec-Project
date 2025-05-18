import { Flex, Text } from '@chakra-ui/react';

import {
    CustomHeartIcon,
    CustomSmileIcon,
    CustomUsersIcon,
} from '../../assets/customIcon/CustomIcon';

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
            padding='0px 16px'
            width='85px'
            height='24px'
            gap='4px'
        >
            <CustomHeartIcon width='16px' height='16px' />
            <Text {...textStyles}>185</Text>
        </Flex>

        <Flex
            justify='center'
            alignItems='center'
            borderRadius='6px'
            padding='0px 16px'
            width='87px'
            height='40px'
            gap='4px'
        >
            <CustomUsersIcon width='16px' height='16px' />
            <Text {...textStyles}>589</Text>
        </Flex>

        <Flex
            alignItems='center'
            justify='center'
            borderRadius='6px'
            padding='0px 16px'
            width='86px'
            height='40px'
            gap='4px'
        >
            <CustomSmileIcon width='16px' height='16px' />
            <Text {...textStyles}>587</Text>
        </Flex>
    </>
);

export default StatsIcons;
