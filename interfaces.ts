export interface Post {
    title: string;
    slug: string;
    author: string;
    content: string;
    date: string;
    berif?: string;
    tag?: string[];
}


export interface TechPost extends Post {};


export interface Metadata {
    author: string;
    date: string;
    title: string;
    slug: string;
    filename: string;
    tags: string[]
}

