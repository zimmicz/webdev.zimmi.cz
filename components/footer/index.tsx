import React from 'react';
import Image from 'next/image';
import { Newsletter, Typography } from '..';
import Profile from '../../public/images/profile.jpeg';

const showNewsletter = false;

const Footer = () => (
  <footer className="w-full bg-gray-300">
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-7 p-5">
      <div>
        <Typography.H6 className="text-center">About me</Typography.H6>
        <div className="flex lg:flex gap-x-3 items-center lg:items-start">
          <div className="w-[60px] h-[60px] flex-shrink-0 md:w-[120px] md:h-[120px]">
            <Image className="rounded-full" layout="raw" width="100%" height="100%" src={Profile} />
          </div>
          <Typography.Paragraph className="sm:flex-shrink-1 flex-grow-1">
            Born in 1989, living in the Czech Republic. Graduated from GIS, loves maps. Working as a React developer for
            the last few years.
          </Typography.Paragraph>
        </div>
      </div>
      <div>
        {showNewsletter ? (
          <>
            <Typography.H6 className="text-center">Newsletter</Typography.H6>
            <Newsletter />
          </>
        ) : null}
      </div>
    </div>
    <p className="max-w-screen-lg mx-auto p-5 text-center">
      <small>
        Built with <a href="https://feathericons.com/">Feather</a>, <a href="https://undraw.co">unDraw</a>.
      </small>
    </p>
  </footer>
);

export { Footer };
