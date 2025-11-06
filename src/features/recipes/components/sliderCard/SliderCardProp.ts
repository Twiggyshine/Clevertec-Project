export interface Recipe {
    title: string;
    description?: string;
    category?: string[];
    bookmarks?: number;
    likes?: number;
    imgUrl: string;
    badgeColor?: string;
}
