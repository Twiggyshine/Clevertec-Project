import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
    const location = useLocation();
    const VeganPage = location.pathname === '/veganCuisinePage';
    const TheJuciestPage = location.pathname === '/theJuciestPage';

    return (
        <Breadcrumb separator='>' ml={{ base: 3, md: 4 }}>
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

            {VeganPage && (
                <BreadcrumbItem>
                    <BreadcrumbLink
                        as={Link}
                        to='/veganCuisinePage'
                        fontSize='16px'
                        fontWeight='400'
                    >
                        Веганская кухня
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
            {TheJuciestPage && (
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/theJuciestPage' fontSize='16px' fontWeight='400'>
                        Самое сочное
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
