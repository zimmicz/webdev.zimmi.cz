import React from 'react';
import Prism from 'prismjs';
import { getMDXComponent } from 'mdx-bundler/client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typography, WrittenAt, BannerImage } from '..';
import { withAnchor } from '../../hoc/anchor';
import { PATHS } from '../../config';

Prism.manual = true;

const Post = (props: Post) => {
  const Component = React.useMemo(() => getMDXComponent(props.code), [props.code]);

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <BasePost {...props}>
      {props.frontmatter.image ? <BannerImage {...props.frontmatter.image} /> : null}
      <div>
        <Component
          components={{
            h2: withAnchor(Typography.H2),
            h3: withAnchor(Typography.H3),
            h4: withAnchor(Typography.H4),
            h5: withAnchor(Typography.H5),
            h6: withAnchor(Typography.H6),
            p: Typography.Paragraph,
            ol: Typography.Ol,
            ul: Typography.Ul,
            pre: (props) => <pre className="line-numbers">{props.children}</pre>,
          }}
        />
      </div>
    </BasePost>
  );
};

const Teaser = (props: Post) => (
  <BasePost {...props} className="mb-14">
    <Typography.Paragraph>{props.frontmatter.excerpt}</Typography.Paragraph>
  </BasePost>
);

const BasePost = ({
  className,
  children,
  slug,
  frontmatter: { publishedAt, categories, title, type },
}: React.PropsWithChildren<Post & { className?: string }>) => (
  <motion.section
    initial="rest"
    whileHover="hover"
    className={`rounded-lg leading-10 sm:leading-10 sm:text-base bg-white ${className}`}
  >
    <Typography.H1 className="mb-5">
      <Link href={`${type === 'post' ? PATHS.posts : PATHS.snippets}/${slug}`}>
        <a className="text-decoration-fade from-primary to-primary hover:text-primary pb-2">{title}</a>
      </Link>
    </Typography.H1>
    <div className="text-gray-500 flex flex-wrap justify-between text-base gap-2">
      <WrittenAt date={publishedAt} />
      <ul className="flex space-x-6">
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/categories/${category}`}>
              <a className="bg-white text-primary pb-2 font-title font-bold text-lg text-decoration-fade from-primary to-primary">
                {category}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    {children}
  </motion.section>
);

export { Post, Teaser };
