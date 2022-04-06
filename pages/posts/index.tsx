import React from 'react';
import { Header, Layout, Teaser, Typography } from '../../components';
import { getPublished, getAllCategories } from '../../lib/utils';

type Props = {
  posts: PromiseReturnType<ReturnType<typeof getPublished>>;
  categories: PromiseReturnType<ReturnType<typeof getAllCategories>>;
};

function Posts({ categories, posts }: Props) {
  return (
    <>
      <Header categories={categories} />
      <Layout>
        <Typography.H2 className="py-4">Latest posts</Typography.H2>
        {posts.map((post, index) => (
          <Teaser key={index} {...post} />
        ))}
      </Layout>
    </>
  );
}

const getStaticProps = async () => {
  const posts = await getPublished('post');
  const latest = posts.slice(0, 9);
  const categories = await getAllCategories();

  return {
    props: { categories, posts: latest },
  };
};

export default Posts;
export { getStaticProps };
