import React from 'react';
import { Header, Layout, Teaser, Typography } from '../../components';
import { getAllPosts, getAllCategories } from '../../lib/utils';
import Tag from '../../public/icons/tag.svg';

type Props = {
  posts: PromiseReturnType<ReturnType<typeof getAllPosts>>;
  categories: PromiseReturnType<ReturnType<typeof getAllCategories>>;
  category: Props['categories'][number];
};

const Category = ({ category, categories, posts }: Props) => {
  return (
    <>
      <Header categories={categories} />
      <Layout>
        <Typography.H2 className="py-4 capitalize flex items-center space-x-2">
          <span>{category}</span>
          <Tag className="mt-[7px]" />
        </Typography.H2>
        {posts.map((post) => (
          <Teaser key={post.slug} {...post} />
        ))}
      </Layout>
    </>
  );
};

const getStaticProps = async ({ params }: { params: { category: Props['categories'][number] } }) => {
  const posts = await getAllPosts();
  const filteredPosts = posts.filter((post) => post.frontmatter.categories.includes(params.category));
  const categories = getAllCategories(posts);

  return {
    props: {
      posts: filteredPosts,
      categories,
      category: params.category,
    },
  };
};

const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = getAllCategories(posts).map((category) => `/categories/${category}`);
  return {
    paths,
    fallback: false,
  };
};

export default Category;
export { getStaticProps, getStaticPaths };
