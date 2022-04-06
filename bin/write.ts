import path from 'node:path';
import fs from 'node:fs/promises';
import inquirer from 'inquirer';
import { getAllCategories, getPostsAndSnippets } from '../lib/utils';
import _ from 'lodash';
import { POSTS_PATH } from '../config';
import yaml from 'js-yaml';

/*
status: published
type: post
publishedAt: "2021-11-14"
categories: [react, typescript, hooks]
excerpt: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius interdum purus nec laoreet. Nullam efficitur felis ut nisl placerat, sed egestas quam tincidunt
image:
    url: https://unsplash.com/photos/n_qeUPl4QCM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8OSUzQTE2fHwwfHx8fDE2Mzc0ODU2Nzc&force=true
    credit: Michal Zimmermann
    aspectRatio: "9:16"
    height: 4608
    width: 2592
    */

type Answers = {
  title: Post['frontmatter']['title'];
  type: Post['frontmatter']['type'];
  categories: Post['frontmatter']['categories'];
  excerpt: Post['frontmatter']['excerpt'];
};

const handleAnswers = async (answers: Answers) => {
  const foldername = _.kebabCase(answers.title);
  const folder = path.join(POSTS_PATH, foldername);
  const file = path.join(folder, `${foldername}.mdx`);
  const date = new Date();
  const metadata: Post['frontmatter'] = {
    ...answers,
    publishedAt: `'${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}'`,
    status: 'draft',
  };
  await fs.mkdir(folder);
  await fs.writeFile(
    file,
    `---
${yaml.dump(metadata)}
---`,
  );
};

inquirer
  .prompt<Answers>([
    {
      name: 'title',
      type: 'input',
      validate: (input) => {
        if (input) {
          return true;
        }

        return 'Please choose title';
      },
    },
    {
      name: 'type',
      type: 'list',
      choices: ['snippet', 'post'],
    },
    {
      name: 'categories',
      type: 'checkbox',
      choices: function () {
        return new Promise((resolve) => {
          getPostsAndSnippets().then(getAllCategories).then(resolve);
        });
      },
      validate: (input) => {
        if (input.length > 0) {
          return true;
        }

        return 'Please choose at least one category';
      },
    },
    {
      name: 'excerpt',
      type: 'input',
    },
  ])
  .then(handleAnswers);
