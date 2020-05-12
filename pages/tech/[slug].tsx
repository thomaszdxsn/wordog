import React from 'react';
import {NextPage, GetStaticProps, GetStaticPaths} from "next";
import dynamic from "next/dynamic";
import {NextSeo} from 'next-seo';

import {ArticleLayout} from "../../layouts";
import {getPostsMeta} from "../../server-utils";
import {Metadata} from "../../interfaces";
import {usePercentScrollAsTitle} from "../../utils";


interface Props {
  metadata: Metadata
}

const PostPage: NextPage<Props> = ({metadata}) => {
  usePercentScrollAsTitle();
  const Content = dynamic(
      () => import(`../../articles/tech/${metadata.filename}`),
      {ssr: false}
  );
  return (
      <ArticleLayout>
        <NextSeo
          title={metadata.title}
          description={metadata.description}
          openGraph={{
            title: metadata.title,
            description: metadata.description,
            images: metadata.ogImages
          }}
        />
        <main>
          <Content />
        </main>
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