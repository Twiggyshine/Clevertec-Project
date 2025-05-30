import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    VStack,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';
import { useParams } from 'react-router';

import menuData from '../../data/DataMenu';
import Footer from '../footer/Footer';
import MenuMarker from './MenuMarker';

const Sidebar = () => {
    const { category, subcategory } = useParams();

    return (
        <Flex
            direction='column'
            display={{ xl: 'flex', base: 'none' }}
            w='256px'
            h='1040px'
            borderRight='1px'
            borderColor='gray.200'
        >
            <Box p='24px 0 0 0'>
                <Box borderRadius='12px' p='10px 16px 10px 10px' w='100%' maxW='256px'>
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
                                            {menuItem.subcategory.map((sub) => (
                                                <MenuMarker
                                                    key={sub.path}
                                                    isActive={
                                                        category === menuItem.path &&
                                                        subcategory === sub.path
                                                    }
                                                >
                                                    <ChakraLink
                                                        as={RouterLink}
                                                        to={`/${menuItem.path}/${sub.path}`}
                                                    >
                                                        {sub.name}
                                                    </ChakraLink>
                                                </MenuMarker>
                                            ))}
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
