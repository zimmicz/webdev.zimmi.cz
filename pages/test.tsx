import * as React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

export default function Post({ code, frontmatter }) {
    // it's generally a good idea to memoize this function call to
    // avoid re-creating the component every render.
    console.log('code', code);
    console.log('frontmatter', frontmatter);
    const Component = React.useMemo(() => getMDXComponent(code), [code]);
    return (
        <>
            <header>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.description}</p>
            </header>
            <main>
                <Component />
            </main>
        </>
    );
}
