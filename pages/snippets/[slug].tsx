import React from 'react';
import { getPublished, getAllCategories, getSinglePost } from '../../lib/utils';
import { Header, Layout, Post as PostComponent } from '../../components';

type Props = {
  snippet: PromiseReturnType<ReturnType<typeof getSinglePost>>;
  categories: PromiseReturnType<ReturnType<typeof getAllCategories>>;
};

const Snippet = ({ categories, snippet: post }: Props) => (
  <>
    <Header categories={categories} />
    <Layout>
      <PostComponent {...post} />
    </Layout>
  </>
);

const getStaticProps = async ({ params }: { params: Pick<Post, 'slug'> }) => {
  const posts = await getPublished('snippet');
  const categories = getAllCategories(posts);

  const post = await getSinglePost(params.slug);
  return {
    props: {
      post,
      categories,
    },
  };
};

const getStaticPaths = async () => {
  const paths = (await getPublished('snippet')).map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Snippet;
export { getStaticPaths, getStaticProps };
