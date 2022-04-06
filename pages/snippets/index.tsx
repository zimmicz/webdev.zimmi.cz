import React from 'react';
import { Header, Layout, Teaser, Typography } from '../../components';
import { getPublished, getCategoriesByType } from '../../lib/utils';

type Props = {
  snippets: PromiseReturnType<ReturnType<typeof getPublished>>;
  categories: PromiseReturnType<ReturnType<typeof getCategoriesByType>>;
};

function Snippets({ categories, snippets: posts }: Props) {
  return (
    <>
      <Header categories={categories} />
      <Layout>
        <Typography.H2 className="py-4">Latest snippets</Typography.H2>
        {posts ? posts.map((post, index) => <Teaser key={index} {...post} />) : 'not found'}
      </Layout>
    </>
  );
}

const getStaticProps = async () => {
  const snippets = await getPublished('snippet');
  const latest = snippets.slice(0, 9);
  const categories = await getCategoriesByType('snippet');

  return {
    props: { categories, snippets: latest },
  };
};

export default Snippets;
export { getStaticProps };
