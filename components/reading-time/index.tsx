import React from 'react';
import { ReadTimeResults } from 'reading-time';
import AlignLeft from '../../public/icons/align-left.svg';

type Props = {
  readingTime: ReadTimeResults;
};

const ReadingTime = ({ readingTime }: Props) => {
  const minutes = Math.ceil(readingTime.minutes);

  return (
    <small title="Time to read" className="flex items-center gap-2 text-subtle">
      <AlignLeft height={24} width={24} className="my-icon" />
      <span>
        {minutes} {minutes > 1 ? 'minutes' : 'minute'}
      </span>
    </small>
  );
};

export { ReadingTime };
