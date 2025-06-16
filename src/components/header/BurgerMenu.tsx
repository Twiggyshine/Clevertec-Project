import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';

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
                <DrawerContent>
                    <Box mb='24px'>
                        <DrawerCloseButton color='grey' />
                    </Box>
                    <DrawerBody p={0}>
                        <Sidebar />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default BurgerMenu;
