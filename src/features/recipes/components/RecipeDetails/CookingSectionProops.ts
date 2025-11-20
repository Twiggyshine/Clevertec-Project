export interface Recipe {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    imgUrl: string;
    bookmarks: number;
    likes: number;
    date: string;
    time: string;
    portions: number;
    recommendedBy?: {
        name: string;
        avatarSrc: string;
    };
    nutritionValue: {
        calories: number;
        proteins: number;
        fats: number;
        carbohydrates: number;
    };
    ingredients: {
        title: string;
        count: string;
        measureUnit: string;
    }[];
    steps: {
        stepNumber: number;
        description: string;
        image?: string;
    }[];
}
