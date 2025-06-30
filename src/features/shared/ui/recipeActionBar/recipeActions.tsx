import { Badge, Button, Flex, Image, Text } from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '~/assets/customIcon/CustomIcon';

const RecipeActions = () => (
    <Flex gap='12px' mt='auto' justifyContent='center'>
        <Badge
            backgroundColor='rgba(0, 0, 0, 0.06);'
            fontSize='14px'
            borderRadius='4px'
            p='2px 8px'
            h='24px'
            w='104px'
            textTransform='none'
            fontWeight='400'
        >
            <Flex align='center' gap='8px'>
                <Image src='../../../../assets/icons/BsAlarm.svg' boxSize='16px' />
                <Text>20 минут</Text>
            </Flex>
        </Badge>
        <Button
            bg='rgba(255, 255, 255, 0.06)'
            border='1px solid rgba(0, 0, 0, 0.48)'
            borderRadius='6px'
            fontWeight='600'
            gap='3px'
            h='48px'
            w='219px'
            p='0px 24px'
            _hover={{ bg: 'gray.700' }}
        >
            <CustomSmileIcon width='14px' height='14px' />
            Оценить рецепт
        </Button>
        <Button
            bg='#b1ff2e'
            color='white'
            p='0 12px'
            _hover={{ bg: 'gray.700' }}
            borderRadius='6px'
            w='273px'
            h='48px'
            fontWeight='600'
        >
            <CustomHeartIcon width='14px' height='14px' />
            Сохранить в закладки
        </Button>
    </Flex>
);
export default RecipeActions;
