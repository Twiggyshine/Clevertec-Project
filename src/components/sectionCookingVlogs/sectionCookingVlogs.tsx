import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react';

const CulinaryBlogsSection = () => (
    <Box maxWidth='1360px' h='304px' bg='#c4ff61' mb='40px' borderRadius='16px' p='24px'>
        <Flex justifyContent='space-between' alignItems='center'>
            <Heading as='h1' fontSize='36px' lineHeight='111%' mb='24px' fontWeight='400'>
                Кулинарные блоги
            </Heading>
            <Button
                bg='#c4ff61'
                color='#000'
                width='176px'
                h='48px'
                p='0 24px'
                borderRadius='6px'
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                fontWeight='600'
                fontSize='18px'
            >
                Все авторы
                <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M1 8.00002C1 7.86741 1.05268 7.74024 1.14645 7.64647C1.24021 7.5527 1.36739 7.50002 1.5 7.50002H13.293L10.146 4.35402C10.0521 4.26013 9.99937 4.1328 9.99937 4.00002C9.99937 3.86725 10.0521 3.73991 10.146 3.64602C10.2399 3.55213 10.3672 3.49939 10.5 3.49939C10.6328 3.49939 10.7601 3.55213 10.854 3.64602L14.854 7.64602C14.9006 7.69247 14.9375 7.74764 14.9627 7.80839C14.9879 7.86913 15.0009 7.93425 15.0009 8.00002C15.0009 8.06579 14.9879 8.13091 14.9627 8.19165C14.9375 8.2524 14.9006 8.30758 14.854 8.35402L10.854 12.354C10.7601 12.4479 10.6328 12.5007 10.5 12.5007C10.3672 12.5007 10.2399 12.4479 10.146 12.354C10.0521 12.2601 9.99937 12.1328 9.99937 12C9.99937 11.8672 10.0521 11.7399 10.146 11.646L13.293 8.50002H1.5C1.36739 8.50002 1.24021 8.44734 1.14645 8.35357C1.05268 8.25981 1 8.13263 1 8.00002V8.00002Z'
                        fill='black'
                    />
                </svg>
            </Button>
        </Flex>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap='16px'>
            {/* Автор 1 */}
            <GridItem border='1px solid rgba(0, 0, 0, 0.08)' borderRadius='8px' h='184px' bg='#fff'>
                <Box
                    bg='white'
                    borderRadius='lg'
                    boxShadow='md'
                    p={6}
                    transition='all 0.2s'
                    _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                >
                    <Flex gap={4} alignItems='flex-start' mb={4}>
                        <Image
                            src='./../../../public/icons/Avatar1.svg'
                            alt='Елена Высоцкая'
                            borderRadius='full'
                            boxSize='48px'
                            objectFit='cover'
                        />
                        <VStack align='flex-start' spacing={1}>
                            <Heading as='h3' fontSize='18px' fontWeight='500px' lineHeight='156%'>
                                Елена Высоцкая
                            </Heading>
                            <Text fontSize='sm' color='gray.600'>
                                @elenapovar
                            </Text>
                        </VStack>
                    </Flex>
                    <Text color='#000'>
                        Как раз после праздников, когда мясные продукты еще остались, но никто их
                        уже не хочет, время варить солянку.
                    </Text>
                </Box>
            </GridItem>

            {/* Автор 2 */}
            <GridItem>
                <Box
                    bg='white'
                    borderRadius='lg'
                    boxShadow='md'
                    p={6}
                    transition='all 0.2s'
                    _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                >
                    <Flex gap={4} alignItems='flex-start' mb={4}>
                        <Image
                            src='./../../../public/icons/Avatar2.svg'
                            alt='Alex Cook'
                            borderRadius='full'
                            boxSize='48px'
                            objectFit='cover'
                        />
                        <VStack align='flex-start' spacing={1}>
                            <Heading as='h3' fontSize='18px' fontWeight='500px' lineHeight='156%'>
                                Alex Cook
                            </Heading>
                            <Text fontSize='sm' color='gray.600'>
                                @funtasticooking
                            </Text>
                        </VStack>
                    </Flex>
                    <Text color='#000'>
                        Как раз после праздников, когда мясные продукты еще остались, но никто их
                        уже не хочет, время варить солянку.
                    </Text>
                </Box>
            </GridItem>

            {/* Автор 3 */}
            <GridItem>
                <Box
                    bg='white'
                    borderRadius='lg'
                    boxShadow='md'
                    p={6}
                    transition='all 0.2s'
                    _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                >
                    <Flex gap={4} alignItems='flex-start' mb={4}>
                        <Image
                            src='./../../../public/icons/Avatar3.svg'
                            alt='Екатерина Константинопольская'
                            borderRadius='full'
                            boxSize='48px'
                            objectFit='cover'
                        />
                        <VStack align='flex-start' spacing={1}>
                            <Heading as='h3' fontSize='18px' fontWeight='500px' lineHeight='156%'>
                                Екатерина Константинопольская
                            </Heading>
                            <Text fontSize='sm' color='gray.600'>
                                @bake_and_pie
                            </Text>
                        </VStack>
                    </Flex>
                    <Text color='#000'>
                        Как раз после праздников, когда мясные продукты еще остались, но никто их
                        уже не хочет, время варить солянку.
                    </Text>
                </Box>
            </GridItem>
        </Grid>
    </Box>
);

export default CulinaryBlogsSection;
