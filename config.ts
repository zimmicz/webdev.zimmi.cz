import path from 'path';

const BLOG_TITLE = 'Michal Zimmermann';
const BLOG_DESCRIPTION = 'Pieces of knowledge from the world of web development.';
const POSTS_FOLDER = 'content';
const POSTS_PATH = path.join(process.cwd(), POSTS_FOLDER);
const BLOG_URL = 'https://webdev.zimmi.cz';
const PATHS = {
  posts: '/posts',
  snippets: '/snippets',
  rss: '/feed.xml',
};

export { BLOG_TITLE, BLOG_DESCRIPTION, POSTS_PATH, BLOG_URL, PATHS };
