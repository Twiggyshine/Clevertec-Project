import { Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

const tabStyles = {
    color: '#134b00',
    fontWeight: '500',
    fontSize: '16px',
    padding: '8px 16px',
    whiteSpace: 'nowrap',
    _hover: {
        textDecoration: 'underline',
        color: '#2db100',
    },
    _active: {
        color: '#2db100',
    },
};

export const VeganMenu = () => (
    <Flex
        mt='32px'
        mb='26px'
        borderBottom='1px solid rgba(0, 0, 0, 0.08)'
        justify={{ '3xl': 'center' }}
        overflowX='auto'
    >
        <Tabs variant='unstyled'>
            <TabList gap='20px'>
                <Tab as={RouterLink} to='/veganCuisinePage/Закуски' sx={tabStyles}>
                    Закуски
                </Tab>
                <Tab as={RouterLink} to='/veganCuisinePage/Первые блюда' sx={tabStyles}>
                    Первые блюда
                </Tab>
                <Tab as={RouterLink} to='/veganCuisinePage/Вторые блюда' sx={tabStyles}>
                    Вторые блюда
                </Tab>
                <Tab as={RouterLink} to='/veganCuisinePage/Гарниры' sx={tabStyles}>
                    Гарниры
                </Tab>
                <Tab as={RouterLink} to='/veganCuisinePage/Десерты' sx={tabStyles}>
                    Десерты
                </Tab>
                <Tab as={RouterLink} to='/veganCuisinePage/Выпечка' sx={tabStyles}>
                    Выпечка
                </Tab>
                <Tab as={RouterLink} to='/veganCuisinePage/Сыроедческие блюда' sx={tabStyles}>
                    Сыроедческие блюда
                </Tab>
                <Tab as={RouterLink} to='/veganCuisinePage/Напитки' sx={tabStyles}>
                    Напитки
                </Tab>
            </TabList>
        </Tabs>
    </Flex>
);
