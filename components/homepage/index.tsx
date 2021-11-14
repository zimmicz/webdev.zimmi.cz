import React from 'react';
import * as txtgen from 'txtgen';
import { getCurrentBreakPoint } from '../../utils';
import { Header, HeroPost, Newsletter, Post } from '../';

const createPost = () => ({
    title: txtgen.sentence(),
    content: txtgen.paragraph(),
    tags: ['react', 'javascript'],
});

const Homepage = () => {
    const [breakpoint, setBreakpoint] = React.useState(() => getCurrentBreakPoint());
    console.log('breakpoint', breakpoint);
    const howMany = ['2xl'].includes(breakpoint) ? 3 : 4;
    const posts = Array(howMany).fill(0).map(createPost);

    React.useLayoutEffect(() => {
        const handler = () => {
            setBreakpoint(getCurrentBreakPoint());
        };
        window.addEventListener('resize', handler);

        return () => window.removeEventListener('resize', handler);
    }, []);

    return (
        <main className="space-y-10 flex flex-col items-center w-full flex-1 mb-10 mt-6 md:mt-16 ">
            <Header />

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
        </main>
    );
};

export { Homepage };
