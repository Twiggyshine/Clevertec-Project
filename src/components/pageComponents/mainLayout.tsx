import { Box, HStack, useBreakpointValue, VStack } from '@chakra-ui/react';

import Aside from '../aside/Aside';
import Header from '../header/Header';
import RespFooter from '../responsiveFooter/respFooter';
import Sidebar from '../sidebar/Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
    const showFooter = useBreakpointValue({
        base: true,
        lg: false,
    });
    return (
        <VStack w='100vw'>
            <Header />
            <HStack w='100%' mt='80px' alignItems='flex-start'>
                <Sidebar />
                <Box w={{ base: '100%', xl: '63%', '3xl': '73%' }}>{children}</Box>
                <Aside />
            </HStack>
            {showFooter && <RespFooter data-test-id='footer' />}
        </VStack>
    );
};
export default MainLayout;
