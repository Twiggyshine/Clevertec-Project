import { Box, Flex } from '@chakra-ui/react';

import Aside from '~/components/aside/Aside';

import Header from '../components/header/Header';
import { VeganMenu } from '../components/menuVeganCuisinePage/MenuVegan';
import NavPanel from '../components/nav/NavPanel';
import Sidebar from '../components/sidebar/Sidebar';

function veganCuisinePage() {
    return (
        <Box width='100%' display='flex' flexDirection='column' maxW='1920px'>
            <Header />

            <Flex flex='1' minH='0'>
                <Sidebar />
                <Box flex='1' display='flex' flexDirection='column' minH='0' alignItems='center'>
                    <NavPanel
                        headingText='Веганская кухня'
                        subHeadingText='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                    />
                    <VeganMenu />
                </Box>
                <Aside />
            </Flex>
        </Box>
    );
}

export default veganCuisinePage;
