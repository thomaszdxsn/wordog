import React from 'react';
import {makeStarRank} from "../../utils";

interface Props {
  name: string;
  author: string;
  imageUrl: string;
  doubanUrl: string;
  brief: string;
  rate: number;
  color?: string;
  bgColor?: string;
}


const BookCard: React.FC<Props> = props => {
  const {bgColor='#333', color='#fff', name, author, brief, imageUrl, rate, doubanUrl} = props;
  return (
   <div className={'container'}>
     <div className='douban-rate'>
       <p className={'rate-stars'}>{makeStarRank(Math.ceil(rate / 2))}</p>
       <p className={'rate-score'}>{rate}</p>
     </div>
     <a href={doubanUrl} target='_blank'>
       <img src={imageUrl} alt={name} className='book-cover'  />
     </a>
     <div className={'book-card'}>
       <div className='book-info'>
         <h3>{name}</h3>
         <p>作者：{author}</p>
       </div>
       <p className='book-brief'>{brief}</p>
     </div>

     <style jsx>{`
      .container {
        width: 35rem;
        position: relative;
      }
      .douban-rate {
        text-align: right;
        padding-right: 1rem;
        margin: 1rem 0;
      }
      .douban-rate p {
        margin: 0;
        font-weight: bold;
      }
      .douban-rate .rate-stars {
        margin-right: 2.5rem;
      }
      .douban-rate .rate-stars::after {
         content: '|';
         transform: rotate(45deg);
         display: inline-block;
         position: absolute;
         top: 1rem;
         right: 3rem;
      }
      .book-cover {
        width: 10rem;
        height: 12rem;
        position: absolute;
        top: 0;
        left: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
      }
      .book-cover:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
      }
   
      .book-card {
        background: ${bgColor};
        background: linear-gradient(150deg, transparent 6rem, ${bgColor} 0);
        color: ${color};
        border-radius: 1rem;
        padding: 1rem;
      }
      .book-info {
        margin-left: 12rem;
      }
      .book-brief {
        padding-top: 2rem;
      }
     `}</style>
   </div>
  )
};

export default BookCard;