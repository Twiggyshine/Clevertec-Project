import { Badge, Flex, Image, Text } from '@chakra-ui/react';

import * as ImgCards from '../../../../assets/menuIcons/index';
import { BadgeWithIconProps } from '../customBadge/CustomBadgeProps';

const categoryIcons: Record<string, keyof typeof ImgCards> = {
    'first-dish': 'FirstDishIcon',
    vegan: 'VeganIcon',
    desserts: 'DessertsIcon',
    salads: 'SaladsIcon',
    'second-dish': 'SecondDishIcon',
    national: 'NationalIcon',
    children: 'ChildrenIcon',
    grill: 'GrillIcon',
};

const categoryTitles: Record<string, string> = {
    'first-dish': 'Первые блюда',
    'second-dish': 'Вторые блюда',
    vegan: 'Веганские блюда',
    desserts: 'Десерты',
    salads: 'Салаты',
    national: 'Национальные блюда',
    children: 'Детское меню',
    grill: 'Гриль',
};

export const BadgeWithIcon = ({ category, bgColor = '#ffffd3' }: BadgeWithIconProps) => {
    const categories = category?.filter(Boolean) || [];

    if (categories.length === 0) return null;

    return (
        <>
            {categories.map((cat) => {
                const iconKey = categoryIcons[cat];
                const iconSrc = iconKey ? ImgCards[iconKey] : null;

                const title = categoryTitles[cat] || cat;

                return (
                    <Badge
                        key={cat}
                        backgroundColor={bgColor}
                        fontSize='14px'
                        borderRadius='4px'
                        p='2px 8px'
                        h='24px'
                        textTransform='none'
                        fontWeight='400'
                    >
                        <Flex align='center' gap='8px'>
                            {iconSrc && <Image src={iconSrc} boxSize='16px' />}
                            <Text>{title}</Text>
                        </Flex>
                    </Badge>
                );
            })}
        </>
    );
};
