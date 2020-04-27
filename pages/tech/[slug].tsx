import React from 'react';
import {NextPage, GetStaticProps, GetStaticPaths} from "next";
import dynamic from "next/dynamic";
import {DiscussionEmbed} from "disqus-react";

import {ArticleLayout} from "../../layouts";


interface Props {
  slug: string;
}

const PostPage: NextPage<Props> = ({slug}) => {
  const Content = dynamic(
      () => import(`../../articles/tech/${slug}.mdx`),
      {ssr: false}
  )
  return (
      <ArticleLayout>
        <main>
          <Content />
          <section className='comment'>
            <DiscussionEmbed
                shortname={'thomaszdxsn-com'}
                config={{
                  url: 'https://thomaszdxsn.com',
                  identifier: slug,
                  title: slug
                }}
            />
          </section>
        </main>

        <style jsx>{`
          .comment {
            margin-top: 5rem;
          }
        `}</style>
      </ArticleLayout>
  )
};

export default PostPage;


export const getStaticProps: GetStaticProps<Props, {slug: string}> = async ({params}) => {
  // const posts = getPosts();
  // const postDir = join(process.cwd(), 'articles');
  const {slug} = params!;
  return {
    props: {
      slug,
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  const posts = ['how-to-setup-staging-environment-for-CRA'];
  const paths = posts.map(post => ({params: {slug: post}}));

  return {
    paths,
    fallback: false
  }
};