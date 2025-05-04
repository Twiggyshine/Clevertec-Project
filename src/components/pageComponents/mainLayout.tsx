import { Box, Flex } from '@chakra-ui/react';

import Aside from '../aside/Aside';
import Header from '../header/Header';
import NavPanel from '../nav/NavPanel';
import Sidebar from '../sidebar/Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => (
    <Box as='main' width='100%' display='flex' flexDirection='column'>
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
