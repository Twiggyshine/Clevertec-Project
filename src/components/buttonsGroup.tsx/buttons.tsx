import { Button, Flex } from '@chakra-ui/react';

import { CustomHeartIcon } from '../../assets/customIcon/CustomIcon';

const ButtonsGroup = () => (
    <Flex gap='8px' mt='auto' justifyContent='flex-end'>
        <Button
            variant='outline'
            size='sm'
            leftIcon={<CustomHeartIcon width='14px' height='14px' />}
        >
            Сохранить
        </Button>
        <Button bg='black' color='white' size='sm' _hover={{ bg: 'gray.700' }}>
            Готовить
        </Button>
    </Flex>
);
export default ButtonsGroup;
