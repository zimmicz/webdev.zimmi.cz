import React from 'react';
import { Header, Layout, Teaser } from '../components';
import { generateFeed } from '../lib/feed';
import { getAllPosts, getAllCategories } from '../lib/utils';

function Home({
  categories,
  posts,
}: {
  posts: PromiseReturnType<ReturnType<typeof getAllPosts>>;
  categories: PromiseReturnType<ReturnType<typeof getAllCategories>>;
}) {
  return (
    <>
      <Header categories={categories} />
      <Layout>
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
