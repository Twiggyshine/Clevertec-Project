import { Box, Flex, HStack, Image, useBreakpointValue } from '@chakra-ui/react';

import Logo from '../../assets/icons/Logo.png';
import StatsIcons from '../aside/iconField';
import Breadcrumbs from './Breadcrumbs';
import BurgerMenu from './BurgerMenu';
import UserProfile from './User';

const Header = () => {
    const hideUserProfile = useBreakpointValue({
        base: false,
        xl: true,
    });

    const showBurger = useBreakpointValue({
        base: true,
        xl: false,
    });

    const showStatsIcons = useBreakpointValue({
        base: true,
        xl: false,
    });
    return (
        <Box
            position='fixed'
            as='header'
            width='100vw'
            h={{ sm: '60px', lg: '80px' }}
            bg='#f7fee7'
            px={{ base: 3, md: 4 }}
            border='1px solid #000'
            data-test-id='header'
            zIndex={100}
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

                <HStack alignItems='center' gap={4} h='24px'>
                    {hideUserProfile && <UserProfile />}
                    <HStack h='24px' justify='space-around' alignItems='center'>
                        {showStatsIcons && <StatsIcons />}
                    </HStack>
                    <HStack alignItems='center' h='24px'>
                        {showBurger && <BurgerMenu />}
                    </HStack>
                </HStack>
            </Flex>
        </Box>
    );
};

export default Header;
