// import { Badge, Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
// import { chakra } from '@chakra-ui/react';

// import * as ImgCards from '../../assets/menuIcons/index';
// import { CustomHeartIcon, CustomSmileIcon } from '../customIcon/CustomIcon';

// interface CustomCardProps {
//     title: string;
//     description: string;
//     category: string;
//     likesCount?: number;
//     favCount?: number;
//     imgUrl: string;
// }

// export const CustomCard = chakra(
//     ({ title, description, category, likesCount, favCount, imgUrl, ...props }: CustomCardProps) => (
//         <Box w='322px' {...props}>
//             <Box mb='24px'>
//                 <Text noOfLines={1} mb='8px' fontSize='20px' fontWeight='500'>
//                     {title}
//                 </Text>
//                 <Text color='#000' fontSize='14px' noOfLines={{ lg: 1, sm: 3 }}>
//                     {description}
//                 </Text>
//             </Box>

//             <Flex align='center' justify='space-between'>
//                 <Badge
//                     backgroundColor='#d7ff94'
//                     fontSize='14px'
//                     borderRadius='4px'
//                     p='2px 8px'
//                     h='24px'
//                     textTransform='none'
//                     fontWeight='400'
//                 >
//                     <Flex align='center' gap='8px'>
//                         <Image
//                             src={ImgCards[imgUrl as keyof typeof ImgCards]}
//                             alt={category}
//                             boxSize='16px'
//                         />
//                         <Text>{category}</Text>
//                     </Flex>
//                 </Badge>
//                 <Flex align='center' gap='8px'>
//                     {likesCount !== undefined && likesCount > 0 && (
//                         <Flex align='center'>
//                             <IconButton
//                                 aria-label='Лайк'
//                                 icon={<CustomHeartIcon />}
//                                 variant='ghost'
//                                 isRound
//                                 size='sm'
//                             />
//                             <Text fontSize='sm' color='#2db100' fontWeight='600'>
//                                 {likesCount}
//                             </Text>
//                         </Flex>
//                     )}

//                     {favCount !== undefined && favCount > 0 && (
//                         <Flex align='center'>
//                             <IconButton
//                                 aria-label='Смайлик'
//                                 icon={<CustomSmileIcon />}
//                                 variant='ghost'
//                                 isRound
//                                 size='sm'
//                             />
//                             <Text fontSize='sm' color='#2db100' fontWeight='600'>
//                                 {favCount}
//                             </Text>
//                         </Flex>
//                     )}
//                 </Flex>
//             </Flex>
//         </Box>
//     ),
// );

import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';

import { BadgeWithIcon } from '../CustomBadge/customBadge';
import { CustomHeartIcon, CustomSmileIcon } from '../customIcon/CustomIcon';

interface CustomCardProps {
    title: string;
    description: string;
    category: string;
    likesCount?: number;
    favCount?: number;
    imgUrl: string;
    badgeColor?: string;
}

export const CustomCard = chakra(
    ({
        title,
        description,
        category,
        likesCount,
        favCount,
        imgUrl,
        badgeColor,
        ...props
    }: CustomCardProps) => (
        <Box w='322px' {...props}>
            <Box mb='24px'>
                <Text noOfLines={1} mb='8px' fontSize='20px' fontWeight='500'>
                    {title}
                </Text>
                <Text color='#000' fontSize='14px' noOfLines={{ lg: 1, sm: 3 }}>
                    {description}
                </Text>
            </Box>

            <Flex align='center' justify='space-between'>
                <BadgeWithIcon category={category} imgUrl={imgUrl} bgColor={badgeColor} />

                <Flex align='center' gap='8px'>
                    {likesCount !== undefined && likesCount > 0 && (
                        <Flex align='center'>
                            <IconButton
                                aria-label='Лайк'
                                icon={<CustomHeartIcon />}
                                variant='ghost'
                                isRound
                                size='sm'
                            />
                            <Text fontSize='sm' color='#2db100' fontWeight='600'>
                                {likesCount}
                            </Text>
                        </Flex>
                    )}

                    {favCount !== undefined && favCount > 0 && (
                        <Flex align='center'>
                            <IconButton
                                aria-label='Смайлик'
                                icon={<CustomSmileIcon />}
                                variant='ghost'
                                isRound
                                size='sm'
                            />
                            <Text fontSize='sm' color='#2db100' fontWeight='600'>
                                {favCount}
                            </Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Box>
    ),
);
