import { SearchIcon } from '@chakra-ui/icons';
import {
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Switch,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import DrawerAllergens from './DrawerAllergens';
import SelectFiltr from './SelectAllergen';

interface NavPanelProps {
    headingText?: string;
    subHeadingText?: string;
}

const NavPanel: React.FC<NavPanelProps> = ({
    headingText = 'Приятного аппетита!',
    subHeadingText,
}) => {
    const [excludeAllergens, setExcludeAllergens] = useState(false);

    const [diets, setDiets] = useState<string[]>([]);
    const showFormControl = useBreakpointValue({ lg: true, sm: false });

    return (
        <Flex mb='32px' width={{ xl: '898px', lg: '578px', md: '100%', sm: '360px' }}>
            <Flex flex='1' p='32px 0px 0px 0px' flexDirection='column' alignItems='center'>
                <Heading
                    as='h1'
                    mb='32px'
                    fontWeight='700'
                    fontSize={{ lg: '48px', base: '24px' }}
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
                            w={{ lg: '696px', md: '100%', sm: '328px' }}
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
                    <DrawerAllergens
                        excludeAllergens={excludeAllergens}
                        setExcludeAllergens={setExcludeAllergens}
                        diets={diets}
                        setDiets={setDiets}
                    />

                    <InputGroup>
                        <Input
                            placeholder='Название или ингредиент...'
                            borderRadius='6px'
                            border='1px solid rgba(0, 0, 0, 0.48)'
                            name='search-input'
                            h={{ md: '48px', sm: '32px' }}
                            fontSize={{ md: '18px', sm: '14px' }}
                            _placeholder={{ color: '#134b00' }}
                        />
                        <InputRightElement
                            pointerEvents='none'
                            alignItems='center'
                            h={{ md: '48px', sm: '32px' }}
                        >
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
                            fontSize='12px'
                            lineHeight='150%'
                            color='#000'
                        >
                            Исключить мои аллергены
                        </FormLabel>

                        <Switch
                            id='allergens-toggle'
                            colorScheme='green'
                            size='lg'
                            mr='12px'
                            isChecked={excludeAllergens}
                            onChange={(event) => setExcludeAllergens(event.target.checked)}
                        />
                        <SelectFiltr
                            excludeAllergens={excludeAllergens}
                            value={diets}
                            onChange={setDiets}
                        />
                    </FormControl>
                )}
            </Flex>
        </Flex>
    );
};

export default NavPanel;
