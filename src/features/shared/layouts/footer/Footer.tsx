import { Box, Button, Flex, Text } from '@chakra-ui/react';

import IconLeft from '~/assets/icons/left-icon.svg';

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

                <Text
                    {...textStyles}
                    fontWeight={400}
                    color='rgba(0, 0, 0, 0.64)'
                    textAlign='left'
                    mb='12px'
                >
                    Все права защищены, ученический файл
                    <br />
                    ©Клевер Технолоджи, 2025
                </Text>

                <Button
                    {...textStyles}
                    fontWeight={600}
                    variant='ghost'
                    p='0'
                    color='#000'
                    display='flex'
                    alignItems='center'
                    justifyContent='flex-start'
                    gap='6px'
                >
                    <img src={IconLeft} style={{ width: '20px', height: '20px' }} />
                    Выйти
                </Button>
            </Box>
        </Flex>
    );
};

export default Footer;
