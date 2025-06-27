export interface RecommendedBy {
    name: string;
    avatarSrc: string;
}

export interface RecipeCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    likesCount?: number;
    favCount?: number;
    imgUrl: string;
    recommendedBy?: {
        name: string;
        avatarSrc: string;
    } | null;
}
