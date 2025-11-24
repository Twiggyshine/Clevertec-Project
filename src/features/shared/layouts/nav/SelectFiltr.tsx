import {
    Button,
    Checkbox,
    CheckboxGroup,
    CheckboxProps,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    Portal,
    Tag,
    VStack,
} from '@chakra-ui/react';

interface DietSelectProps {
    excludeAllergens: boolean;
    value: string[];
    onChange: (values: string[]) => void;
}

const StyledCheckbox = (props: CheckboxProps) => (
    <Checkbox
        {...props}
        sx={{
            '.chakra-checkbox__control': {
                _checked: { bg: '#b1ff2e' },
                borderRadius: '2px',
                p: 2,
                colorScheme: 'red',
            },
        }}
    />
);

export default function SelectFiltr({ excludeAllergens, value, onChange }: DietSelectProps) {
    return (
        <Menu closeOnSelect={false}>
            <MenuButton
                as={Button}
                id='diet-filter'
                w='100%'
                minH='40px'
                h='auto'
                border='1px solid rgba(0, 0, 0, 0.48)'
                borderRadius='6px'
                bg='#fff'
                color='rgba(0, 0, 0, 0.64)'
                isDisabled={!excludeAllergens}
                textAlign='left'
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
                            >
                                {item}
                            </Tag>
                        ))}
                    </HStack>
                )}
            </MenuButton>
            <Portal>
                <MenuList minW='100%'>
                    <CheckboxGroup value={value} onChange={onChange}>
                        <VStack align='start' spacing={2}>
                            <StyledCheckbox value='Молочные продукты'>
                                Молочные продукты
                            </StyledCheckbox>
                            <StyledCheckbox value='Яйцо'>Яйцо</StyledCheckbox>
                            <StyledCheckbox value='Рыба'>Рыба</StyledCheckbox>
                            <StyledCheckbox value='Моллюски'>Моллюски</StyledCheckbox>
                            <StyledCheckbox value='Орехи'>Орехи</StyledCheckbox>
                            <StyledCheckbox value='Томат'>Томат(помидор)</StyledCheckbox>
                            <StyledCheckbox value='Цитрусовые'>Цитрусовые</StyledCheckbox>
                            <StyledCheckbox value='Клубника'>Клубника(ягоды)</StyledCheckbox>
                            <StyledCheckbox value='Шоколад'>Шоколад</StyledCheckbox>
                        </VStack>
                    </CheckboxGroup>
                </MenuList>
            </Portal>
        </Menu>
    );
}
