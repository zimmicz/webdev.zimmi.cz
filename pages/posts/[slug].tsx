import React from 'react';
import { getAllPosts, getSinglePost } from '../../lib/utils';
import { Layout, Post as PostComponent } from '../../components';

type Resolve<T> = T extends Promise<infer Item> ? Item : T;

const Post = (props: Resolve<ReturnType<typeof getSinglePost>>) => (
    <Layout>
        <PostComponent {...props} />
    </Layout>
);

const getStaticProps = async ({ params }) => {
    const post = await getSinglePost(params.slug);
    console.log('post', post);
    return {
        props: { ...post },
    };
};

const getStaticPaths = async () => {
    const paths = (await getAllPosts()).map(({ slug }) => ({ params: { slug } }));
    return {
        paths,
        fallback: false,
    };
};

export default Post;
export { getStaticPaths, getStaticProps };
