import React from 'react';
import { getAllPosts, getSinglePost } from '../../lib/utils';
import { Layout, Post as PostComponent } from '../../components';
import { Background } from '../../components/background';

type Resolve<T> = T extends Promise<infer Item> ? Item : T;

const Post = (props: Resolve<ReturnType<typeof getSinglePost>>) => (
  <Background>
    <Layout>
      <PostComponent {...props} />
    </Layout>
  </Background>
);

const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

const getStaticPaths = async () => {
  const paths = (await getAllPosts()).map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
export { getStaticPaths, getStaticProps };
