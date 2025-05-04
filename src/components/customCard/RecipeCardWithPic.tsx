import { Box, Image } from '@chakra-ui/react';

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
}: RecipeCardProps) => (
    <Box borderWidth='1px' borderRadius='5px' mb='40px' minH='414px'>
        <Image
            src={`../../../public/recipies/${id}.jpg`}
            alt={title}
            objectFit='cover'
            width='100%'
            borderRadius='5px 5px 0 0'
        />
        <CustomCard
            title={title}
            description={description}
            category={category}
            likesCount={likesCount}
            favCount={favCount}
            imgUrl={imgUrl}
            p='16px 24px 20px 24px'
            badgeColor='#d7ff94'
        />
    </Box>
);

export default RecipeCard;
