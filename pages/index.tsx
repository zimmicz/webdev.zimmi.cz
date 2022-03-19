import React from 'react';
import { Layout, Newsletter, Post } from '../components';
import { Background } from '../components/background';
import { getAllPosts } from '../lib/utils';

function Home({ posts }: { posts: PromiseReturnType<ReturnType<typeof getAllPosts>> }) {
  return (
    <Background>
      <Layout>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
        <Newsletter />
      </Layout>
    </Background>
  );
}

const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
};

export default Home;
export { getStaticProps };
