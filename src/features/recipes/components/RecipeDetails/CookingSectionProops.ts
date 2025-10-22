export interface CookingSectionProps {
    recipe: {
        id: string;
        title: string;
        description: string;
        category: string[];
        subcategory: string[];
        image: string;
        bookmarks: number;
        likes: number;
        date: string;
        time: string;
        portions: number;
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
    };
}
