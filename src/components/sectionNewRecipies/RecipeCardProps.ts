export interface RecipeCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    likesCount?: number;
    favCount?: number;
    imgUrl: string;
}
