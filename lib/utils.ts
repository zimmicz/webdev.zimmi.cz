import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';
import { remarkCodeHike } from '@code-hike/mdx';
import theme from 'shiki/themes/dark-plus.json';
import { POSTS_PATH } from '../config';

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
        xdmOptions(options) {
            options.remarkPlugins = [...(options.remarkPlugins ?? []), [remarkCodeHike, { theme }]];

            return options;
        },
        grayMatterOptions: (options) => {
            options.excerpt = true;

            return options;
        },
        cwd: POSTS_PATH,
    });

    return {
        code,
        frontmatter: frontmatter as Post['frontmatter'],
        matter,
        readingTime: readingTime(source),
        slug,
    };
};
