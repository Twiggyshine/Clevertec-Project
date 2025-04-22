export interface BlogAuthor {
    id: number;
    name: string;
    username: string;
    avatar: string;
    description: string;
}

export const culinaryBlogsData: BlogAuthor[] = [
    {
        id: 1,
        name: 'Елена Высоцкая',
        username: '@elenapovar',
        avatar: '/icons/Avatar1.svg',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 2,
        name: 'Alex Cook',
        username: '@funtasticooking',
        avatar: '/icons/Avatar2.svg',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 3,
        name: 'Екатерина Константинопольская',
        username: '@bake_and_pie',
        avatar: '/icons/Avatar3.svg',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
