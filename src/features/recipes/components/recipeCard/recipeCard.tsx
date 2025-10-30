import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import { RecipeCardProps } from '../../../shared/sections/sectionJuciest/recipeCardProps';
import RecommendsBadge from '../../../shared/ui/badgeRecom/badgeRecom';
import ButtonsGroup from '../../../shared/ui/buttonsGroup.tsx/buttons';
import { BadgeWithIcon } from '../../../shared/ui/customBadge/customBadge';
import RecipeStats from '../../../shared/ui/recipeStatus/recipeStatus';

export const RecipeCard = ({
    title,
    description,
    category,
    imgUrl,
    likesCount,
    favCount,
    recommendedBy,
    buttons,
}: RecipeCardProps) => {
    const showDescription = useBreakpointValue({ lg: true, sm: false });
    const hideRecommendsBadge = useBreakpointValue({ xl: true, sm: false });
    const showBadge = useBreakpointValue({ xl: true, base: false });
    const hideBadge = useBreakpointValue({ xl: false, base: true });

    return (
        <Flex
            borderWidth='1px'
            borderColor='border: 1px solid rgba(0, 0, 0, 0.08);'
            borderRadius='8px'
            overflow='hidden'
            h='100%'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                background: '#fff',
                transition: 'all 0.3s ease',
            }}
        >
            <Box position='relative'>
                <Image
                    src={imgUrl}
                    alt={title}
                    objectFit='cover'
                    height='100%'
                    width='auto'
                    maxW={{ base: '158px', xl: '100%' }}
                />
                {hideBadge && (
                    <Box position='absolute' top='10px' left='10px'>
                        <BadgeWithIcon category={category.join(', ')} imgUrl={imgUrl} />
                    </Box>
                )}
                {recommendedBy && (
                    <Box position='absolute' bottom='4' left='4'>
                        {hideRecommendsBadge && (
                            <RecommendsBadge
                                name={recommendedBy.name}
                                avatarSrc={recommendedBy.avatarSrc}
                            />
                        )}
                    </Box>
                )}
            </Box>

            <Flex
                flex='1'
                p={{ '2xl': '20px 24px', sm: '8px 8px 4px 8px;' }}
                flexDirection='column'
            >
                <Flex justify='space-between' align='flex-start'>
                    {showBadge && <BadgeWithIcon category={category.join(', ')} imgUrl={imgUrl} />}

                    <RecipeStats likesCount={likesCount} favCount={favCount} />
                </Flex>
                <Box>
                    <Text
                        fontSize={{ '3xl': '24px', sm: '16px', xl: '18px' }}
                        mb='8px'
                        color='#000'
                        fontWeight='500'
                        noOfLines={{ xl: 1, sm: 2 }}
                    >
                        {title}
                    </Text>

                    {showDescription && (
                        <Text
                            color='#000'
                            mb='24px'
                            fontSize='14px'
                            lineHeight='143%'
                            noOfLines={3}
                        >
                            {description}
                        </Text>
                    )}
                </Box>

                {buttons ?? <ButtonsGroup />}
            </Flex>
        </Flex>
    );
};

export default RecipeCard;
