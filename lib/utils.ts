/// <reference types="../types" />

import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';
import { remarkCodeHike } from '@code-hike/mdx';
//import theme from 'shiki/themes/dark-plus.json';
import { POSTS_PATH } from '../config';
import _ from 'lodash';
import module from 'module';
const require = module.createRequire(import.meta.url);
const theme = require('shiki/themes/dark-plus.json');

const getSourceOfFile = (fileName: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName));
};

const getPostsAndSnippets = async () => {
  const files = await globby(POSTS_PATH, {
    expandDirectories: {
      extensions: ['mdx'],
    },
  });

  return Promise.all(
    files.map(async (fileName) => {
      const post = await getSinglePost(slugify(fileName));
      return post;
    }),
  );
};

const getPublished = async (type: 'post' | 'snippet') => {
  const items = await getPostsAndSnippets();
  const published = items.filter((item) => item.frontmatter.type === type && item.frontmatter.status === 'published');
  published.sort(sortByDate);

  return published;
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

const sortByDate = (a: Post, b: Post) => {
  const aDate = new Date(a.frontmatter.publishedAt);
  const bDate = new Date(b.frontmatter.publishedAt);

  if (aDate === bDate) {
    return 0;
  } else if (aDate > bDate) {
    return 1;
  }

  return -1;
};

export { getPublished, getAllCategories, getSinglePost, getSourceOfFile, getPostsAndSnippets };
