import * as NavIcons from '../assets/menuIcons/index';

export type CategoryPath =
    | 'salats'
    | 'appetizers'
    | 'first-dish'
    | 'second-dish'
    | 'desserts-bakery'
    | 'grilled-dishes'
    | 'vegan-cuisine'
    | 'Children-dish'
    | 'medical-nutrition'
    | 'national'
    | 'sauces'
    | 'beverages'
    | 'preparations';

export const getCategoryNameByPath = (path: string): string => {
    const categoryMap: Record<CategoryPath, string> = {
        salats: 'Салаты',
        appetizers: 'Закуски',
        'first-dish': 'Первые блюда',
        'second-dish': 'Вторые блюда',
        'desserts-bakery': 'Десерты, выпечка',
        'grilled-dishes': 'Блюда на гриле',
        'vegan-cuisine': 'Веганская кухня',
        'Children-dish': 'Детские блюда',
        'medical-nutrition': 'Лечебное питание',
        national: 'Национальные',
        sauces: 'Соусы',
        beverages: 'Напитки',
        preparations: 'Заготовки',
    };

    return categoryMap[path as CategoryPath] || path;
};

export const getCategoryIconByPath = (path: CategoryPath): string | undefined => {
    const iconMap: Record<CategoryPath, string> = {
        salats: NavIcons.SaladsIcon,
        appetizers: NavIcons.SnakesIcon,
        'first-dish': NavIcons.FirstDishIcon,
        'second-dish': NavIcons.SecondDishIcon,
        'desserts-bakery': NavIcons.DessertsIcon,
        'grilled-dishes': NavIcons.GrillIcon,
        'vegan-cuisine': NavIcons.VeganIcon,
        'Children-dish': NavIcons.ChildrenIcon,
        'medical-nutrition': NavIcons.HealthyIcon,
        national: NavIcons.NationalIcon,
        sauces: NavIcons.SauceIcon,
        beverages: NavIcons.DrinksIcon,
        preparations: NavIcons.PreparationsIcon,
    };

    return iconMap[path];
};

// поменять
