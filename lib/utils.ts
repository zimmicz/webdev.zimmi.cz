import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';

export const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export const getSourceOfFile = (fileName: string) => {
    return fs.readFileSync(path.join(POSTS_PATH, fileName));
};

export const getAllPosts = async () => {
    return Promise.all(
        fs
            .readdirSync(POSTS_PATH)
            .filter((path) => /\.mdx?$/.test(path))
            .map(async (fileName) => {
                const slug = fileName.replace(/\.mdx?$/, '');
                const data = await getSinglePost(slug);
                return data;
            }),
    );
};

export const getSinglePost = async (slug: string) => {
    const source = getSourceOfFile(slug + '.mdx').toString();

    const { code, frontmatter, matter } = await bundleMDX(source, {
        grayMatterOptions: (options) => {
            options.excerpt = true;

            return options;
        },
        cwd: POSTS_PATH,
    });

    return {
        code,
        frontmatter,
        matter,
        readingTime: readingTime(source),
        slug,
    };
};
