import React from 'react';
import { Grid, HeroPost, Layout, Newsletter, Post } from '../components';
import { getAllPosts } from '../lib/utils';

function Home({ posts }: { posts: PromiseReturnType<ReturnType<typeof getAllPosts>> }) {
    return (
        <Layout>
            <Grid>
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </Grid>

            <HeroPost {...posts[0]} />

            <Grid>
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </Grid>

            <HeroPost {...posts[0]} />

            <Newsletter />
        </Layout>
    );
}

export const getStaticProps = async () => {
    const posts = await getAllPosts();

    return {
        props: { posts },
    };
};

export default Home;
