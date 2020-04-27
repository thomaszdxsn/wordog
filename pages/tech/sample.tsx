import React from 'react';
import dynamic from "next/dynamic";

import {ArticleLayout} from "../../layouts";


const Content = dynamic(
    () => import('../../articles/tech/how-to-setup-staging-environment-for-CRA.mdx'),
    {ssr: false}
)


export default () => (
    <ArticleLayout>
        <Content />
    </ArticleLayout>
)