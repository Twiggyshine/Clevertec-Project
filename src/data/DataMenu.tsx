import ChildrenIcon from '../assets/menuIcons/children.svg';
import DesertsIcon from '../assets/menuIcons/deserts.svg';
import DrinksIcon from '../assets/menuIcons/drinks.svg';
import FirstDishIcon from '../assets/menuIcons/first dish.svg';
import GrillIcon from '../assets/menuIcons/grill.svg';
import HealthyIcon from '../assets/menuIcons/healthy.svg';
import NationalIcon from '../assets/menuIcons/national.svg';
import PreparationsIcon from '../assets/menuIcons/preparations.svg';
import SalatIcon from '../assets/menuIcons/salat.svg';
import SauceIcon from '../assets/menuIcons/sauce.svg';
import SecondDishIcon from '../assets/menuIcons/second dish.svg';
import SnakesIcon from '../assets/menuIcons/snakes.svg';
import VeganIcon from '../assets/menuIcons/vegan.svg';

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
        icon: SalatIcon,
    },
    {
        title: 'Закуски',
        subcategory: [],
        icon: SnakesIcon,
    },
    {
        title: 'Первые блюда',
        subcategory: [],
        icon: FirstDishIcon,
    },
    {
        title: 'Вторые блюда',
        subcategory: [],
        icon: SecondDishIcon,
    },
    {
        title: 'Десерты, выпечка',
        subcategory: [],
        icon: DesertsIcon,
    },
    {
        title: 'Блюда на гриле',
        subcategory: [],
        icon: GrillIcon,
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
        icon: VeganIcon,
    },
    {
        title: 'Детские блюда',
        subcategory: [],
        icon: ChildrenIcon,
    },
    {
        title: 'Лечебное питание',
        subcategory: [],
        icon: HealthyIcon,
    },
    {
        title: 'Национальные',
        subcategory: [],
        icon: NationalIcon,
    },
    {
        title: 'Соусы',
        subcategory: [],
        icon: SauceIcon,
    },
    {
        title: 'Напитки',
        subcategory: [],
        icon: DrinksIcon,
    },
    {
        title: 'Заготовки',
        subcategory: [],
        icon: PreparationsIcon,
    },
];

export default menuData;
