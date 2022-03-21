import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typography, WrittenAt } from '..';
import { BannerImage } from '../banner-image';
import { ReadingTime } from '../reading-time';
import { withAnchor } from '../../hoc/anchor';

const Post = ({ code, frontmatter, readingTime, slug }: Post) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const { publishedAt, title, tags } = frontmatter;

  return (
    <motion.section
      initial="rest"
      whileHover="hover"
      className="transition-colors rounded-lg p-4 sm:p-10 leading-10 sm:leading-10 sm:text-base border-transparent hover:shadow-sm bg-white my-10"
    >
      <Typography.H1 className="mb-5">
        <Link href={`/posts/${slug}`}>
          <a className="text-decoration-fade from-primary to-primary hover:text-primary pb-2">{title}</a>
        </Link>
      </Typography.H1>
      <div className="text-gray-500 flex flex-wrap justify-between text-base gap-2">
        <WrittenAt date={publishedAt} />
        <ReadingTime readingTime={readingTime} />
        <ul className="flex space-x-6">
          {tags.map((tag) => (
            <li key={tag}>
              <Link href="/tags/react">
                <a className="bg-white text-primary pb-2 font-title font-bold text-lg text-decoration-fade from-primary to-primary">
                  {tag}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {frontmatter.image ? <BannerImage {...frontmatter.image} /> : null}
      <div>
        <Component
          components={{
            h2: withAnchor(Typography.H2),
            h3: withAnchor(Typography.H3),
            h4: withAnchor(Typography.H4),
            h5: withAnchor(Typography.H5),
            h6: withAnchor(Typography.H6),
            p: Typography.Paragraph,
          }}
        />
      </div>
    </motion.section>
  );
};

export { Post };
