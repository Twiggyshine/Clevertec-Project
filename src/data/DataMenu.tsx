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
        subcategory: [],
        icon: NavIcons.SalatIcon,
    },
    {
        title: 'Закуски',
        subcategory: [],
        icon: NavIcons.SnakesIcon,
    },
    {
        title: 'Первые блюда',
        subcategory: [],
        icon: NavIcons.FirstDishIcon,
    },
    {
        title: 'Вторые блюда',
        subcategory: [],
        icon: NavIcons.SecondDishIcon,
    },
    {
        title: 'Десерты, выпечка',
        subcategory: [],
        icon: NavIcons.DesertsIcon,
    },
    {
        title: 'Блюда на гриле',
        subcategory: [],
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
        subcategory: [],
        icon: NavIcons.ChildrenIcon,
    },
    {
        title: 'Лечебное питание',
        subcategory: [],
        icon: NavIcons.HealthyIcon,
    },
    {
        title: 'Национальные',
        subcategory: [],
        icon: NavIcons.NationalIcon,
    },
    {
        title: 'Соусы',
        subcategory: [],
        icon: NavIcons.SauceIcon,
    },
    {
        title: 'Напитки',
        subcategory: [],
        icon: NavIcons.DrinksIcon,
    },
    {
        title: 'Заготовки',
        subcategory: [],
        icon: NavIcons.PreparationsIcon,
    },
];

export default menuData;
