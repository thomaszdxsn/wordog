import React from 'react';
import {NextPage, GetStaticPaths, GetStaticProps} from "next";

import {BasicLayout} from "../../layouts";
import {getPosts} from "../../utils";
import {Post} from "../../interfaces";
import {Markdown} from "../../components";


interface Props {
  post: Post;
}

const PostPage: NextPage<Props> = ({post}) => {
  return (
      <BasicLayout>
        <main>
          <Markdown content={post.content} />
        </main>

        <style jsx>{`
          main {
            display: block;
            max-width: 760px;
            padding-top: 5rem;
          }
        `}</style>
      </BasicLayout>
  )
};

export default PostPage;


export const getStaticProps: GetStaticProps<Props, {slug: string}> = async ({params}) => {
  const posts = getPosts();
  const {slug} = params!;
  const post = posts.find(post => post.slug === slug)!
  return {
    props: {
      post,
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();
  const paths = posts.map(post => ({params: {slug: post.slug}}));

  return {
    paths,
    fallback: false
  }
};