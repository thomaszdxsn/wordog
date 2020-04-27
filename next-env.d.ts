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

declare module 'github-markdown-css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}


declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element
    export default MDXComponent
}


declare module 'extract-mdx-metadata' {
    export default any;
}