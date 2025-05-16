import { Box, Flex, Image, useBreakpointValue } from '@chakra-ui/react';

import Logo from '../../assets/icons/Logo.png';
import Breadcrumbs from './Breadcrumbs';
import BurgerMenu from './burgerMenu';
import UserProfile from './User';

const Header = () => {
    // <-- Исправлено: добавлены `() =>`
    const showUserProfile = useBreakpointValue({
        base: false,
        lg: true,
    });

    const showBurger = useBreakpointValue({
        base: true,
        lg: false,
    });

    return (
        <Box
            as='header'
            minW='100vw'
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
                <Flex>
                    {showUserProfile && <UserProfile />}
                    {showBurger && <BurgerMenu />}
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
