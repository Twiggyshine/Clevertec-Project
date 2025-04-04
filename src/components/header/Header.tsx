import { Box, Flex, Image, Link } from '@chakra-ui/react';

import Logo from '../../assets/icons/Logo.png';
import UserProfile from './User';

const Header = () => (
    <Box
        as='header'
        width='100vw'
        maxW='1920px'
        h={{ base: '60px', md: '80px' }}
        bg='lime.50'
        mx='auto'
        px={{ base: 3, md: 4 }}
        border='1px solid #000'
        data-test-id='header'
    >
        <Flex h='100%' align='center' minW='0'>
            <Flex align='center' minW='0' flexShrink={1}>
                <Box w={{ base: '100px', md: '135.2px' }} mr={{ base: 3, md: 4 }} flexShrink={0}>
                    <Image src={Logo} alt='Логотип' w='100%' h='32px' objectFit='contain' />
                </Box>
                <Box ml='128px' height='32px' display='flex' alignItems='center'>
                    <Link
                        href='/'
                        fontSize='16px'
                        h='24px'
                        whiteSpace='nowrap'
                        w={{ base: 'auto', md: '1152px' }}
                        flexShrink={0}
                    >
                        Главная
                    </Link>
                </Box>
            </Flex>

            <UserProfile />
        </Flex>
    </Box>
);

export default Header;
