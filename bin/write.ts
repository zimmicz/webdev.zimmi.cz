import inquirer from 'inquirer';
import { getAllCategories, getPostsAndSnippets } from '../lib/utils';

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

inquirer.prompt([
  {
    name: 'title',
    type: 'input',
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
  },
]);
