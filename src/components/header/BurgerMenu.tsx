import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    IconButton,
    Image,
    useDisclosure,
} from '@chakra-ui/react';

import LogoMob from '../../assets/icons/LogoMob.svg';
import Sidebar from '../sidebar/Sidebar';

function BurgerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            <IconButton
                aria-label='Открыть меню'
                icon={<HamburgerIcon boxSize='24px' strokeWidth='2px' />}
                variant='transparent'
                width='48px'
                height='48px'
                p='0 12px'
                onClick={onOpen}
            />

            <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs'>
                <DrawerOverlay />
                <DrawerContent p='16px'>
                    <Flex alignItems='center' mb='24px' justifyContent='space-between'>
                        <Image src={LogoMob} alt='Логотип' objectFit='contain' />
                        <DrawerCloseButton color='grey' position='relative' top='0' right='0' />
                    </Flex>
                    <DrawerBody p={0}>
                        <Sidebar />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default BurgerMenu;
