import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Feed } from 'feed';
import fs from 'fs';
import { BLOG_URL } from '../config';
import { getMDXComponent } from 'mdx-bundler/client';
import { Typography } from '../components';

export const generateFeed = (posts: Array<Post>) => {
  const author = {
    name: 'Michal Zimmermann',
    email: 'zimmicz@gmail.com',
    link: 'https://twitter.com/zimmicz',
  };

  const feed = new Feed({
    copyright: 'hello',
    title: 'Michal Zimmermann',
    description: 'Pieces of knowledge from the world of web development.',
    id: BLOG_URL,
    link: BLOG_URL,
    language: 'en',
    feedLinks: {
      rss2: `${BLOG_URL}/feed.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const {
      code,
      slug,
      frontmatter: { title, publishedAt },
    } = post;
    const url = `${BLOG_URL}/posts/${slug}`;

    const Component = getMDXComponent(code);
    const htmlContent = ReactDOMServer.renderToStaticMarkup(
      <Component
        components={{
          h2: Typography.H2,
          h3: Typography.H3,
          h4: Typography.H4,
          h5: Typography.H5,
          h6: Typography.H6,
          p: Typography.Paragraph,
          ol: Typography.Ol,
          ul: Typography.Ul,
        }}
      />,
    );

    feed.addItem({
      title,
      id: url,
      link: url,
      description: title,
      content: htmlContent,
      author: [author],
      date: new Date(publishedAt),
    });
  });

  fs.writeFileSync('public/feed.xml', feed.rss2());
};
