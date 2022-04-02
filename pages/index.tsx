import React from 'react';
import { Header, Layout, Teaser, Typography } from '../components';
import { generateFeed } from '../lib/feed';
import { getAllPosts, getAllCategories } from '../lib/utils';

type Props = {
  posts: PromiseReturnType<ReturnType<typeof getAllPosts>>;
  categories: PromiseReturnType<ReturnType<typeof getAllCategories>>;
};

function Home({ categories, posts }: Props) {
  return (
    <>
      <Header categories={categories} />
      <Layout>
        <Typography.H2>Latest</Typography.H2>
        {posts.map((post, index) => (
          <Teaser key={index} {...post} />
        ))}
      </Layout>
    </>
  );
}

const getStaticProps = async () => {
  const posts = await getAllPosts();
  const categories = getAllCategories(posts);

  generateFeed(posts);

  return {
    props: { categories, posts },
  };
};

export default Home;
export { getStaticProps };
