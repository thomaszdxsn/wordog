import React from 'react';
import {NextPage, GetStaticPaths, GetStaticProps} from "next";
import {DiscussionEmbed} from "disqus-react";

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
          <section className='comment'>
            <DiscussionEmbed
                shortname={'thomaszdxsn-com'}
                config={{
                  url: 'https://thomaszdxsn.com',
                  identifier: post.slug,
                  title: post.title
                }}
            />
          </section>
        </main>

        <style jsx>{`
          .comment {
            margin-top: 2rem;
          }
        `}</style>
      </BasicLayout>
  )
};

export default PostPage;


export const getStaticProps: GetStaticProps<Props, {slug: string}> = async ({params}) => {
  const posts = getPosts();
  const {slug} = params!;
  const post = posts.find(post => post.slug === slug)!;
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