import React from 'react';
import { Header, Layout, Teaser, Typography } from '../../components';
import { getPublished, getAllCategories } from '../../lib/utils';

type Props = {
  snippets: PromiseReturnType<ReturnType<typeof getPublished>>;
  categories: PromiseReturnType<ReturnType<typeof getAllCategories>>;
};

function Snippets({ categories, snippets: posts }: Props) {
  return (
    <>
      <Header categories={categories} />
      <Layout>
        <Typography.H2 className="py-4">Latest</Typography.H2>
        {posts ? posts.map((post, index) => <Teaser key={index} {...post} />) : 'not found'}
      </Layout>
    </>
  );
}

const getStaticProps = async () => {
  const snippets = await getPublished('snippet');
  const latestTen = snippets.slice(0, 10);
  const categories = getAllCategories(snippets);

  return {
    props: { categories, posts: latestTen },
  };
};

export default Snippets;
export { getStaticProps };
