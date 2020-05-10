import React from 'react';

import BookCard from "./BookCard";


export default {title: "BookCard"}


export const Normal = () => {
  return (
   <BookCard name={'CSS揭秘'}
             author={'[希]Lea Verou'}
             imageUrl={'https://img9.doubanio.com/view/subject/s/public/s28659699.jpg'}
             doubanUrl={'https://book.douban.com/subject/26745943/'}
             brief={'豆瓣最强 CSS 书籍'}
             bgColor={'#C51672'}
             color={'#EEF0EF'}
             rate={9.5}
   />
  )
};
