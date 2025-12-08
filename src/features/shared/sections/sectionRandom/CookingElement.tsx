import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

import * as ImgCards from '~/assets/menuIcons/index';

interface CustomInputProps {
    text: string;
    category?: string;
}

const categoryIcons: Record<string, keyof typeof ImgCards> = {
    'first-dish': 'FirstDishIcon',
    vegan: 'VeganIcon',
    desserts: 'DessertsIcon',
    salads: 'SaladsIcon',
    'second-dish': 'SecondDishIcon',
    national: 'NationalIcon',
    children: 'ChildrenIcon',
    grill: 'GrillIcon',
};

export const CustomInput: React.FC<CustomInputProps> = ({ text, category }) => {
    const iconKey = category ? categoryIcons[category] : undefined;
    const iconSrc = iconKey ? ImgCards[iconKey] : undefined;

    return (
        <Box
            fontSize='20px'
            lineHeight='140%'
            border='1px solid'
            borderColor='blackAlpha.200'
            borderRadius='8px'
            height='100%'
            pl='24px'
            pr='24px'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                background: '#fff',
                transition: 'all 0.3s ease',
            }}
        >
            <Flex align='center' height='100%'>
                {iconSrc && <Image src={iconSrc} boxSize='20px' alt={category || 'icon'} />}

                <Text
                    fontWeight='500'
                    fontSize={{ '3xl': '20px', xl: '18px' }}
                    pl='12px'
                    width='100%'
                    color='#000'
                    noOfLines={{ sm: 1 }}
                >
                    {text}
                </Text>

                <Button
                    h='32px'
                    color='#2db100'
                    fontSize={{ '3xl': '14px', sm: '12px' }}
                    fontWeight='500'
                    border='1px solid #2db100'
                    borderRadius='6px'
                    bg='none'
                    p='0 12px'
                    _hover={{ bg: '#2db100', color: 'white' }}
                >
                    Готовить
                </Button>
            </Flex>
        </Box>
    );
};
