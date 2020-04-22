import React from 'react';
import Link from 'next/link';
import {NextPage, GetStaticProps} from 'next'

import {BasicLayout} from "../../layouts";
import {getPosts} from '../../utils';
import {Post} from '../../interfaces';


interface Props {
  posts: Exclude<Post, 'content'>[]
}


const PostsPage: NextPage<Props> = ({posts}) => {
  const groupByPosts = posts.reduce(
      (acc, curr) => {
        const year = curr.date.split('-')[0];
        return {
            ...acc,
            [year]: [...(acc[year] || []), curr]
        }
      },
      {} as {[year: string]: typeof posts}
  );

  return (
      <BasicLayout>
        <main>
          <h1>Posts</h1>
          <article>
            {Object.entries(groupByPosts).sort((prev, curr) => prev[0] < curr[0] ? 1 : -1).map(([year, posts]) => (
                <section key={year}>
                  <h2>{year}</h2>
                  <ul>
                    {posts.map(post => (
                      <li key={post.slug}>
                        <Link href={'/posts/[slug]'} as={`/posts/${post.slug}`} passHref>
                          <a>
                            <span>{post.title}</span>
                            <span>{`${post.date.split('-')[1]}月${post.date.split('-')[2]}日`}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
            ))}
          </article>
        </main>

        <style jsx>{`
          main {
            width: 100%;
            max-width: 760px;
          }
        
          ul {
            list-style-type: none;
          }
          
          li {
            padding: .5rem 0;
            border-bottom: 1px dotted black;
          }
          
          li > a {
            display: flex;
            justify-content: space-between;
            color: inherit;
            text-decoration: none;
          }
        `}</style>
      </BasicLayout>
    )
};

export default PostsPage


export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();
  return {
    props: {
      posts: posts.map(({content, ...rest}) => rest).sort(
          (prev, curr) => prev.date < curr.date ? 1 : -1
      )
    }
  }
};

