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
        <Typography.H2 className="py-4">Latest</Typography.H2>
        {posts.map((post, index) => (
          <Teaser key={index} {...post} />
        ))}
      </Layout>
    </>
  );
}

const getStaticProps = async () => {
  const posts = (await getPublished('post')).slice(0, 10);
  const categories = getAllCategories(posts);

  return {
    props: { categories, posts },
  };
};

export default Posts;
export { getStaticProps };
