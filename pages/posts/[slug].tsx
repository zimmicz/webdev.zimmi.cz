import React from 'react';
import { getAllPosts, getAllCategories, getSinglePost } from '../../lib/utils';
import { Header, Layout, Post as PostComponent } from '../../components';

type Props = {
  post: PromiseReturnType<ReturnType<typeof getSinglePost>>;
  categories: PromiseReturnType<ReturnType<typeof getAllCategories>>;
};

const Post = ({ categories, post }: Props) => (
  <>
    <Header categories={categories} />
    <Layout>
      <PostComponent {...post} />
    </Layout>
  </>
);

const getStaticProps = async ({ params }: { params: Pick<Post, 'slug'> }) => {
  const categories = await getAllCategories();

  const post = await getSinglePost(params.slug);
  return {
    props: {
      post,
      categories,
    },
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
