import React from 'react';
import CodeBlock from "./CodeBlock";


export default {title: 'CodeBlock'}


export const Example = () => {
  return (
      <CodeBlock>
        {`
          print('hello world')
        `}
      </CodeBlock>
  )
};