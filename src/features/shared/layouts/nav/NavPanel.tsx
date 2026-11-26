import { SearchIcon } from '@chakra-ui/icons';
import {
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Switch,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';


import React, { useEffect, useState } 

import { setAllergens, setExcludeAllergens, setSearch } from '~/store/filters-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

import DrawerAllergens from './DrawerAllergens';
import SelectFiltr from './SelectAllergens';

interface NavPanelProps {
    headingText?: string;
    subHeadingText?: string;
    searchable?: boolean;
}

const NavPanel: React.FC<NavPanelProps> = ({
    headingText = 'Приятного аппетита!',
    subHeadingText,
    searchable = false,
}) => {
    const dispatch = useAppDispatch();
    const { excludeAllergens, allergens } = useAppSelector((state) => state.filters);
    const showFormControl = useBreakpointValue({ lg: true, sm: false });


        const [searchText, setSearchText] = useState('');
    const isSearchReady = searchText.trim().length >= 3;

    useEffect(
        () => () => {
            dispatch(setSearch(''));
        },
        [dispatch],
    );

    const handleSearchChange = (value: string) => {
        setSearchText(value);
        if (value.trim() === '') dispatch(setSearch(''));
    };

    const handleSearch = () => {
        if (isSearchReady) dispatch(setSearch(searchText.trim()));
    };
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
                    <DrawerAllergens />
{searchable && (
    <InputGroup>
        <Input
            placeholder='Название рецепта...'
            borderRadius='6px'
            border='1px solid rgba(0, 0, 0, 0.48)'
            name='search-input'
            h={{ md: '48px', sm: '32px' }}
            fontSize={{ md: '18px', sm: '14px' }}
            _placeholder={{ color: '#134b00' }}
            value={searchText}
            onChange={(e) => handleSearchChange(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch();
                }
            }}
        />
        <InputRightElement h={{ md: '48px', sm: '32px' }}>
            <IconButton
                aria-label='Найти рецепт'
                icon={<SearchIcon />}
                variant='ghost'
                size='sm'
                onClick={handleSearch}
                isDisabled={!isSearchReady}
            />
        </InputRightElement>
    </InputGroup>
)}

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
                            onChange={(event) =>
                                dispatch(setExcludeAllergens(event.target.checked))
                            }
                        />
                        <SelectFiltr
                            excludeAllergens={excludeAllergens}
                            value={allergens}
                            onChange={(values) => dispatch(setAllergens(values))}
                        />
                    </FormControl>
                )}
            </Flex>
        </Flex>
    );
};

export default NavPanel;
