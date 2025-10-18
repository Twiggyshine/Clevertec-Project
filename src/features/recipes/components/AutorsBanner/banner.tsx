import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';

import userRecipe from '../../../../data/userRecipe.json';

const Banner = () => {
    const { avatar, name, email } = userRecipe.user;
    return (
        <HStack w='100%' h='144px' backgroundColor='#c4ff61' borderRadius='8px' p='24px'>
            <Image src={avatar} alt='Аватар' w='96px' h='96px' objectFit='contain' />
            <VStack>
                <HStack justifyContent='space-between'>
                    <Text fontWeight='700' fontSize='20px'>
                        {name}
                    </Text>
                    <Text fontWeight='400' fontSize='14px'>
                        Автор рецепта
                    </Text>
                </HStack>

                <Box fontWeight='400' fontSize='14px' color='rgba(0, 0, 0, 0.64)'>
                    {email}
                </Box>
                <HStack justifyContent='space-between'>
                    <Button bg='black' color='white'>
                        Подписаться
                    </Button>

                    <Box>Количество подписчиков</Box>
                </HStack>
            </VStack>
        </HStack>
    );
};

export default Banner;
