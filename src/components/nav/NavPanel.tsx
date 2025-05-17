import { SearchIcon } from '@chakra-ui/icons';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

interface NavPanelProps {
    headingText?: string;
    subHeadingText?: string;
}

const NavPanel: React.FC<NavPanelProps> = ({
    headingText = 'Приятного аппетита!',
    subHeadingText,
}) => {
    const showFormControl = useBreakpointValue({ lg: true, sm: false });

    return (
        <Flex mb='32px' width={{ xl: '898px', lg: '578px', md: '480px', base: '360px' }}>
            <Flex flex='1' p='32px 0px 0px 0px' flexDirection='column' alignItems='center'>
                <Heading
                    as='h1'
                    mb='32px'
                    fontWeight='700'
                    fontSize={{ '2xl': '48px', sm: '24px' }}
                    lineHeight='100%'
                    textAlign='center'
                    color='#000'
                >
                    {headingText}
                </Heading>

                <Flex justifyContent='center'>
                    {subHeadingText && (
                        <Text
                            color='rgba(0, 0, 0, 0.48)'
                            mb='32px'
                            textAlign='center'
                            fontSize={{ lg: '16px', sm: '14px' }}
                            w={{ lg: '696px', md: '727px', sm: '328px' }}
                            lineHeight='143%'
                            fontWeight='500'
                        >
                            {subHeadingText}
                        </Text>
                    )}
                </Flex>

                <Flex
                    mb='16px'
                    justifyContent='center'
                    gap='12px'
                    w={{ lg: '518px', md: '448px', sm: '328px' }}
                >
                    <Button
                        border='1px solid rgba(0, 0, 0, 0.48)'
                        borderRadius='6px'
                        p='0px 12px'
                        w='48px'
                        h='48px'
                    ></Button>

                    <InputGroup>
                        <Input
                            placeholder='Название или ингредиент...'
                            borderRadius='6px'
                            pr='40px'
                            border='1px solid rgba(0, 0, 0, 0.48)'
                            h='48px'
                            fontSize='18px'
                            _placeholder={{ color: '#134b00' }}
                        />
                        <InputRightElement pointerEvents='none' alignItems='center' h='48px'>
                            <SearchIcon color='black' />
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                {showFormControl && (
                    <FormControl
                        as={Flex}
                        alignItems='center'
                        justifyContent='center'
                        w={{ lg: '518px' }}
                    >
                        <FormLabel
                            htmlFor='allergens-toggle'
                            fontWeight='500'
                            fontSize='16px'
                            lineHeight='150%'
                            color='#000'
                        >
                            Исключить мои аллергены
                        </FormLabel>
                        <Switch id='allergens-toggle' colorScheme='green' size='lg' mr='12px' />

                        <Select
                            id='diet-filter'
                            placeholder='Выберите из списка...'
                            border='1px solid rgba(0, 0, 0, 0.48)'
                            borderRadius='6px'
                            w='100%'
                            h='40px'
                            bg='#fff'
                            color='rgba(0, 0, 0, 0.64)'
                        >
                            <option value='option1'>Без глютена</option>
                            <option value='option2'>Без лактозы</option>
                            <option value='option3'>Вегетарианские</option>
                            <option value='option4'>Веганские</option>
                        </Select>
                    </FormControl>
                )}
            </Flex>
        </Flex>
    );
};

export default NavPanel;
