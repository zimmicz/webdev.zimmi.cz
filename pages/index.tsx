import React from 'react';
import { Layout, Teaser } from '../components';
import { generateFeed } from '../lib/feed';
import { getAllPosts } from '../lib/utils';

function Home({ posts }: { posts: PromiseReturnType<ReturnType<typeof getAllPosts>> }) {
  return (
    <Layout>
      {posts.map((post, index) => (
        <Teaser key={index} {...post} />
      ))}
    </Layout>
  );
}

const getStaticProps = async () => {
  const posts = await getAllPosts();

  generateFeed(posts);

  return {
    props: { posts },
  };
};

export default Home;
export { getStaticProps };
