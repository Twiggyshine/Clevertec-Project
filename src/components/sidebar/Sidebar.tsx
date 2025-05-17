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

import menuData from '../../data/DataMenu';
import Footer from '../footer/Footer';
import MenuMarker from './MenuMarker';

const Sidebar = () => (
    <Flex
        direction='column'
        display={{ lg: 'flex', base: 'none' }}
        w='256px'
        h='1040px'
        borderRight='1px'
        borderColor='gray.200'
        bg='white'
        boxShadow='sm'
    >
        <Box p='24px 0 0 0'>
            <Box borderRadius='12px' p='10px 16px 10px 10px' w='100%' maxW='256px'>
                <VStack align='stretch' spacing={0}>
                    <Accordion allowToggle>
                        {menuData.map((menuElement, index) => (
                            <AccordionItem key={index} border='none'>
                                <AccordionButton
                                    _hover={{ bg: '#ecfccb', fontWeight: '700' }}
                                    p={4}
                                    h='48px'
                                    justifyContent='space-between'
                                >
                                    <Flex align='center' gap='8px'>
                                        {menuElement.icon && (
                                            <img
                                                src={menuElement.icon}
                                                data-w='24px'
                                                data-h='24px'
                                                data-mr={2}
                                            />
                                        )}
                                        <ChakraLink
                                            as={RouterLink}
                                            to='/veganCuisinePage'
                                            style={{
                                                fontWeight: 500,
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {menuElement.title}
                                        </ChakraLink>
                                    </Flex>
                                    <AccordionIcon />
                                </AccordionButton>
                                {menuElement.subcategory.length > 0 && (
                                    <AccordionPanel pb={4} pl={8} pt={0}>
                                        <VStack align='stretch' spacing={2}>
                                            {menuElement.subcategory.map(
                                                (subMenuElement, subIndex) => (
                                                    <MenuMarker key={subIndex}>
                                                        <ChakraLink
                                                            as={RouterLink}
                                                            to='/veganCuisinePage'
                                                            style={{
                                                                textDecoration: 'none',
                                                                color: 'inherit',
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            {subMenuElement}
                                                        </ChakraLink>
                                                    </MenuMarker>
                                                ),
                                            )}
                                        </VStack>
                                    </AccordionPanel>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </VStack>
            </Box>
        </Box>
        <Footer />
    </Flex>
);

export default Sidebar;
