import React from 'react';
import { getPublished, getSinglePost, getAllCategories, takeLatest } from '../../lib/utils';
import { Header, Layout, Post as PostComponent } from '../../components';

type Props = {
  snippet: PromiseReturnType<ReturnType<typeof getSinglePost>>;
};

const Snippet = ({ snippet }: Props) => (
  <>
    <Header />
    <Layout>
      <PostComponent {...snippet} />
    </Layout>
  </>
);

const getStaticProps = async ({ params }: { params: Pick<Post, 'slug'> }) => {
  const snippet = await getSinglePost(params.slug);

  return {
    props: {
      snippet,
    },
  };
};

const getStaticPaths = async () => {
  const paths = takeLatest(await getPublished('snippet')).map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export default Snippet;
export { getStaticPaths, getStaticProps };
