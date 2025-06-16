import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import menuData from '../../data/DataMenu';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter(Boolean);

    const isHomePage = location.pathname === '/';
    const isJuicyPage = pathParts[0] === 'theJuciestPage';
    const currentCategory = pathParts[0];

    const currentSubcategory = pathParts[1];

    if (isHomePage) {
        return null;
    }

    if (isJuicyPage) {
        return (
            <Breadcrumb
                separator='>'
                ml={{ base: 3, md: 4 }}
                display={{ xl: 'flex', base: 'none' }}
                flexWrap='wrap'
            >
                <BreadcrumbItem>
                    <BreadcrumbLink
                        as={Link}
                        to='/'
                        fontSize='16px'
                        fontWeight='400'
                        color='rgba(0, 0, 0, 0.64)'
                        whiteSpace='nowrap'
                    >
                        Главная
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink
                        as={Link}
                        to='/theJuciestPage'
                        fontSize='16px'
                        fontWeight='400'
                        isCurrentPage
                        whiteSpace='nowrap'
                    >
                        Самое сочное
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        );
    }

    // Находим текущую категорию в menuData
    const categoryData = menuData.find(
        (item) => item.path === currentCategory || item.path.replace('-', '') === currentCategory,
    );

    // Находим текущую подкатегорию
    const subcategoryData = categoryData?.subcategory.find(
        (sub) => sub.path === currentSubcategory,
    );

    return (
        <Breadcrumb separator='>' ml={{ base: 3, md: 4 }} flexWrap='wrap'>
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={Link}
                    to='/'
                    fontSize='16px'
                    fontWeight='400'
                    color='rgba(0, 0, 0, 0.64)'
                    whiteSpace='nowrap'
                >
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {categoryData && (
                <BreadcrumbItem>
                    <BreadcrumbLink
                        as={Link}
                        to={`/${categoryData.path}`}
                        fontSize='16px'
                        fontWeight='400'
                        color={subcategoryData ? 'rgba(0, 0, 0, 0.64)' : '#000'}
                        whiteSpace='nowrap'
                    >
                        {categoryData.category}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {subcategoryData && (
                <BreadcrumbItem>
                    <BreadcrumbLink
                        as={Link}
                        to={`/${categoryData?.path}/${subcategoryData.path}`}
                        fontSize='16px'
                        fontWeight='400'
                        isCurrentPage
                        whiteSpace='nowrap'
                    >
                        {subcategoryData.name}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
