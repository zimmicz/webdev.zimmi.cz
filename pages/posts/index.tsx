import { GetStaticProps } from 'next';
import React from 'react';
import { Layout, NoData, Teaser, Typography } from '../../components';
import { getPublished, takeLatest } from '../../lib/utils';

type Props = {
  posts: PromiseReturnType<ReturnType<typeof getPublished>>;
};

function Posts({ posts }: Props) {
  return (
    <Layout>
      <Typography.H2 className="py-4">Latest posts</Typography.H2>
      {posts.length === 0 ? <NoData /> : posts.map((post, index) => <Teaser key={index} {...post} />)}
    </Layout>
  );
}

const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPublished('post');
  const latest = takeLatest(posts);

  return {
    props: { posts: latest },
  };
};

export default Posts;
export { getStaticProps };
