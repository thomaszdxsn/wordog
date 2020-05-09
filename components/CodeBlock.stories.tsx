import React from 'react';
import CodeBlock from "./CodeBlock";


export default {title: 'CodeBlock'}


export const Normal = () => {
  return (
      <CodeBlock>
        {`
          print('hello world')
        `}
      </CodeBlock>
  )
};