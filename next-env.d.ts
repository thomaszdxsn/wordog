/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'

declare module "parse-md" {
    type parseResult = {
        metadata: {[key: string]: string};
        content: string;
    }

    export default (content: string) => parseResult
}