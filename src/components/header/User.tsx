import { Box, Flex, Image, Text } from '@chakra-ui/react';

import Logo from '../../assets/icons/Avatar.png';

const UserProfile = () => (
    <Flex align='center' gap={3} w='432px' h='48px' px={6} py={0}>
        <Image src={Logo} alt='Аватар' w='48px' h='48px' objectFit='contain' />
        <Box>
            <Text fontSize='sm' fontWeight='medium' isTruncated>
                Екатерина Константинопольская
            </Text>
            <Text fontSize='xs' color='gray.500' isTruncated>
                bake_and_pie@example.com
            </Text>
        </Box>
    </Flex>
);

export default UserProfile;
