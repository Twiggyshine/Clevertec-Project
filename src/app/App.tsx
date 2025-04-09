import './App.css';

import { Box, Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Aside from '~/components/aside/Aside';

import Header from '../components/header/Header';
import NavPanel from '../components/nav/NavPanel';
import Sidebar from '../components/sidebar/Sidebar';
import HomePage from '../pages/mainPage';

function App() {
    return (
        <Box width='100%' display='flex' flexDirection='column' maxW='1920px'>
            <Header />

            <Flex flex='1' minH='0'>
                <Sidebar />
                <Box flex='1' display='flex' flexDirection='column' minH='0'>
                    <NavPanel />
                    <Box flex='1'>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='*' element={<HomePage />} />
                        </Routes>
                    </Box>
                </Box>

                <Aside />
            </Flex>
        </Box>
    );
}

export default App;
