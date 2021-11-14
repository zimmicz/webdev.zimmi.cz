import React from 'react';
import { HeroPost, Layout, Newsletter, Post } from '../components';
import { getAllPosts } from '../lib/utils';
import { getCurrentBreakPoint } from '../utils';

function Home({ posts }: { posts: ReturnType<typeof getAllPosts> }) {
    const [breakpoint, setBreakpoint] = React.useState(() => getCurrentBreakPoint());
    const howMany = ['2xl'].includes(breakpoint) ? 3 : 4;

    React.useLayoutEffect(() => {
        const handler = () => {
            setBreakpoint(getCurrentBreakPoint());
        };
        window.addEventListener('resize', handler);

        return () => window.removeEventListener('resize', handler);
    }, []);

    return (
        <Layout>
            <div className="grid grid-cols-1 mx-5 xl:mx-20 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-8">
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>

            <HeroPost {...posts[0]} />

            <div className="grid grid-cols-1 mx-5 xl:mx-20 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-8">
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>

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
