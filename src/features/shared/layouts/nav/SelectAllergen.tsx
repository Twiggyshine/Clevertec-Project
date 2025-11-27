import { ChevronDownIcon } from '@chakra-ui/icons';
// import {
//     Button,
//     Checkbox,
//     CheckboxGroup,
//     CheckboxProps,
//     HStack,
//     Menu,
//     MenuButton,
//     MenuList,
//     Tag,
//     VStack,
// } from '@chakra-ui/react';
import {
    Button,
    Checkbox,
    CheckboxGroup,
    CheckboxProps,
    HStack,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Tag,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { SearchInput } from './SearchInput';

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

export const StyledCheckbox = (props: CheckboxProps) => (
    <Checkbox
        {...props}
        sx={{
            '.chakra-checkbox__control': {
                _checked: { bg: '#b1ff2e' },
                borderRadius: '2px',
                p: 2,
                colorScheme: 'red',
                border: '1px solid #b1ff2e',
            },
        }}
    />
);

// export default function SelectFiltr({ excludeAllergens, value, onChange }: DietSelectProps) {
//     const [allergens, setAllergens] = useState<string[]>(defaultAllergens);
//     const [inputValue, setInputValue] = useState('');

//     const addNewAllergen = () => {
//         const trimmed = inputValue.trim();

//         if (!trimmed) return;
//         if (allergens.includes(trimmed)) {
//             // Если такой аллерген уже есть — просто выбрать его
//             onChange([...value, trimmed]);
//             setInputValue('');
//             return;
//         }

//         // Добавляем в начало массива пользовательский аллерген
//         const updated = [trimmed, ...allergens];
//         setAllergens(updated);

//         // Добавить в выбранные
//         onChange([...value, trimmed]);

//         setInputValue('');
//     };

//     return (
//         <Menu closeOnSelect={false}>
//             {({ isOpen }) => (
//                 <>
//                     <MenuButton
//                         as={Button}
//                         w='100%'
//                         minH='40px'
//                         h='auto'
//                         border='1px solid rgba(0, 0, 0, 0.48)'
//                         borderRadius='6px'
//                         bg='#fff'
//                         color='rgba(0, 0, 0, 0.64)'
//                         isDisabled={!excludeAllergens}
//                         textAlign='left'
//                         _hover={{ bg: '#fff' }}
//                         _active={{ bg: '#fff' }}
//                         rightIcon={
//                             <ChevronDownIcon
//                                 transform={isOpen ? 'rotate(180deg)' : 'rotate(0)'}
//                                 transition='transform 0.2s ease-in-out'
//                                 boxSize={5}
//                             />
//                         }
//                     >
//                         {value.length === 0 ? (
//                             'Выберите из списка...'
//                         ) : (
//                             <HStack wrap='wrap' spacing={2} alignItems='flex-start' w='100%'>
//                                 {value.map((item) => (
//                                     <Tag
//                                         key={item}
//                                         lineHeight='133%'
//                                         fontWeight='500'
//                                         fontSize='12px'
//                                         textColor='#2db100'
//                                         border='1px solid #b1ff2e'
//                                         padding='0px 8px'
//                                         h='20px'
//                                         bg='#FFF'
//                                     >
//                                         {item}
//                                     </Tag>
//                                 ))}
//                             </HStack>
//                         )}
//                     </MenuButton>

//                     <MenuList w='320px' zIndex='modal'>
//                         <CheckboxGroup value={value} onChange={onChange}>
//                             <VStack align='start' spacing='12px' p='16px'>
//                                 {allergens.map((element) => (
//                                     <StyledCheckbox key={element} value={element}>
//                                         {element}
//                                     </StyledCheckbox>
//                                 ))}
//                             </VStack>
//                         </CheckboxGroup>

//                         <SearchInput
//                             value={inputValue}
//                             onChange={setInputValue}
//                             onAdd={addNewAllergen}
//                         />
//                     </MenuList>
//                 </>
//             )}
//         </Menu>
//     );
// }

export default function SelectAllergen({ excludeAllergens, value, onChange }: DietSelectProps) {
    const [allergens, setAllergens] = useState<string[]>(defaultAllergens);
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

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
        <Popover
            isOpen={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            placement='bottom-start'
        >
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
                            {value.map((item) => (
                                <Tag
                                    key={item}
                                    lineHeight='133%'
                                    fontWeight='500'
                                    fontSize='12px'
                                    textColor='#2db100'
                                    border='1px solid #b1ff2e'
                                    padding='0px 8px'
                                    h='20px'
                                    bg='#FFF'
                                >
                                    {item}
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
