import { Link as ChakraLink } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const linkStyles = {
    color: '#134b00',
    fontWeight: '500',
    fontSize: '16px',
    padding: '8px 16px',
    _hover: {
        textDecoration: 'underline',
        color: '#2db100',
    },
    _active: {
        color: '#2db100',
    },
};

export const VeganMenu = () => (
    <Flex gap='20px' mt='32px' mb='26px' borderBottom='1px solid rgba(0, 0, 0, 0.08)'>
        <ChakraLink as={RouterLink} to='/veganCuisinePage/Закуски' sx={linkStyles}>
            Закуски
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/veganCuisinePage/Первые блюда' sx={linkStyles}>
            Первые блюда
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/veganCuisinePage/Вторые блюда' sx={linkStyles}>
            Вторые блюда
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/veganCuisinePage/Гарниры' sx={linkStyles}>
            Гарниры
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/veganCuisinePage/Десерты' sx={linkStyles}>
            Десерты
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/veganCuisinePage/Выпечка' sx={linkStyles}>
            Выпечка
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/veganCuisinePage/Сыроедческие блюда' sx={linkStyles}>
            Сыроедческие блюда
        </ChakraLink>
        <ChakraLink as={RouterLink} to='/veganCuisinePage/Напитки' sx={linkStyles}>
            Напитки
        </ChakraLink>
    </Flex>
);
