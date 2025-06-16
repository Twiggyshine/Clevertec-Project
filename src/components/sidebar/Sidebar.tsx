import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    ResponsiveValue,
    Text,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';
import { useLocation } from 'react-router';

import menuData from '../../data/DataMenu';
import Footer from '../footer/Footer';
import Breadcrumbs from '../header/Breadcrumbs';
import MenuMarker from './MenuMarker';

interface SidebarProps {
    display?: ResponsiveValue<string>;
}

const Sidebar = ({ display }: SidebarProps) => {
    function GetCurrentPath() {
        const location = useLocation();

        return location.pathname.split('/').filter(Boolean);
    }

    const showBreadcrumbs = useBreakpointValue({
        base: true,
        lg: false,
    });
    const location = GetCurrentPath();
    return (
        <Flex
            direction='column'
            display={display}
            h='1040px'
            borderRight='1px'
            borderColor='gray.200'
            fontSize={{ lg: '16px', base: '12px' }}
        >
            <Box p='24px 0 0 0'>
                <Box borderRadius='12px' p='10px 16px 10px 10px'>
                    {showBreadcrumbs && (
                        <Flex alignItems='center' mb='24px'>
                            <Breadcrumbs />
                        </Flex>
                    )}
                    <VStack align='stretch' spacing={0}>
                        <Accordion allowToggle>
                            {menuData.map((menuItem) => (
                                <AccordionItem key={menuItem.path} border='none'>
                                    <AccordionButton
                                        _hover={{ bg: '#ecfccb', fontWeight: '700' }}
                                        p={4}
                                        h='48px'
                                        justifyContent='space-between'
                                    >
                                        <Flex align='center' gap='8px'>
                                            {menuItem.icon && (
                                                <img src={menuItem.icon} width={24} height={24} />
                                            )}
                                            <ChakraLink
                                                as={RouterLink}
                                                to={
                                                    menuItem.path === 'vegan-cuisine'
                                                        ? `/vegan-cuisine/${menuItem.subcategory[0].path}`
                                                        : `/${menuItem.path}/${menuItem.subcategory[0].path}`
                                                }
                                                style={{
                                                    fontWeight: 500,
                                                    textDecoration: 'none',
                                                    color: 'inherit',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                {menuItem.category}
                                            </ChakraLink>
                                        </Flex>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} pl={8}>
                                        <VStack align='stretch' spacing={2}>
                                            {menuItem.subcategory.map((sub) => {
                                                const isActive =
                                                    location[location.length - 1] === sub.path;
                                                return (
                                                    <MenuMarker key={sub.path} isActive={isActive}>
                                                        <Text
                                                            as={RouterLink}
                                                            to={`/${menuItem.path}/${sub.path}`}
                                                            fontWeight={
                                                                isActive ? 'bold' : 'normal'
                                                            }
                                                        >
                                                            {sub.name}
                                                        </Text>
                                                    </MenuMarker>
                                                );
                                            })}
                                        </VStack>
                                    </AccordionPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </VStack>
                </Box>
            </Box>
            <Footer />
        </Flex>
    );
};
export default Sidebar;
