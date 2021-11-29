import Link from 'next/link';
import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { ReadTimeResults } from 'reading-time';
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

const HeroPost = ({ frontmatter, ...props }: Props) => {
    console.log(props);
    const Component = React.useMemo(() => getMDXComponent(props.code), [props.code]);

    return (
        <article className="group p-20 w-full bg-cornsilk text-st-patricks-blue leading-10 gap-8 flex flex-wrap">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-wrap xl:flex-nowrap lg:justify-around lg:items-center gap-8">
                    <h1 className="text-3xl w-2/3 flex-shrink-0 lg:text-7xl font-title font-bold text-lavender">
                        <Link href="/">
                            <a className="hover:border-b hover:border-lavender">{frontmatter.title}</a>
                        </Link>
                    </h1>
                    <BannerImage
                        src={frontmatter.imageUrl}
                        credit={frontmatter.imageCredit}
                        aspectRatio={frontmatter.imageAspectRatio}
                    />
                </div>
                <Component />
            </div>
        </article>
    );
};

export { HeroPost };
