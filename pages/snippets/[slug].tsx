import React from 'react';
import { getPublished, getSinglePost, takeLatest } from '../../lib/utils';
import { Layout, Post as PostComponent } from '../../components';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  snippet: PromiseReturnType<ReturnType<typeof getSinglePost>>;
};

type Params = Pick<Post, 'slug'>;

const Snippet = ({ snippet }: Props) => (
  <Layout>
    <PostComponent {...snippet} />
  </Layout>
);

const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  if (!context.params?.slug) {
    return {
      props: {
        snippet: {} as Post,
      },
    };
  }

  const snippet = await getSinglePost(context.params.slug);

  return {
    props: {
      snippet,
    },
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  const paths = takeLatest(await getPublished('snippet')).map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export default Snippet;
export { getStaticPaths, getStaticProps };
