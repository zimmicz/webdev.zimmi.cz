import React from 'react';
import { Header, Layout, Teaser, Typography } from '../components';
import { generateFeed } from '../lib/feed';
import { getPublished, getAllCategories, sortByDate, takeLatest } from '../lib/utils';

type Props = {
  items: PromiseReturnType<ReturnType<typeof getPublished>>;
  categories: PromiseReturnType<ReturnType<typeof getAllCategories>>;
};

function Home({ categories, items }: Props) {
  return (
    <>
      <Header categories={categories} />
      <Layout>
        <Typography.H2 className="py-4">Latest</Typography.H2>
        {items.map((item, index) => (
          <Teaser key={index} {...item} />
        ))}
      </Layout>
    </>
  );
}

const getStaticProps = async () => {
  const posts = await getPublished('post');
  const snippets = await getPublished('snippet');
  const categories = await getAllCategories();
  const latestPosts = takeLatest(posts);
  const latestSnippets = takeLatest(snippets);
  const latestItems = [...latestPosts, ...latestSnippets].sort(sortByDate);

  generateFeed(latestItems);

  return {
    props: { categories, items: latestItems },
  };
};

export default Home;
export { getStaticProps };
