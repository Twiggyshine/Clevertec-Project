import { Box, Image, useBreakpointValue, VStack } from '@chakra-ui/react';

import { BadgeWithIcon } from '../CustomBadge/customBadge';
import { RecipeCardProps } from '../sectionNewRecipies/RecipeCardProps';
import { CustomCard } from './customCard';
const RecipeCard = ({
    id,
    title,
    description,
    category,
    likesCount,
    favCount,
    imgUrl,
}: RecipeCardProps) => {
    const showDescription = useBreakpointValue({ xl: true, sm: false });

    const showBadge = useBreakpointValue({ base: true, '2xl': false });

    return (
        <VStack
            borderWidth='1px'
            borderRadius='10px'
            mb='40px'
            minW={{ '3xl': '322px', '2xl': '277px', sm: '158px' }}
            minH={{ '3xl': '414px', '2xl': '402px', sm: '220px' }}
        >
            <Box position='relative'>
                <Image
                    src={`../../../public/recipies/${id}.jpg`}
                    alt={title}
                    objectFit='cover'
                    width='100%'
                    borderRadius='10px 10px 0 0'
                />
                {showBadge && (
                    <Box position='absolute' top='10px' left='10px'>
                        <BadgeWithIcon category={category} imgUrl={imgUrl} bgColor='#d7ff94' />
                    </Box>
                )}
            </Box>
            <CustomCard
                title={title}
                description={showDescription ? description : undefined}
                category={category}
                likesCount={likesCount}
                favCount={favCount}
                imgUrl={imgUrl}
                badgeColor='#d7ff94'
                p={{ '3xl': '16px 24px 20px 24px', sm: '8px 8px 4px 8px', lg: '12px' }}
            />
        </VStack>
    );
};

export default RecipeCard;
