import { Badge, Button, Flex, Image, Text } from '@chakra-ui/react';

import { CustomHeartIcon, CustomSmileIcon } from '~/assets/customIcon/CustomIcon';

const RecipeActions = () => (
    <Flex
        gap='12px'
        justifyContent='center'
        flexWrap='wrap'
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems='center'
    >
        <Badge
            order={{ base: 1, lg: 0 }}
            backgroundColor='rgba(0, 0, 0, 0.06)'
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

        <Flex gap='12px' order={{ base: 2, lg: 0 }} justifyContent='center'>
            <Button
                bg='rgba(255, 255, 255, 0.06)'
                border='1px solid rgba(0, 0, 0, 0.48)'
                borderRadius='6px'
                fontWeight='600'
                gap='3px'
                h={{ '2xl': '48px', xl: '32px', base: '24px' }}
                w={{ '2xl': '219px', xl: '160px', base: '132px' }}
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
                h={{ '2xl': '48px', xl: '32px', base: '24px' }}
                w={{ '2xl': '273px', xl: '202px', base: '168px' }}
                fontWeight='600'
            >
                <CustomHeartIcon width='14px' height='14px' />
                Сохранить в закладки
            </Button>
        </Flex>
    </Flex>
);

export default RecipeActions;
