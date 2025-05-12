import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';

import Aside from '../aside/Aside';
import Header from '../header/Header';
import RespFooter from '../responsiveFooter/respFooter';
import Sidebar from '../sidebar/Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
    const showFooter = useBreakpointValue({
        base: true, // 360px+
        lg: false, // скрывать на 1024px+
    });

    const showSidebar = useBreakpointValue({
        base: false, // 360px+
        lg: true, // скрывать на 1024px+
    });

    const showAside = useBreakpointValue({
        base: false, // 360px+
        lg: true, // скрывать на 1024px+
    });
    return (
        <Box as='main' width='100%' display='flex' flexDirection='column'>
            <Header />
            <Flex flex='1' minH='0'>
                {showSidebar && <Sidebar />}
                <Box flex='1' display='flex' flexDirection='column' minH='0'>
                    <Box flex='1'>{children}</Box>
                </Box>
                {showAside && <Aside />}
            </Flex>
            {showFooter && <RespFooter data-test-id='footer' />}
        </Box>
    );
};

export default MainLayout;
