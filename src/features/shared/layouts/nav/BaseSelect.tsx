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

import { StyledCheckbox } from './StyledCheckbox';

export default function BaseSelect({
    label = 'Выберите из списка...',
    options,
    value,
    onChange,
}: {
    label?: string;
    options: string[];
    value: string[];
    onChange: (v: string[]) => void;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <PopoverTrigger>
                <Button
                    w='100%'
                    minH='40px'
                    h='auto'
                    border='1px solid rgba(0,0,0,0.48)'
                    borderRadius='6px'
                    bg='#fff'
                    p='10px 16px'
                    overflow='auto'
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
                        label
                    ) : (
                        <HStack wrap='wrap' spacing={2} alignItems='flex-start' w='100%'>
                            {value.map((element) => (
                                <Tag key={element} fontSize='12px' bg='#FFF' borderRadius='4px'>
                                    {element}
                                </Tag>
                            ))}
                        </HStack>
                    )}
                </Button>
            </PopoverTrigger>

            <PopoverContent w='260px'>
                <PopoverArrow />
                <PopoverBody>
                    <CheckboxGroup value={value} onChange={onChange}>
                        <VStack align='start' spacing='10px' maxH='180px' overflowY='auto'>
                            {options.map((el) => (
                                <StyledCheckbox key={el} value={el}>
                                    {el}
                                </StyledCheckbox>
                            ))}
                        </VStack>
                    </CheckboxGroup>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
