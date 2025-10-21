// interface Ingredient {
//     title: string;
//     count: string;
//     measureUnit: string;
// }

// interface NutritionValue {
//     calories: number;
//     proteins: number;
//     fats: number;
//     carbohydrates: number;
// }

// interface CookingStep {
//     stepNumber: number;
//     description: string;
//     image?: string;
// }

// export interface Recipe {
//     id: string;
//     title: string;
//     description: string;
//     category: string[];
//     subcategory: string[];
//     image: string;
//     bookmarks: number;
//     likes: number;
//     date: string;
//     time: string;
//     portions?: number;
//     nutritionValue: NutritionValue;
//     ingredients: Ingredient[];
//     steps: CookingStep[];
//     meat?: string;
//     side?: string;
// }

// export interface CookingSectionProps {
//     recipe?: Recipe;
// }

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
