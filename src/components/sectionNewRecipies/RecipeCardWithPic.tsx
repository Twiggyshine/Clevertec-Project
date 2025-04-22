import { Box, Image } from '@chakra-ui/react';

import { CustomCard } from '../customCard/customCard';
import { RecipeCardProps } from './RecipeCardProps';
const RecipeCard = ({
    id,
    title,
    description,
    category,
    likesCount,
    favCount,
    imgUrl,
}: RecipeCardProps) => (
    <Box height='414px' borderWidth='1px' borderRadius='0px' position='relative' mb='40px'>
        <Image src={`../../../public/recipies/${id}.jpg`} alt={title} objectFit='cover' h='230px' />
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
