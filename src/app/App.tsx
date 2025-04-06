import './App.css';

import { Box, Flex } from '@chakra-ui/react';

import Aside from '~/components/aside/Aside';

import Header from '../components/header/Header';
import NavPanel from '../components/nav/NavPanel';
import Sidebar from '../components/sidebar/Sidebar';

function App() {
    return (
        <Box h='100vh' display='flex' flexDirection='column'>
            <Header />

            <Flex flex='1' minH='0'>
                {/* Левое меню */}
                <Sidebar />

                <NavPanel />
                <Box flex='1' overflowY='auto'></Box>

                <Aside />
            </Flex>
        </Box>
    );
}

export default App;
