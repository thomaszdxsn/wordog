import fs from 'fs';
import {join} from "path";

import {Metadata} from "../interfaces";


interface PostsMetadata {
  tech: Metadata[]
}


export const getPostsMeta = () => {
  const metadata = fs.readFileSync(join(process.cwd(), 'articles', 'metadata.json'), 'utf-8');
  // TODO: verify metadata
  return JSON.parse(metadata) as PostsMetadata
};