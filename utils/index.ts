import fs from 'fs';
import {join} from 'path';
import parseMD from 'parse-md';

import {Post} from '../interfaces'


const POSTS_DIR = join(process.cwd(), '_posts');


const readPostsDir = () => {
    return fs.readdirSync(POSTS_DIR)
};


const verifyMetadata = (metadata: {[key: string]: string | Date}) => {
    Object.entries(metadata).forEach(([key, value]) => {
        if (['title', 'date', 'author'].includes(key) && !value) {
            throw new Error(`metadata ${key} must not be empty`)
        }
        if (key === 'date' && value instanceof Date) {
            metadata[key] = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
        }
    })
};


const parseFile = (path: string) => {
    const file = fs.readFileSync(join(POSTS_DIR, path), 'utf8');
    const {metadata, content} = parseMD(file);
    verifyMetadata(metadata);
    return {
        content,
        ...{
            ...metadata,
            slug: metadata.slug || metadata.title
        }
    } as Post
};



export function getPosts(): Post[] {
    return readPostsDir().filter(path => path.endsWith(".md")).map(path => parseFile(path))
}
