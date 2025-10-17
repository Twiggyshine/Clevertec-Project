import { Flex, Text } from '@chakra-ui/react';

import { CalElementProps } from './calElementProp';

const CalElement = ({ topText = '', mainText = '', bottomText = '' }: CalElementProps) => (
    <Flex
        w='149px'
        h='139px'
        flexDirection='column'
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='16px'
        p='48px 16px 48px 16px'
    >
        <Text color='rgba(0, 0, 0, 0.48)' textAlign='center' fontWeight='400' fontSize='14px'>
            {topText}
        </Text>
        <Text fontSize='36px' textAlign='center' color='#134b00' fontWeight='500'>
            {mainText}
        </Text>
        <Text color='rgba(0, 0, 0, 0.92)' textAlign='center' fontWeight='600' fontSize='14px'>
            {bottomText}
        </Text>
    </Flex>
);

export default CalElement;
