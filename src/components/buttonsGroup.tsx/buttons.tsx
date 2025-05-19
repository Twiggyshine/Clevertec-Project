import { Button, Flex, useBreakpointValue } from '@chakra-ui/react';

import { CustomHeartIcon } from '../../assets/customIcon/CustomIcon';

const ButtonsGroup = () => {
    const showSaveText = useBreakpointValue({ base: false, lg: true });

    return (
        <Flex gap='12px' mt='auto' justifyContent='flex-end'>
            <Button
                variant='ghost'
                border='1px solid black'
                minW={showSaveText ? '122px' : '24px'}
                h={{ lg: '32px', base: '24px' }}
                borderRadius='6px'
                p={showSaveText ? '0 12px' : '0px'}
                fontSize={{ lg: '14px', base: '12px' }}
                fontWeight='600'
                gap='3px'
            >
                <CustomHeartIcon width='14px' height='14px' />
                {showSaveText && 'Сохранить'}
            </Button>
            <Button
                bg='black'
                color='white'
                p='0 12px'
                _hover={{ bg: 'gray.700' }}
                borderRadius='6px'
                w='87px'
                h={{ lg: '32px', base: '24px' }}
                fontSize={{ lg: '14px', base: '12px' }}
                fontWeight='600'
            >
                Готовить
            </Button>
        </Flex>
    );
};
export default ButtonsGroup;
