import { Box, Flex, Text } from '@chakra-ui/react';

import CalElement from '../../../shared/ui/pageCountingElement/calElement';

const sectionCalories = () => (
    <Box w='668px' h='176px' mb='40px'>
        <Text color='rgba(0, 0, 0, 0.8)' fontWeight='400' fontSize='14px' textAlign='start'>
            * Калорийность на 1 порцию
        </Text>
        <Flex gap='24px'>
            <CalElement topText='калорийность' mainText='358' bottomText='ккал' />
            <CalElement topText='белки' mainText='23' bottomText='грамм' />
            <CalElement topText='жиры' mainText='20' bottomText='грамм' />
            <CalElement topText='углеводы' mainText='54' bottomText='грамм' />
        </Flex>
    </Box>
);

export default sectionCalories;
