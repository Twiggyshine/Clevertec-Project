import { Box, Image, useBreakpointValue } from '@chakra-ui/react';

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
    const showDescription = useBreakpointValue({ '2xl': true, sm: false });

    return (
        <Box borderWidth='1px' borderRadius='5px' mb='40px'>
            <Image
                src={`../../../public/recipies/${id}.jpg`}
                alt={title}
                objectFit='cover'
                width='100%'
                borderRadius='5px 5px 0 0'
            />
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
        </Box>
    );
};

export default RecipeCard;
