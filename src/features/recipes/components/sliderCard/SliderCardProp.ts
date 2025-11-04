export interface Recipe {
    title: string;
    description?: string;
    category?: string[] | string;
    bookmarks?: number;
    likes?: number;
    imgUrl: string;
    badgeColor?: string;
}
