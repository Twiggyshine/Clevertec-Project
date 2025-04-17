import { Badge, Flex, Image, Text } from '@chakra-ui/react';

import * as ImgCards from '../../assets/menuIcons/index';

interface BadgeWithIconProps {
    category: string;
    imgUrl: string;
    bgColor?: string;
}

export const BadgeWithIcon = ({ category, imgUrl, bgColor = '#ffffd3' }: BadgeWithIconProps) => (
    <Badge
        backgroundColor={bgColor}
        fontSize='14px'
        borderRadius='4px'
        p='2px 8px'
        h='24px'
        textTransform='none'
        fontWeight='400'
    >
        <Flex align='center' gap='8px'>
            <Image src={ImgCards[imgUrl as keyof typeof ImgCards]} alt={category} boxSize='16px' />
            <Text>{category}</Text>
        </Flex>
    </Badge>
);
