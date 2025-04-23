import { Link as ChakraLink } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const VeganMenu = () => (
    <Flex p='10px' wrap='wrap' gap='20px'>
        <ChakraLink as={RouterLink} to='/Закуски'>
            Закуски
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/Первые-блюда'>
            Первые блюда
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/Вторые'>
            Вторые
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/Гарниры'>
            Гарниры
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/Десерты'>
            Десерты
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/Выпечка'>
            Выпечка
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/Сыроедческие-блюда'>
            Сыроедческие блюда
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/Напитки'>
            Напитки
        </ChakraLink>
    </Flex>
);
