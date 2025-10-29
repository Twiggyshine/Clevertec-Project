import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router';

import menuData from '../../../../data/DataMenu';
import { RootState } from '../../../../store/configure-store';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter(Boolean);

    const [category, subcategory, id] = pathParts;
    const recipe = useSelector((state: RootState) =>
        state.recipes.recipes.find((r) => r.id.toString() === id),
    );

    // если на главной — ничего не показываем
    if (location.pathname === '/') return null;

    // ищем категорию и подкатегорию из menuData

    const isJuicyPage = category === 'theJuciestPage';

    const categoryData = menuData.find(
        (item) => item.path === category || item.path.replace('-', '') === category,
    );

    const subcategoryData = categoryData?.subcategory.find((sub) => sub.path === subcategory);

    // ищем рецепт по id

    if (isJuicyPage) {
        return (
            <Breadcrumb
                separator='>'
                ml={{ base: 3, md: 4 }}
                display={{ xl: 'flex', base: 'none' }}
            >
                <BreadcrumbItem>
                    <BreadcrumbLink
                        as={Link}
                        to='/'
                        fontSize='16px'
                        fontWeight='400'
                        color='rgba(0, 0, 0, 0.64)'
                    >
                        Главная
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink as={Link} to='/theJuciestPage' fontSize='16px' fontWeight='400'>
                        Самое сочное
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        );
    }

    return (
        <Breadcrumb
            separator='>'
            ml={{ base: 3, md: 4 }}
            sx={{
                '& > .chakra-breadcrumb__list': {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                },
            }}
        >
            {/* Главная */}
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={Link}
                    to='/'
                    fontSize='16px'
                    fontWeight='400'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Категория */}
            {categoryData && (
                <BreadcrumbItem>
                    <BreadcrumbLink
                        as={Link}
                        to={`/${categoryData.path}`}
                        fontSize='16px'
                        fontWeight='400'
                        color={subcategoryData || recipe ? 'rgba(0, 0, 0, 0.64)' : '#000'}
                    >
                        {categoryData.category}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {/* Подкатегория */}
            {subcategoryData && (
                <BreadcrumbItem>
                    <BreadcrumbLink
                        as={Link}
                        to={`/${categoryData?.path}/${subcategoryData.path}`}
                        fontSize='16px'
                        fontWeight='400'
                        color={recipe ? 'rgba(0, 0, 0, 0.64)' : '#000'}
                    >
                        {subcategoryData.name}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {/* Название рецепта */}
            {recipe && (
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink
                        as={Link}
                        to={`/${category}/${subcategory}/${recipe.id}`}
                        fontSize='16px'
                        fontWeight='400'
                        color='#000'
                    >
                        {recipe.title}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
