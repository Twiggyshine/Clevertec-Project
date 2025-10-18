import { Box, Flex, Input, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react';

const IngredientsTable: React.FC = () => (
    <Box w='668px' h='680px'>
        <Table variant='simple'>
            <Tr justifyContent='space-between' alignItems='center' h='90px'>
                <Td fontSize='12px' fontWeight='700' color='#2db100'>
                    ИНГРЕДИЕНТЫ
                </Td>
                <Td>
                    <Flex alignItems='center' gap='16px'>
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
                </Td>
            </Tr>

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

// import { Box, Flex, Input, Table, Tbody, Td, Text, Thead,Tr } from '@chakra-ui/react';

// interface Ingredient {
//     name: string;
//     amount: string;
//     unit: string;
// }

// interface IngredientsTableProps {
//     ingredients: Ingredient[];
//     portions?: number;
// }

// export const IngredientsTable = ({ ingredients, portions = 1 }: IngredientsTableProps) => {
//     <Box width='668px'>
//         <Text fontWeight='bold' color='green.500' letterSpacing='wide' mb={2}>
//             ИНГРЕДИЕНТЫ
//         </Text>

//         <Flex align='center' mb={4}>
//             <Text color='green.500' mr={2}>
//                 ПОРЦИЙ:
//             </Text>
//             <Input type='number' value={portions} size='sm' width='80px' min={1} />
//         </Flex>

//         <Table>
//             <Tbody>
//                 {ingredients.map((product, index) => (
//                     <Tr key={index} bg={index % 2 === 0 ? 'gray.50' : 'white'}>
//                         <Td>{product.name}</Td>
//                         <Td>{`${product.amount} ${product.unit}`}</Td>
//                     </Tr>
//                 ))}
//             </Tbody>
//         </Table>
//     </Box>;
// };

// export default IngredientsTable;
