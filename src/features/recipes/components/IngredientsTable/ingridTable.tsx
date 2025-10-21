import {
    Box,
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';

interface Ingredient {
    title: string;
    count: string;
    measureUnit: string;
}

interface IngredientsTableProps {
    ingredients: Ingredient[];
}

const IngredientsTable = ({ ingredients }: IngredientsTableProps) => {
    if (!ingredients || ingredients.length === 0) {
        return (
            <Box>
                <Text fontSize='xl' fontWeight='500' mb='24px'>
                    Ингредиенты
                </Text>
                <Text>Ингредиенты не указаны</Text>
            </Box>
        );
    }

    return (
        <Box w='100%'>
            <Table variant='simple'>
                <Thead>
                    <Th
                        fontSize='12px'
                        fontWeight='700'
                        color='#2db100'
                        border='none'
                        textTransform='none'
                    >
                        ИНГРЕДИЕНТЫ
                    </Th>

                    <Th colSpan={2} border='none' textAlign='right'>
                        <Flex alignItems='center' justifyContent='flex-end' gap='12px'>
                            <Text
                                color='#2db100'
                                fontSize='12px'
                                fontWeight='700'
                                whiteSpace='nowrap'
                            >
                                ПОРЦИЙ:
                            </Text>
                            <NumberInput defaultValue={1} min={0} max={10} size='sm'>
                                <NumberInputField
                                    width='70px'
                                    height='32px'
                                    border='1px solid #e2e8f0'
                                    borderRadius='6px'
                                    fontSize='12px'
                                    textAlign='center'
                                />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Flex>
                    </Th>
                </Thead>

                <Tbody
                    sx={{
                        'tr:nth-child(even)': {
                            bg: 'rgba(0, 0, 0, 0.06)',
                        },
                    }}
                >
                    {ingredients.map((ingredient, index) => (
                        <Tr key={index}>
                            <Td>{ingredient.title}</Td>
                            <Td isNumeric>{ingredient.count}</Td>
                            <Td>{ingredient.measureUnit}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default IngredientsTable;
