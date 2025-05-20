import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

function BurgerMenu() {
    return (
        <Box>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Меню'
                    icon={<HamburgerIcon boxSize='24px' strokeWidth='2px' />}
                    variant='transparent'
                    width='48px'
                    height='48px'
                    p='0 12px'
                />

                <MenuList>
                    <MenuItem>Главная</MenuItem>
                    <MenuItem>О нас</MenuItem>
                    <MenuItem>Услуги</MenuItem>
                    <MenuItem>Контакты</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
}

export default BurgerMenu;
