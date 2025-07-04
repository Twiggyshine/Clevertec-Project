import { Box, Flex, Input, Table, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

const IngredientsTable: React.FC = () => (
    <Box w='668px' h='680px'>
        <Table variant='simple'>
            <Thead>
                <Text
                    as='h1'
                    fontSize='12px'
                    fontWeight='700'
                    color='#2db100'
                    letterSpacing='0.5em'
                >
                    ИНГРЕДИЕНТЫ
                </Text>
                <Flex alignItems='center' mb={4}>
                    <Text color='#2db100' textAlign='right'>
                        ПОРЦИЙ:
                    </Text>
                    <Input
                        type='number'
                        defaultValue={1}
                        width='90px'
                        height='40px'
                        border='1px solid #e2e8f0'
                        borderRadius='6px'
                    />
                </Flex>
            </Thead>
            <Tbody
                sx={{
                    'tr:nth-child(even)': {
                        bg: 'rgba(0, 0, 0, 0.06)',
                    },
                }}
            >
                <Tr>
                    <Td>зелёного лука</Td>
                    <Td>1 пучок</Td>
                </Tr>
                <Tr>
                    <Td>репчатого лука</Td>
                    <Td>1 шт</Td>
                </Tr>
                <Tr>
                    <Td>чеснока</Td>
                    <Td>1 зубчик</Td>
                </Tr>
                <Tr>
                    <Td>куриного филе</Td>
                    <Td>500 г</Td>
                </Tr>
                <Tr>
                    <Td>масла или жира</Td>
                    <Td>40 г</Td>
                </Tr>
                <Tr>
                    <Td>сплетти</Td>
                    <Td>250 г</Td>
                </Tr>
                <Tr>
                    <Td>молотого шафрана</Td>
                    <Td>1 щепотка</Td>
                </Tr>
                <Tr>
                    <Td>молотой корицы</Td>
                    <Td>1 щепотка</Td>
                </Tr>
                <Tr>
                    <Td>муки</Td>
                    <Td>1 ст. л</Td>
                </Tr>
                <Tr>
                    <Td>сливок</Td>
                    <Td>250 мл</Td>
                </Tr>
                <Tr>
                    <Td>куриного бульона из кубика</Td>
                    <Td>200 мл</Td>
                </Tr>
                <Tr>
                    <Td>нарезанной петрушки</Td>
                    <Td>2 ст. л</Td>
                </Tr>
            </Tbody>
        </Table>
    </Box>
);

export default IngredientsTable;
