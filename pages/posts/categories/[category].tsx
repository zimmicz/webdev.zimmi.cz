import React from 'react';
import { Header, Layout, Teaser } from '../../../components';
import { getAllPosts, getAllCategories } from '../../../lib/utils';

type Props = {
  posts: PromiseReturnType<ReturnType<typeof getAllPosts>>;
  categories: PromiseReturnType<ReturnType<typeof getAllCategories>>;
};

const Category = ({ categories, posts }: Props) => (
  <>
    <Header categories={categories} />
    <Layout>
      {posts.map((post) => (
        <Teaser key={post.slug} {...post} />
      ))}
    </Layout>
  </>
);

const getStaticProps = async ({ params }: { params: { category: Props['categories'][number] } }) => {
  const posts = await getAllPosts();
  const categories = getAllCategories(posts);

  return {
    props: {
      posts,
      categories,
    },
  };
};

const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = getAllCategories(posts).map((category) => `/posts/categories/${category}`);
  return {
    paths,
    fallback: false,
  };
};

export default Category;
export { getStaticProps, getStaticPaths };
