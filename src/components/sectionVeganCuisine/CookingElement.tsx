import { Box, Button, Flex, Text } from '@chakra-ui/react';

interface CustomInputProps {
    text: string;
    icon?: React.ReactElement;
}

export const CustomInput: React.FC<CustomInputProps> = ({ text, icon }) => (
    <Box
        fontSize='20px'
        lineHeight='140%'
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius='8px'
        height='100%'
        pl='24px'
        pr='24px'
    >
        <Flex align='center' height='100%'>
            {icon && (
                <Box display='flex' alignItems='center'>
                    {icon}
                </Box>
            )}

            <Text fontWeight='500' fontSize='20px' pl='12px' width='100%' color='#000'>
                {text}
            </Text>

            <Button
                w='87px'
                h='32px'
                color='#2db100'
                fontSize='14px'
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
