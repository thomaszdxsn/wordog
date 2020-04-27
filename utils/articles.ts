import fs from 'fs';
import {join} from "path";

export const getPosts = () => {
  const metadata = fs.readFileSync(join(process.cwd(), 'articles', 'metadata.json'), 'utf-8')
  return JSON.parse(metadata)
}