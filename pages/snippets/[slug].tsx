import React from 'react';
import { getPublished, getSinglePost, getCategoriesByType } from '../../lib/utils';
import { Header, Layout, Post as PostComponent } from '../../components';

type Props = {
  snippet: PromiseReturnType<ReturnType<typeof getSinglePost>>;
  categories: PromiseReturnType<ReturnType<typeof getCategoriesByType>>;
};

const Snippet = ({ categories, snippet }: Props) => (
  <>
    <Header categories={categories} />
    <Layout>
      <PostComponent {...snippet} />
    </Layout>
  </>
);

const getStaticProps = async ({ params }: { params: Pick<Post, 'slug'> }) => {
  const categories = await getCategoriesByType('snippet');

  const snippet = await getSinglePost(params.slug);
  return {
    props: {
      snippet,
      categories,
    },
  };
};

const getStaticPaths = async () => {
  const paths = (await getPublished('snippet')).slice(0, 9).map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export default Snippet;
export { getStaticPaths, getStaticProps };
