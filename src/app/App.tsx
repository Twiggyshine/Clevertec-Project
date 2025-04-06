import './App.css';

import { Box, Flex } from '@chakra-ui/react';

import Aside from '~/components/aside/Aside';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

function App() {
    return (
        <Box className='app' h='100vh' display='flex' flexDirection='column'>
            <Header />

            <Flex flex='1' minH='0'>
                {/* Левое меню */}
                <Sidebar />

                {/* Центральная часть (единственный скроллящийся элемент) */}
                <Box flex='1' overflowY='auto' p='24px'>
                    {/* основной контент */}
                </Box>

                <Aside />
            </Flex>
        </Box>
    );
}

export default App;
