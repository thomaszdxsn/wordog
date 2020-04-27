import React from 'react';
import {NextPage, GetStaticProps, GetStaticPaths} from "next";
import dynamic from "next/dynamic";
import {DiscussionEmbed} from "disqus-react";

import {ArticleLayout} from "../../layouts";
import {getPostsMeta} from "../../utils/articles";
import {Metadata} from "../../interfaces";


interface Props {
  metadata: Metadata
}

const PostPage: NextPage<Props> = ({metadata}) => {
  const Content = dynamic(
      () => import(`../../articles/tech/${metadata.filename}`),
      {ssr: false}
  );
  return (
      <ArticleLayout>
        <main>
          <Content />
          <section className='comment'>
            <DiscussionEmbed
                shortname={'thomaszdxsn-com'}
                config={{
                  url: 'https://thomaszdxsn.com',
                  identifier: metadata.slug,
                  title: metadata.title
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
  const slug = params!.slug!;
  const metadataArr = getPostsMeta().tech;
  const metadata = metadataArr.find(meta => meta.slug === slug)!;
  return {
    props: {
      metadata
    }
  }
};


export const getStaticPaths: GetStaticPaths = async () => {
  const metadata = getPostsMeta().tech;
  const paths = metadata.map(meta => ({params: {slug: meta.slug}}));

  return {
    paths,
    fallback: false
  }
};