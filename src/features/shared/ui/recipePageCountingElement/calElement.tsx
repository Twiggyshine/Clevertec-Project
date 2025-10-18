import { Text, VStack } from '@chakra-ui/react';

import { CalElementProps } from './calElementProp';

const CalElement = ({ topText = '', mainText = '', bottomText = '' }: CalElementProps) => (
    <VStack w='149px' h='149px' border='1px solid rgba(0, 0, 0, 0.08)' borderRadius='16px' p='16px'>
        <Text color='rgba(0, 0, 0, 0.48)' fontWeight='400' fontSize='14px'>
            {topText}
        </Text>
        <Text fontSize='36px' color='#134b00' fontWeight='500'>
            {mainText}
        </Text>
        <Text color='rgba(0, 0, 0, 0.92)' fontWeight='600' fontSize='14px'>
            {bottomText}
        </Text>
    </VStack>
);

export default CalElement;
