import {
    Box,
    Button,
    CheckboxGroup,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Switch,
    Text,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../../store/configure-store';
import {
    applyFilters,
    resetFilters,
    setAuthors,
    setCategories,
    setDiets,
    setExcludeAllergens,
    setMeats,
    setSides,
} from '../../../../store/filters-slice';
import BaseSelect from './BaseSelect';
import SelectFiltr from './SelectAllergens';
import { StyledCheckbox } from './StyledCheckbox';

const DrawerAllergens = () => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const filters = useSelector((state: RootState) => state.filters);

    const isButtonDisabled =
        filters.categories.length === 0 &&
        filters.authors.length === 0 &&
        filters.meats.length === 0 &&
        filters.sides.length === 0 &&
        !filters.excludeAllergens &&
        filters.diets.length === 0;

    const handleApply = () => {
        dispatch(applyFilters());
        onClose();
    };

    const handleReset = () => {
        dispatch(resetFilters());
    };

    return (
        <>
            <Button
                px='24px'
                border='1px solid rgba(0, 0, 0, 0.48)'
                borderRadius='6px'
                p='0px 12px'
                h={{ md: '48px', sm: '32px' }}
                onClick={onOpen}
            >
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M9 15.75C9 15.5511 9.07902 15.3603 9.21967 15.2197C9.36032 15.079 9.55109 15 9.75 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H9.75C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75ZM6 11.25C6 11.0511 6.07902 10.8603 6.21967 10.7197C6.36032 10.579 6.55109 10.5 6.75 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H6.75C6.55109 12 6.36032 11.921 6.21967 11.7803C6.07902 11.6397 6 11.4489 6 11.25ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z'
                        fill='black'
                    />
                </svg>
            </Button>

            <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='sm'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton
                        bg='black'
                        color='white'
                        borderRadius='50%'
                        boxSize='24px'
                        _hover={{ bg: 'gray.800' }}
                        _active={{ bg: 'gray.900' }}
                    />
                    <DrawerHeader>Фильтр</DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={6} align='stretch'>
                            <BaseSelect
                                label='Категория'
                                options={['Категория 1', 'Категория 2', 'Категория 3']}
                                value={filters.categories}
                                onChange={(v) => dispatch(setCategories(v))}
                            />

                            <BaseSelect
                                label='Автор'
                                options={['Высоцкая', 'Обломов', 'Ивлев']}
                                value={filters.authors}
                                onChange={(v) => dispatch(setAuthors(v))}
                            />

                            <Box>
                                <Text fontWeight='bold' mb={2}>
                                    Тип мяса:
                                </Text>
                                <CheckboxGroup
                                    value={filters.meats}
                                    onChange={(values) => dispatch(setMeats(values as string[]))}
                                >
                                    <VStack align='start' spacing={2}>
                                        <StyledCheckbox value='chicken'>Курица</StyledCheckbox>
                                        <StyledCheckbox value='pork'>Свинина</StyledCheckbox>
                                        <StyledCheckbox value='beef'>Говядина</StyledCheckbox>
                                        <StyledCheckbox value='turkey'>Индейка</StyledCheckbox>
                                        <StyledCheckbox value='duck'>Утка</StyledCheckbox>
                                    </VStack>
                                </CheckboxGroup>
                            </Box>

                            <Box>
                                <Text fontWeight='bold' mb={2}>
                                    Тип гарнира:
                                </Text>
                                <CheckboxGroup
                                    value={filters.sides}
                                    onChange={(values) => dispatch(setSides(values as string[]))}
                                >
                                    <VStack align='start' spacing={2}>
                                        <StyledCheckbox value='potato'>Картошка</StyledCheckbox>
                                        <StyledCheckbox value='buckwheat'>Гречка</StyledCheckbox>
                                        <StyledCheckbox value='pasta'>Паста</StyledCheckbox>
                                        <StyledCheckbox value='spaghetti'>Спагетти</StyledCheckbox>
                                        <StyledCheckbox value='rice'>Рис</StyledCheckbox>
                                        <StyledCheckbox value='cabbage'>Капуста</StyledCheckbox>
                                        <StyledCheckbox value='beans'>Фасоль</StyledCheckbox>
                                        <StyledCheckbox value='other_vegetables'>
                                            Другие овощи
                                        </StyledCheckbox>
                                    </VStack>
                                </CheckboxGroup>
                            </Box>

                            <VStack spacing={2} align='start'>
                                <Flex alignItems='center' gap='12px'>
                                    <Text fontWeight='bold' mb={2}>
                                        Исключить аллергены
                                    </Text>

                                    <Switch
                                        id='allergens-toggle-drawer'
                                        colorScheme='green'
                                        size='lg'
                                        mr='12px'
                                        isChecked={filters.excludeAllergens}
                                        onChange={(e) =>
                                            dispatch(setExcludeAllergens(e.target.checked))
                                        }
                                    />
                                </Flex>

                                <SelectFiltr
                                    excludeAllergens={filters.excludeAllergens}
                                    value={filters.diets}
                                    onChange={(v) => dispatch(setDiets(v))}
                                />
                            </VStack>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter display='flex' justifyContent='center' gap='12px'>
                        <Button
                            w='205px'
                            variant='outline'
                            borderColor='rgba(0, 0, 0, 0.48)'
                            fontSize='14px'
                            onClick={handleReset}
                        >
                            Очистить фильтр
                        </Button>

                        <Button
                            w='172px'
                            bg='black'
                            color='white'
                            _hover={{ bg: 'gray.700' }}
                            fontSize='14px'
                            onClick={handleApply}
                            isDisabled={isButtonDisabled}
                        >
                            Найти рецепт
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default DrawerAllergens;
