export interface RecommendedBy {
    name: string;
    avatarSrc: string;
}

export interface RecipeCardProps {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory?: string[];
    likesCount?: number;
    favCount?: number;
    imgUrl: string;
    recommendedBy?: {
        name: string;
        avatarSrc: string;
    } | null;
    buttons?: React.ReactNode;
}
