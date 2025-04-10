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
    items: string[];
    iconSrc: string;
    testId?: string;
}

const menuData = [
    {
        title: 'Салаты',
        items: [],
        icon: SalatIcon,
    },
    {
        title: 'Закуски',
        items: [],
        icon: SnakesIcon,
    },
    {
        title: 'Первые блюда',
        items: [],
        icon: FirstDishIcon,
    },
    {
        title: 'Вторые блюда',
        items: [],
        icon: SecondDishIcon,
    },
    {
        title: 'Десерты, выпечка',
        items: [],
        icon: DesertsIcon,
    },
    {
        title: 'Блюда на гриле',
        items: [],
        icon: GrillIcon,
    },
    {
        title: 'Веганская кухня',
        items: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Сыроедческие блюда',
            'Напитки',
        ],
        icon: VeganIcon,
        testId: 'vegan-cuisine',
    },
    {
        title: 'Детские блюда',
        items: [],
        icon: ChildrenIcon,
    },
    {
        title: 'Лечебное питание',
        items: [],
        icon: HealthyIcon,
    },
    {
        title: 'Национальные',
        items: [],
        icon: NationalIcon,
    },
    {
        title: 'Соусы',
        items: [],
        icon: SauceIcon,
    },
    {
        title: 'Напитки',
        items: [],
        icon: DrinksIcon,
    },
    {
        title: 'Заготовки',
        items: [],
        icon: PreparationsIcon,
    },
];

export default menuData;
