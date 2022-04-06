import React from 'react';
import { Layout, Teaser, Typography } from '../components';
import { generateFeed } from '../lib/feed';
import { getPublished, sortByDate, takeLatest } from '../lib/utils';

type Props = {
  items: PromiseReturnType<ReturnType<typeof getPublished>>;
};

function Home({ items }: Props) {
  return (
    <Layout>
      <Typography.H2 className="py-4">Latest</Typography.H2>
      {items.map((item, index) => (
        <Teaser key={index} {...item} />
      ))}
    </Layout>
  );
}

const getStaticProps = async () => {
  const posts = await getPublished('post');
  const snippets = await getPublished('snippet');
  const latestPosts = takeLatest(posts);
  const latestSnippets = takeLatest(snippets);
  const latestItems = [...latestPosts, ...latestSnippets].sort(sortByDate);

  generateFeed(latestItems);

  return {
    props: { items: latestItems },
  };
};

export default Home;
export { getStaticProps };
