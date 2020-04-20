export interface Post {
    title: string;
    slug: string;
    author: string;
    content: string;
    date: string | Date;
    berif?: string;
    tag?: string[];
}