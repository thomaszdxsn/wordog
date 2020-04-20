import React from 'react';
import marked from "marked";
import Highlight from "react-highlight";


interface Props {
  content: string;
}


const Markdown: React.FC<Props> = ({content}) => {
  return (
      <Highlight innerHTML={true} className={'markdown-body'}>
        {marked(content)}
      </Highlight>
  );
};


export default React.memo(Markdown);