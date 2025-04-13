import { Box, Image } from '@chakra-ui/react';

import { CustomCard } from '../customCard/customCard';

interface RecipeCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    likesCount?: number;
    favCount?: number;
    imgUrl: string;
}

const RecipeCard = ({
    id,
    title,
    description,
    category,
    likesCount,
    favCount,
    imgUrl,
}: RecipeCardProps) => (
    <Box
        width='322px'
        height='414px'
        borderWidth='1px'
        borderRadius='0px'
        position='relative'
        mb='40px'
    >
        <Image
            src={`../../../public/recipies/${id}.jpg`}
            alt={title}
            objectFit='cover'
            h='230px'
            w='322px'
        />
        <CustomCard
            title={title}
            description={description}
            category={category}
            likesCount={likesCount}
            favCount={favCount}
            imgUrl={imgUrl}
        />
    </Box>
);

export default RecipeCard;
