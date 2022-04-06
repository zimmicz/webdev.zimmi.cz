import React from 'react';
import { Header, Layout, Teaser, Typography } from '../../components';
import { getPublished, takeLatest } from '../../lib/utils';

type Props = {
  snippets: PromiseReturnType<ReturnType<typeof getPublished>>;
};

function Snippets({ snippets: posts }: Props) {
  return (
    <>
      <Header />
      <Layout>
        <Typography.H2 className="py-4">Latest snippets</Typography.H2>
        {posts ? posts.map((post, index) => <Teaser key={index} {...post} />) : 'not found'}
      </Layout>
    </>
  );
}

const getStaticProps = async () => {
  const snippets = await getPublished('snippet');
  const latest = takeLatest(snippets);

  return {
    props: { snippets: latest },
  };
};

export default Snippets;
export { getStaticProps };
