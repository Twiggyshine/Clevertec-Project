// import * as NavIcons from '../assets/menuIcons/index';

// interface menuData {
//     category: string;
//     subcategory: string[];
//     iconSrc: string;
//     testId?: string;
// }

// const menuData = [
//     {
//         category: 'Салаты',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.SalatIcon,
//     },
//     {
//         category: 'Закуски',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.SnakesIcon,
//     },
//     {
//         category: 'Первые блюда',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.FirstDishIcon,
//     },
//     {
//         category: 'Вторые блюда',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.SecondDishIcon,
//     },
//     {
//         category: 'Десерты, выпечка',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.DesertsIcon,
//     },
//     {
//         category: 'Блюда на гриле',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.GrillIcon,
//     },
//     {
//         category: 'Веганская кухня',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.VeganIcon,
//     },
//     {
//         category: 'Детские блюда',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.ChildrenIcon,
//     },
//     {
//         category: 'Лечебное питание',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.HealthyIcon,
//     },
//     {
//         category: 'Национальные',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.NationalIcon,
//     },
//     {
//         category: 'Соусы',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.SauceIcon,
//     },
//     {
//         category: 'Напитки',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.DrinksIcon,
//     },
//     {
//         category: 'Заготовки',
//         subcategory: [
//             'Закуски',
//             'Первые блюда',
//             'Вторые блюда',
//             'Гарниры',
//             'Десерты',
//             'Сыроедческие блюда',
//             'Напитки',
//         ],
//         icon: NavIcons.PreparationsIcon,
//     },
// ];

// export default menuData;

import * as NavIcons from '../assets/menuIcons/index';

interface MenuItem {
    category: string;
    path: string;
    subcategory: {
        name: string;
        path: string;
    }[];
    icon: string;
}

const menuData: MenuItem[] = [
    {
        category: 'Салаты',
        path: 'salats',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.SalatIcon,
    },
    {
        category: 'Закуски',
        path: 'appetizers',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.SnakesIcon,
    },
    {
        category: 'Первые блюда',
        path: 'first-courses',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.FirstDishIcon,
    },
    {
        category: 'Вторые блюда',
        path: 'second-courses',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.SecondDishIcon,
    },
    {
        category: 'Десерты, выпечка',
        path: 'desserts-bakery',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.DesertsIcon,
    },
    {
        category: 'Блюда на гриле',
        path: 'grilled-dishes',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.GrillIcon,
    },
    {
        category: 'Веганская кухня',
        path: 'vegan-cuisine',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.VeganIcon,
    },
    {
        category: 'Детские блюда',
        path: 'FirstDishIcon',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.ChildrenIcon,
    },
    {
        category: 'Лечебное питание',
        path: 'medical-nutrition',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.HealthyIcon,
    },
    {
        category: 'Национальные',
        path: 'national',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.NationalIcon,
    },
    {
        category: 'Соусы',
        path: 'sauces',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.SauceIcon,
    },
    {
        category: 'Напитки',
        path: 'beverages',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.DrinksIcon,
    },
    {
        category: 'Заготовки',
        path: 'preparations',
        subcategory: [
            { name: 'Закуски', path: 'appetizers' },
            { name: 'Первые блюда', path: 'soups' },
            { name: 'Вторые блюда', path: 'main-courses' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'bakery' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'beverages' },
        ],
        icon: NavIcons.PreparationsIcon,
    },
];

export default menuData;
