import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

// const Breadcrumbs = () => {
//     const location = useLocation();
//     const pathParts = location.pathname.split('/').filter(Boolean);

//     const decodedParts = pathParts.map((part) =>
//         decodeURIComponent(part)
//             .replace(/-/g, ' ')
//             .replace(/\b\w/g, (l) => l.toUpperCase()),
//     );

//     const HomePage = location.pathname === '/';
//     const VeganPage = decodedParts[0] === 'VeganCuisinePage';
//     const veganMenu = decodedParts[1];

//     if (HomePage) {
//         return null;
//     }
//     return (
//         <Breadcrumb separator='>' ml={{ base: 3, md: 4 }}>
//             <BreadcrumbItem>
//                 <BreadcrumbLink
//                     as={Link}
//                     to='/'
//                     fontSize='16px'
//                     fontWeight='400'
//                     color='rgba(0, 0, 0, 0.64)'
//                 >
//                     Главная
//                 </BreadcrumbLink>
//             </BreadcrumbItem>

//             {VeganPage && (
//                 <BreadcrumbItem>
//                     <BreadcrumbLink
//                         as={Link}
//                         to='/veganCuisinePage'
//                         fontSize='16px'
//                         fontWeight='400'
//                         color={veganMenu ? 'rgba(0, 0, 0, 0.64)' : '#000'}
//                     >
//                         Веганская кухня
//                     </BreadcrumbLink>
//                 </BreadcrumbItem>
//             )}

//             {VeganPage && veganMenu && (
//                 <BreadcrumbItem>
//                     <BreadcrumbLink
//                         as={Link}
//                         to={`/veganCuisinePage/${encodeURIComponent(veganMenu.toLowerCase().replace(/ /g, '-'))}`}
//                         fontSize='16px'
//                         fontWeight='400'
//                         isCurrentPage
//                     >
//                         {veganMenu}
//                     </BreadcrumbLink>
//                 </BreadcrumbItem>
//             )}
//         </Breadcrumb>
//     );
// };

// export default Breadcrumbs;

const Breadcrumbs = () => {
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter(Boolean);

    const decodedParts = pathParts.map((part) =>
        decodeURIComponent(part)
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase()),
    );

    const HomePage = location.pathname === '/';
    const VeganPage = decodedParts[0] === 'VeganCuisinePage';
    const JuicyPage = decodedParts[0] === 'TheJuciestPage';
    const veganMenu = decodedParts[1];

    if (HomePage) {
        return null;
    }
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
                        color={veganMenu ? 'rgba(0, 0, 0, 0.64)' : '#000'}
                    >
                        Веганская кухня
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {VeganPage && veganMenu && (
                <BreadcrumbItem>
                    <BreadcrumbLink
                        as={Link}
                        to={`/veganCuisinePage/${encodeURIComponent(veganMenu.toLowerCase().replace(/ /g, '-'))}`}
                        fontSize='16px'
                        fontWeight='400'
                        isCurrentPage
                    >
                        {veganMenu}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {JuicyPage && (
                <BreadcrumbItem>
                    <BreadcrumbLink
                        as={Link}
                        to='/theJuciestPage'
                        fontSize='16px'
                        fontWeight='400'
                        isCurrentPage
                    >
                        Самое сочное
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};
export default Breadcrumbs;
