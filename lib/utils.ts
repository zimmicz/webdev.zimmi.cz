import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';
import { remarkCodeHike } from '@code-hike/mdx';
import theme from 'shiki/themes/dark-plus.json';
import { POSTS_PATH } from '../config';
import _ from 'lodash';

const getSourceOfFile = (fileName: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName));
};

const getAllPosts = async () => {
  const posts = await globby(POSTS_PATH, {
    expandDirectories: {
      extensions: ['mdx'],
    },
  });

  return Promise.all(
    posts.map(async (fileName) => {
      const post = await getSinglePost(slugify(fileName));
      return post;
    }),
  );
};

const getSinglePost = async (slug: string) => {
  const source = getSourceOfFile(slug + '/' + slug + '.mdx').toString();

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

const getAllCategories = (posts: Post[]) =>
  _(posts)
    .map((post) => _.result<string[]>(post, 'frontmatter.categories'))
    .flatten()
    .uniq()
    .sort()
    .valueOf();

const slugify = (filepath: string) => {
  const result = filepath.replace(path.join(POSTS_PATH), '').replace('.mdx', '').split('/').reverse()[0];
  return result;
};

export { getAllCategories, getSinglePost, getSourceOfFile, getAllPosts };
