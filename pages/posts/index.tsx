import React from 'react';
import {NextPage, GetStaticProps} from 'next'

import {getPosts} from '../../utils';
import {Post} from '../../interfaces';


interface Props {
  posts: Exclude<Post, 'content'>[]
}


const PostsPage: NextPage<Props> = ({posts}) => (
  <main>
    {posts.map(post => (
      <div key={post.slug}>
          <h1>{post.title} - {post.date}</h1>
      </div>
    ))}
  </main>
)

export default PostsPage


export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();
  return {
    props: {
      posts: posts.map(({content, ...rest}) => rest)
    }
  }
}

