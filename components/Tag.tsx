import React from 'react';


interface Props {
  tagName: string;
}


const Tag: React.FC<Props> = ({tagName}) => {
  // TODO: 为 tag 加入可点击链接，目标地址是 /tag/<tagname> 里面包含相应的文章或者相应的link
  return (
   <span>
     🏷{tagName}
     <style jsx>{`
      margin-right: 0.3rem;
      padding: .2rem .4rem;
      background-color: rgb(6, 95, 212);
      color: #fff;
      border-radius: 10%;
     `}</style>
   </span>
  )
};


export default Tag