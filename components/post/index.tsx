import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PostCtaLink, Typography, WrittenAt } from '..';
import { BannerImage } from '../banner-image';

const Post = ({ code, frontmatter, readingTime, slug }: Post) => {
    console.log(frontmatter);
    const Component = React.useMemo(() => getMDXComponent(code), [code]);
    const { publishedAt, title, tags } = frontmatter;

    return (
        <motion.section
            initial="rest"
            whileHover="hover"
            className="group transition-colors rounded-lg bg-st-patricks-blue text-gray-300 p-4 sm:p-10 leading-10 sm:leading-10 sm:text-base border-transparent flex flex-col gap-6 lg:gap-8 hover:shadow-sm"
        >
            <Typography.H1>
                <Link href={`/posts/${slug}`}>
                    <a className="text-decoration-fade from-lavender to-lavender pb-2">{title}</a>
                </Link>
            </Typography.H1>
            <div className="flex flex-wrap justify-between text-base gap-2">
                <WrittenAt date={publishedAt} />
                <ul className="flex space-x-4">
                    {tags.map((tag) => (
                        <li key={tag}>
                            <Link href="/tags/react">
                                <a className="border-lavender border py-1 px-4 rounded-lg from-lavender to-lavender tag-decoration-fade">
                                    <small>{tag}</small>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {frontmatter.image ? (
                <BannerImage
                    credit={frontmatter.image.credit}
                    url={frontmatter.image.url}
                    aspectRatio={frontmatter.image.aspectRatio}
                    width={frontmatter.image.width}
                    height={frontmatter.image.height}
                />
            ) : null}
            <Component
                components={{
                    h2: Typography.H2,
                    h3: Typography.H3,
                    h4: Typography.H4,
                    h5: Typography.H5,
                    h6: Typography.H6,
                }}
            />

            <PostCtaLink slug={slug} readingTime={readingTime} />
        </motion.section>
    );
};

export { Post };
