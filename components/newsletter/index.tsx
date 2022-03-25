import React from 'react';

const Newsletter = () => {
  return (
    <div className="p-4 sm:p-10 mx-auto">
      <h2 className="text-5xl font-title text-gray-300">Would you like to read more?</h2>
      <div className="my-4 text-gray-300">
        <p>If I got your attention, may I get your e-mail as well?</p>
        <p>I&apos;ll keep it to myself and I&apos;ll send you a digest now and then.</p>
      </div>
      <form className="flex flex-wrap justify-between gap-5">
        <input type="email" placeholder="Your e-mail" className="h-16 flex-shrink-0 flex-grow px-4 rounded-lg" />
        <input
          type="submit"
          value="Subscribe"
          className="bg-primary border-2 border-primary font-title text-2xl uppercase py-3 px-4 rounded-lg cursor-pointer text-white flex-grow flex-shrink-0 w-full sm:w-auto"
        />
      </form>
    </div>
  );
};

export { Newsletter };
