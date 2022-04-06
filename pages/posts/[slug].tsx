import React from 'react';
import { getPublished, getSinglePost } from '../../lib/utils';
import { Header, Layout, Post as PostComponent } from '../../components';

type Props = {
  post: PromiseReturnType<ReturnType<typeof getSinglePost>>;
};

const Post = ({ post }: Props) => (
  <>
    <Header />
    <Layout>
      <PostComponent {...post} />
    </Layout>
  </>
);

const getStaticProps = async ({ params }: { params: Pick<Post, 'slug'> }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: {
      post,
    },
  };
};

const getStaticPaths = async () => {
  const paths = (await getPublished('post')).slice(0, 9).map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
export { getStaticPaths, getStaticProps };
