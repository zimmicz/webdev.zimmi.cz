import React from 'react';
import { getPublished, getSinglePost } from '../../lib/utils';
import { Layout, Post as PostComponent } from '../../components';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  post: PromiseReturnType<ReturnType<typeof getSinglePost>>;
};

type Params = NextParsedUrlQuery & Pick<Post, 'slug'>;

const Post = ({ post }: Props) => (
  <Layout>
    <PostComponent {...post} />
  </Layout>
);

const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  if (!context.params?.slug) {
    return {
      props: {
        post: {} as Post,
      },
    };
  }

  const post = await getSinglePost(context.params.slug);
  return {
    props: {
      post,
    },
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getPublished('post')).slice(0, 9).map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
export { getStaticPaths, getStaticProps };
