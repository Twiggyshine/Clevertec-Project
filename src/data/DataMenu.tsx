import * as NavIcons from '../assets/menuIcons/index';

interface menuData {
    title: string;
    subcategory: string[];
    iconSrc: string;
    testId?: string;
}

const menuData = [
    {
        title: 'Салаты',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.SalatIcon,
    },
    {
        title: 'Закуски',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.SnakesIcon,
    },
    {
        title: 'Первые блюда',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.FirstDishIcon,
    },
    {
        title: 'Вторые блюда',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.SecondDishIcon,
    },
    {
        title: 'Десерты, выпечка',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.DesertsIcon,
    },
    {
        title: 'Блюда на гриле',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.GrillIcon,
    },
    {
        title: 'Веганская кухня',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.VeganIcon,
    },
    {
        title: 'Детские блюда',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.ChildrenIcon,
    },
    {
        title: 'Лечебное питание',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.HealthyIcon,
    },
    {
        title: 'Национальные',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.NationalIcon,
    },
    {
        title: 'Соусы',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.SauceIcon,
    },
    {
        title: 'Напитки',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.DrinksIcon,
    },
    {
        title: 'Заготовки',
        subcategory: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: NavIcons.PreparationsIcon,
    },
];

export default menuData;
