import React from 'react'
import {MDXProvider} from '@mdx-js/react'

import CodeBlock from '../components/CodeBlock'
import BasicLayout from "./BasicLayout";


const components = {
  code: CodeBlock
}

export default (props: any) => (
    <MDXProvider components={components}>
      <BasicLayout>
        {props.children}
      </BasicLayout>
    </MDXProvider>
)