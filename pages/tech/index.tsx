import React from "react";
import {NextPage} from "next";
import Link from "next/link";
import {BasicLayout} from "../../layouts";

import {getPosts} from '../../utils/articles'



const TechPosts: NextPage<{posts: any}> = props => {
  return (
      <BasicLayout>
        {props.posts.map((post: any) => (
            <Link key={post.slug} href={`/tech/[slug]`} as={`/tech/${post.slug}`} passHref>
              <a>
                {post.title}
              </a>
            </Link>
        ))}
      </BasicLayout>
  )
};
export default TechPosts;




export const getStaticProps = async() => {
  const metadata = getPosts()
  return {
    props: {
      posts: metadata.tech
    }
  }
}