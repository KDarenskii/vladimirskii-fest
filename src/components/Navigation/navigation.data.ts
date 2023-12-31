interface INavLink {
    id: number;
    title: string;
    sectionHref?: string;
    href?: string;
}

export const navLinks: INavLink[] = [
    {
        id: 1,
        title: "Главная",
        sectionHref: "main",
    },
    {
        id: 2,
        title: "О фестивале",
        sectionHref: "about",
    },
    {
        id: 3,
        title: "Программа",
        sectionHref: "schedule",
    },
    {
        id: 4,
        title: "Участники",
        sectionHref: "participants",
    },
    {
        id: 5,
        title: "Новости",
        sectionHref: "news",
    },
    {
        id: 6,
        title: "Стань волонтером",
        href: "https://dobro.ru/event/10230426",
    },
];
