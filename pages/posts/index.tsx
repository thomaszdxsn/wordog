import React from 'react';
import {NextPage, GetStaticProps} from 'next'

import {BasicLayout} from "../../layouts";
import {getPosts} from '../../utils';
import {Post} from '../../interfaces';


interface Props {
  posts: Exclude<Post, 'content'>[]
}


const PostsPage: NextPage<Props> = ({posts}) => (
  <BasicLayout>
    <main>
      {posts.map(post => (
        <div key={post.slug}>
            <p>{post.title} - {post.date}</p>
        </div>
      ))}
    </main>
  </BasicLayout>
);

export default PostsPage


export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();
  return {
    props: {
      posts: posts.map(({content, ...rest}) => rest)
    }
  }
}

