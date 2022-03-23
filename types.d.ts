import type { ReadTimeResults } from 'reading-time';

declare global {
  type Defined<T> = Exclude<T, undefined>;

  type Post = {
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
      categories: Array<string>;
      title: string;
      excerpt: string;
    };
    readingTime: ReadTimeResults;
    slug: string;
  };

  type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T;
}

export {};
