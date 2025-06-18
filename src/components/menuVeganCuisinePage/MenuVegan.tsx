import { Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';

import menuData from '../../data/DataMenu';

export const VeganMenu = () => {
    const { subcategory } = useParams();
    const navigate = useNavigate();
    const veganMenu = menuData.find((m) => m.path === 'vegan-cuisine');

    if (!veganMenu) return null;

    const tabStyles = {
        color: '#134b00',
        fontWeight: '500',
        fontSize: '16px',
        padding: '8px 16px',
        whiteSpace: 'nowrap',
        _selected: {
            borderBottom: '2px solid #2db100',
            color: '#2db100',
        },
    };

    return (
        <Flex
            mt='32px'
            mb='26px'
            borderBottom='1px solid rgba(0,0,0,0.08)'
            overflowX='auto'
            width='100%'
            justifyContent='center'
        >
            <Tabs
                variant='unstyled'
                index={veganMenu.subcategory.findIndex((s) => s.path === subcategory)}
                onChange={(index) => {
                    const newSub = veganMenu.subcategory[index];
                    navigate(`/${veganMenu.path}/${newSub.path}`);
                }}
            >
                <TabList gap='20px'>
                    {veganMenu.subcategory.map((sub) => (
                        <Tab key={sub.path} sx={tabStyles}>
                            {sub.name}
                        </Tab>
                    ))}
                </TabList>
            </Tabs>
        </Flex>
    );
};
