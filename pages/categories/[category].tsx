import { GetStaticPaths, GetStaticProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import React from 'react';
import { Layout, Teaser, Typography } from '../../components';
import { getPublished, getAllCategories } from '../../lib/utils';
import Tag from '../../public/icons/tag.svg';

type Props = {
  items: PromiseReturnType<ReturnType<typeof getPublished>>;
  category: Post['frontmatter']['categories'][number];
};

type Params = NextParsedUrlQuery & Pick<Props, 'category'>;

const Category = ({ category, items }: Props) => {
  return (
    <Layout>
      <Typography.H2 className="py-4 capitalize flex items-center space-x-2">
        <span>{category}</span>
        <Tag className="mt-[7px] lg:mt-[14px]" />
      </Typography.H2>
      {items.map((item) => (
        <Teaser key={item.slug} {...item} />
      ))}
    </Layout>
  );
};

const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const posts = getPublished('post');
  const snippets = getPublished('snippet');
  const items = [...(await posts), ...(await snippets)];

  if (!context.params?.category) {
    return {
      props: {
        items: [],
        category: '',
      },
    };
  }

  const { params } = context;

  const filtered = items.filter((item) => item.frontmatter.categories.includes(params.category));

  return {
    props: {
      items: filtered,
      category: params.category,
    },
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getAllCategories()).map((category) => `/categories/${category}`);
  return {
    paths,
    fallback: false,
  };
};

export default Category;
export { getStaticProps, getStaticPaths };
