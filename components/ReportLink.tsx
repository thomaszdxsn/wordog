import React from 'react';
import Tag from './Tag'

interface Props {
  title: string;
  link: string;
  tags?: string[];
}


// TODO 1: 加入预计阅读时间
// TODO 2: 加入阅读次数
const ReportLink: React.FC<Props> = props => {
  const {children, title, link, tags} = props;
  const linkDomain = new URL(link).hostname;
  return (
    <article>
      <h3 className='link-title'>{title}</h3>
      <a href={link} className='link-url' target='_blank'>{`🔗链接：${linkDomain}`}</a>
      <div className={'link-brief'}>
        {children}
      </div>
      {tags?.map(tag => <Tag key={tag} tagName={tag} />)}
      <style jsx>{`
        article {
          padding: 1rem 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }
        article:hover {
         box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .link-title {
          margin: .5rem 0;
        }
        
        .link-url {
          padding: 1rem 0;
          text-decoration: none;
        }
        a.link-url:visited {
          color: rgb(6, 95, 212);
        }
        a:hover {
          text-decoration: underline;
        }
        .link-brief {
          padding: 1rem 0;
        }
      `}</style>
    </article>
  )
};

export default ReportLink;
