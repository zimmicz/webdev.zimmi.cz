/// <reference types="../types" />

import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';
import { remarkCodeHike } from '@code-hike/mdx';
import { LATEST_NUMBER, POSTS_PATH } from '../config';
import _ from 'lodash';
//import module from 'module';
//const require = module.createRequire(import.meta.url);
// require instead of import is used because of the npm `write` script
// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('shiki/themes/dark-plus.json');

const cache: Record<'posts' | 'snippets', Post[] | null> & { categories: string[] | null } = {
  posts: null,
  snippets: null,
  categories: null,
};

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
  const cacheKey = type === 'post' ? 'posts' : 'snippets';
  const cached = cache[cacheKey];

  if (cached) {
    return cached;
  }

  const items = await getPostsAndSnippets();
  const published = items.filter((item) => item.frontmatter.type === type && item.frontmatter.status === 'published');
  published.sort(sortByDate);
  cache[cacheKey] = published;

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

const getCategories = (items: Post[]) =>
  _(items)
    .map((item) => _.result<string[]>(item, 'frontmatter.categories'))
    .flatten()
    .uniq()
    .sort()
    .valueOf();

const getAllCategories = async () => {
  const posts = await getPublished('post');
  const snippets = await getPublished('snippet');

  return getCategories([...posts, ...snippets]);
};

const takeLatest = (items: Post[]) => _.take(items, LATEST_NUMBER);

const slugify = (filepath: string) => {
  const result = filepath.replace(path.join(POSTS_PATH), '').replace('.mdx', '').split('/').reverse()[0];
  return result;
};

const sortByDate = (a: Post, b: Post) => {
  const aDate = new Date(a.frontmatter.publishedAt).valueOf();
  const bDate = new Date(b.frontmatter.publishedAt).valueOf();

  return bDate - aDate;
};

export { sortByDate, getPublished, getAllCategories, getSinglePost, getSourceOfFile, getPostsAndSnippets, takeLatest };
