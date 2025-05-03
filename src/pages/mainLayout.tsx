import { Box, Flex } from '@chakra-ui/react';

import Aside from '~/components/aside/Aside';

import Header from '../components/header/Header';
import NavPanel from '../components/nav/NavPanel';
import Sidebar from '../components/sidebar/Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => (
    <Box as='main' width='100%' display='flex' flexDirection='column' pl={6}>
        <Header />
        <Flex flex='1' minH='0'>
            <Sidebar />
            <Box flex='1' display='flex' flexDirection='column' minH='0'>
                <NavPanel />
                <Box flex='1'>{children}</Box>
            </Box>
            <Aside />
        </Flex>
    </Box>
);

export default MainLayout;
