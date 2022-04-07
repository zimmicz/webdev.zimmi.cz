import { GetStaticProps } from 'next';
import React from 'react';
import { Layout, NoData, Teaser, Typography } from '../../components';
import { getPublished, takeLatest } from '../../lib/utils';

type Props = {
  snippets: PromiseReturnType<ReturnType<typeof getPublished>>;
};

function Snippets({ snippets: posts }: Props) {
  return (
    <Layout>
      <Typography.H2 className="py-4">Latest snippets</Typography.H2>
      {posts.length === 0 ? <NoData /> : posts.map((post, index) => <Teaser key={index} {...post} />)}
    </Layout>
  );
}

const getStaticProps: GetStaticProps<Props> = async () => {
  const snippets = await getPublished('snippet');
  const latest = takeLatest(snippets);

  return {
    props: { snippets: latest },
  };
};

export default Snippets;
export { getStaticProps };
