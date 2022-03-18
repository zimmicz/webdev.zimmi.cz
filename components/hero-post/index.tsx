import Link from 'next/link';
import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { ReadTimeResults } from 'reading-time';
import { BannerImage } from '../banner-image';

type Props = {
    code: string;
    frontmatter: {
        image?: {
            url: string;
            aspectRatio: string;
            credit: string;
            width: number;
            height: number;
        };
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
        <article className="group p-20 w-full bg-gray-100 text-st-patricks-blue leading-10 gap-8 flex flex-wrap">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-wrap xl:flex-nowrap lg:justify-left lg:items-center gap-8">
                    <h1 className="text-3xl w-2/3 flex-shrink-0 lg:text-7xl font-title font-bold text-lavender">
                        <Link href="/">
                            <a className="text-decoration-fade from-lavender to-lavender py-1">{frontmatter.title}</a>
                        </Link>
                    </h1>
                    {frontmatter.image ? (
                        <BannerImage
                            src={frontmatter.image.url}
                            credit={frontmatter.image.credit}
                            aspectRatio={frontmatter.image.aspectRatio}
                            width={frontmatter.image.width}
                            height={frontmatter.image.height}
                        />
                    ) : null}
                </div>
                <Component />
            </div>
        </article>
    );
};

export { HeroPost };
