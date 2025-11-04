export interface Recipe {
    id: string;
    title: string;
    description: string;
    category: string[];
    bookmarks?: number;
    likes?: number;
    imgUrl: string;
    date: string;
    time: string;
}
