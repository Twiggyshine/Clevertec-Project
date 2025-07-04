// import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

// const cookingSection = () => (
//     <Box mb='40px'>
//         <Heading fontSize='48px' fontWeight='500'>
//             Шаги приготовления
//         </Heading>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 1</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе Зелёный лук
//                     нарезать на 1 см. кружочки. Лук и чеснок на мелкие кубики.{' '}
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 2</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе Мясо помыть,
//                     высушить, нарезать на полосочки и обжарить на масле. Посолить, поперчить и
//                     вынуть со сковороды.
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 3</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе Спагетти
//                     отварить в течение 10 минут в подсоленной воде.
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 4</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе В сковороде,
//                     на оставшемся жире поджарить лук до золотистого цвета, добавить чеснок и
//                     прожарить ещё около 1 минуты.
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 5</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе Всыпать
//                     шафран, корицу и муки, перемешать и коротко прожарить.
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Image></Image>
//             <Box>
//                 <Text>Шаг 6</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе В сковороде,
//                     на оставшемся жире поджарить лук до золотистого цвета, добавить чеснок и
//                     прожарить ещё около 1 минуты.
//                 </Text>
//             </Box>
//         </Flex>
//         <Text>Всыпать шафран, корицу и муки, перемешать и коротко прожарить.</Text>
//         <Flex mb='20px'>
//             <Box>
//                 <Text>Шаг 7</Text>
//                 <Text>
//                     Картошка, тушенная с болгарским перцем и фасолью в томатном соусе Сливки смешать
//                     с бульоном, влить к луку и протушить на среднем огне около 10 минут.
//                 </Text>
//             </Box>
//         </Flex>
//         <Flex mb='20px'>
//             <Box>
//                 <Text>Шаг 8</Text>
//                 <Text>
//                     Соус посолить, поперчить, вложить мясо, зелёный лук. Прогреть и осторожно
//                     смешать со спагетти. При подаче посыпать нарезанной петрушкой.
//                 </Text>
//             </Box>
//         </Flex>
//     </Box>
// );

// export default cookingSection;

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface CookingStep {
    stepNumber: number;
    description: string;
    image?: string;
}

interface CookingSectionProps {
    steps: CookingStep[];
}

const CookingSection = ({ steps }: CookingSectionProps) => (
    <Box mb='40px' w='668px'>
        <Heading fontSize='48px' fontWeight='500' mb='20px'>
            Шаги приготовления
        </Heading>

        {steps.map((step) => (
            <Flex key={step.stepNumber} mb='20px' gap='20px'>
                {step.image && (
                    <Image
                        src={step.image}
                        alt={`Шаг ${step.stepNumber}`}
                        w='346px'
                        h='244px'
                        objectFit='cover'
                    />
                )}
                <Box flex='1' flexDirection='column' p='20px 24px'>
                    <Text fontWeight='400' fontSize='14px' color='#000'>
                        Шаг {step.stepNumber}
                    </Text>
                    <Text fontSize='md' lineHeight='tall'>
                        {step.description}
                    </Text>
                </Box>
            </Flex>
        ))}
    </Box>
);

export default CookingSection;
