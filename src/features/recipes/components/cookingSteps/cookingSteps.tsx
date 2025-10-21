// CookingSteps.tsx
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';

interface CookingStep {
    stepNumber: number;
    description: string;
    image?: string;
}

interface CookingStepsProps {
    steps: CookingStep[];
}

const CookingSteps = ({ steps }: CookingStepsProps) => (
    <Box w='100%'>
        <Heading fontSize={{ base: '32px', md: '48px' }} fontWeight='500' mb='24px'>
            Шаги приготовления
        </Heading>

        <VStack spacing='20px' align='stretch'>
            {steps.map((step) => (
                <Flex
                    key={step.stepNumber}
                    gap='20px'
                    direction={{ base: 'column', md: 'row' }}
                    alignItems={{ base: 'center', md: 'flex-start' }}
                >
                    {step.image && (
                        <Image
                            src={step.image}
                            alt={`Шаг ${step.stepNumber}`}
                            width={{ base: '100%', md: '200px' }}
                            height={{ base: '200px', md: '200px' }}
                            objectFit='cover'
                            borderRadius='8px'
                            flexShrink={0}
                        />
                    )}
                    <Box flex='1'>
                        <Text fontWeight='bold' mb='8px' fontSize='lg'>
                            Шаг {step.stepNumber}
                        </Text>
                        <Text fontSize='md' lineHeight='tall'>
                            {step.description}
                        </Text>
                    </Box>
                </Flex>
            ))}
        </VStack>
    </Box>
);

export default CookingSteps;
