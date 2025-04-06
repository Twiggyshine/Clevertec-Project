import { Box, Button, Flex, Text } from '@chakra-ui/react';

import IconLeft from '../../assets/icons/left-icon.svg';

const Footer = () => {
    const textStyles = {
        fontFamily: 'var(--font-family)',
        fontSize: '12px',
        lineHeight: '133%',
    };
    return (
        <Flex h='372px' direction='column' justifyContent='flex-end'>
            <Box p='0px 24px 32px 24px' w='256px' h='144px'>
                <Text {...textStyles} fontWeight={500} color='rgba(0, 0, 0, 0.24)' mb='8px'>
                    Версия программы 03.25
                </Text>
                <Text {...textStyles} fontWeight={400} color='rgba(0, 0, 0, 0.64)' textAlign='left'>
                    Все права защищены, ученический файл
                    <br />
                    ©Клевер Технолоджи, 2025
                </Text>
                <Button
                    leftIcon={<img src={IconLeft} />}
                    {...textStyles}
                    variant='ghost'
                    fontWeight={600}
                    p='0'
                    color='#000'
                    _hover={{ bg: 'transparent', textDecoration: 'underline' }}
                >
                    Выйти
                </Button>
            </Box>
        </Flex>
    );
};

export default Footer;
