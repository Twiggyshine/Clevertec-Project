import { Box, Flex, Image, Text } from '@chakra-ui/react';

import userData from '../../../../data/userProfile.json';

const UserProfile = () => {
    const { avatar, name, email } = userData.user;

    return (
        <Flex align='center' gap={3} w='432px' h='48px' px={6} py={0}>
            <Image src={avatar} alt='Аватар' w='48px' h='48px' objectFit='contain' />
            <Box>
                <Text fontSize='sm' fontWeight='medium' isTruncated>
                    {name}
                </Text>
                <Text fontSize='xs' color='gray.500' isTruncated>
                    {email}
                </Text>
            </Box>
        </Flex>
    );
};

export default UserProfile;
