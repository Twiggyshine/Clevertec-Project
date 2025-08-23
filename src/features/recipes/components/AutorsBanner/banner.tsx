import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react';

import userRecipe from '../../../../data/userRecipe.json';

const Banner = () => {
    const { avatar, name, email } = userRecipe.user;
    return (
        <HStack w='100%' h='144px' backgroundColor='#c4ff61' borderRadius='8px' p='24px'>
            <Image src={avatar} alt='Аватар' w='96px' h='96px' objectFit='contain' />
            <Flex>
                <Text fontWeight='700' fontSize='24px'>
                    {name}
                </Text>
                <Text fontWeight='400' fontSize='14px'>
                    Автор рецепта
                </Text>
            </Flex>
            <Box fontWeight='400' fontSize='14px' backgroundColor='rgba(0, 0, 0, 0.64)'>
                {email}
            </Box>
            <Flex>
                <Button>Подписаться</Button>

                <Box>Количество подписчиков</Box>
            </Flex>
        </HStack>
    );
};

export default Banner;
