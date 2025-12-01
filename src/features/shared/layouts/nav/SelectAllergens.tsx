import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Button,
    CheckboxGroup,
    HStack,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Tag,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { SearchInput } from './SearchInput';
import { StyledCheckbox } from './StyledCheckbox';

interface DietSelectProps {
    excludeAllergens: boolean;
    value: string[];
    onChange: (values: string[]) => void;
}

const defaultAllergens = [
    'Молочные продукты',
    'Яйцо',
    'Рыба',
    'Моллюски',
    'Орехи',
    'Томат',
    'Цитрусовые',
    'Клубника',
    'Шоколад',
];

export default function SelectAllergen({ excludeAllergens, value, onChange }: DietSelectProps) {
    const [allergens, setAllergens] = useState<string[]>(defaultAllergens);
    const [inputValue, setInputValue] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const addNewAllergen = () => {
        const trimmed = inputValue.trim();

        if (!trimmed) return;

        if (allergens.includes(trimmed)) {
            onChange([...value, trimmed]);
            setInputValue('');
            return;
        }

        const updated = [trimmed, ...allergens];
        setAllergens(updated);
        onChange([...value, trimmed]);
        setInputValue('');
    };

    return (
        <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} placement='bottom-start'>
            <PopoverTrigger>
                <Button
                    w='100%'
                    minH='40px'
                    h='auto'
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    borderRadius='6px'
                    bg='#fff'
                    p='10px 16px'
                    overflow='auto'
                    color='rgba(0, 0, 0, 0.64)'
                    isDisabled={!excludeAllergens}
                    justifyContent='space-between'
                    rightIcon={
                        <ChevronDownIcon
                            transform={isOpen ? 'rotate(180deg)' : 'rotate(0)'}
                            transition='transform 0.2s ease-in-out'
                            boxSize={5}
                        />
                    }
                >
                    {value.length === 0 ? (
                        'Выберите из списка...'
                    ) : (
                        <HStack wrap='wrap' spacing={2} alignItems='flex-start' w='100%'>
                            {value.map((el) => (
                                <Tag
                                    key={el}
                                    lineHeight='133%'
                                    fontWeight='500'
                                    fontSize='12px'
                                    textColor='#2db100'
                                    border='1px solid #b1ff2e'
                                    padding='0px 8px'
                                    h='20px'
                                    bg='#FFF'
                                >
                                    {el}
                                </Tag>
                            ))}
                        </HStack>
                    )}
                </Button>
            </PopoverTrigger>

            <PopoverContent w='320px'>
                <PopoverArrow />

                <PopoverBody>
                    <CheckboxGroup value={value} onChange={onChange}>
                        <VStack
                            align='start'
                            spacing='12px'
                            mb='12px'
                            maxH='180px'
                            overflowY='auto'
                            pr='8px'
                        >
                            {allergens.map((element) => (
                                <StyledCheckbox key={element} value={element}>
                                    {element}
                                </StyledCheckbox>
                            ))}
                        </VStack>
                    </CheckboxGroup>
                    <SearchInput
                        value={inputValue}
                        onChange={setInputValue}
                        onAdd={addNewAllergen}
                    />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
