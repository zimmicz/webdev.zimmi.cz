import React from 'react';
import { Layout, Typography } from '../components';
import RoadSign from '../public/illustrations/undraw_road_sign_re_3kc3.svg';

const Custom404 = () => (
  <Layout>
    <Typography.Paragraph className="text-gray-500 text-center">It seems you have got lost.</Typography.Paragraph>
    <RoadSign className="mx-auto" width="80%" />
  </Layout>
);

export default Custom404;
