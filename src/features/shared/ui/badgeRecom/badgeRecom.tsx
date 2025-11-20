import { Avatar, Badge, Box, Text } from '@chakra-ui/react';

import { RecommendsBadgeProps } from './RecomBadgeProps';

const RecommendsBadge = ({ name, avatarSrc }: RecommendsBadgeProps) => (
    <Badge
        display='flex'
        alignItems='center'
        gap='2'
        borderRadius='4px'
        p='4px 8px'
        bg='#d7ff94'
        fontWeight='400'
        fontSize='14px'
        color='#000'
        textTransform='none'
    >
        <Avatar src={avatarSrc} name={name} boxSize='16px' />
        <Box>
            <Text as='span'>{name}</Text>
            <Text as='span'> рекомендует</Text>
        </Box>
    </Badge>
);

export default RecommendsBadge;
