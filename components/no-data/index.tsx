import React from 'react';
import { Typography } from '..';
import ReadingTime from '../../public/illustrations/undraw_reading_time_re_phf7.svg';

const NoData = () => (
  <>
    <Typography.Paragraph className="text-center text-gray-500">
      I am sorry, I did not find anything.
    </Typography.Paragraph>
    <ReadingTime className="mx-auto" width="80%" />
  </>
);

export { NoData };
