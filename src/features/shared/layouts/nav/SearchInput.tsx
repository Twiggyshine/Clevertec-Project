import { Button, Flex, Input, InputGroup } from '@chakra-ui/react';

import AddButton from '~/assets/icons/AddButton.svg';

interface Props {
    value: string;
    onChange: (v: string) => void;
    onAdd: () => void;
}

export function SearchInput({ value, onChange, onAdd }: Props) {
    return (
        <Flex p='10px 10px 10px 24px' gap='8px'>
            <InputGroup>
                <Input
                    type='text'
                    placeholder='Поиск...'
                    pl='10'
                    color='#134b00'
                    id='allergen-search-input'
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && onAdd()}
                />
            </InputGroup>

            <Button
                bg='transparent'
                p='0'
                onClick={onAdd}
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                <img src={AddButton} style={{ width: '20px', height: '20px' }} />
            </Button>
        </Flex>
    );
}
