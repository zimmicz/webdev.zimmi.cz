import React from 'react';
import type { ReadTimeResults } from 'reading-time';
import { getMDXComponent } from 'mdx-bundler/client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PostCtaLink, Typography, WrittenAt } from '..';
import { BannerImage } from '../banner-image';

type Props = {
    code: string;
    frontmatter: {
        imageUrl?: string;
        imageAspectRatio?: string;
        publishedAt: string;
        tags: Array<string>;
        title: string;
    };
    readingTime: ReadTimeResults;
    slug: string;
};

const Post = ({ code, frontmatter, readingTime, slug }: Props) => {
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
                    <a className="hover:border-b hover:border-lavender">{title}</a>
                </Link>
            </Typography.H1>
            <div className="flex flex-wrap justify-between text-base gap-2">
                <WrittenAt date={publishedAt} />
                <ul className="flex space-x-4">
                    {tags.map((tag) => (
                        <li key={tag}>
                            <Link href="/tags/react">
                                <a>
                                    <small className="border-lavender border md:border-2 py-1 px-4 rounded-lg bg-st-patricks-blue hover:bg-lavender transition-colors">
                                        {tag}
                                    </small>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {frontmatter.imageUrl && frontmatter.imageAspectRatio ? (
                <BannerImage
                    className="transition group-hover:scale-100"
                    src={frontmatter.imageUrl}
                    aspectRatio={frontmatter.imageAspectRatio}
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
