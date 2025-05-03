import { Box, Flex, Image } from '@chakra-ui/react';

import Logo from '../../assets/icons/Logo.png';
import Breadcrumbs from './Breadcrumbs';
import UserProfile from './User';

const Header = () => (
    <Box
        as='header'
        // minW={{ '3xl': '1920px', '2xl': '1440px', md: '768px', sm: '360px' }}
        w='100vw'
        h={{ sm: '60px', lg: '80px' }}
        bg='#f7fee7'
        px={{ base: 3, md: 4 }}
        border='1px solid #000'
        data-test-id='header'
    >
        <Flex h='100%' align='center' justify='space-between'>
            <Flex align='center'>
                <Box>
                    <Image src={Logo} alt='Логотип' h='32px' objectFit='contain' />
                </Box>
                <Box display='flex' alignItems='center' ml='128px'>
                    <Breadcrumbs />
                </Box>
            </Flex>
            <UserProfile />
        </Flex>
    </Box>
);

export default Header;
