import React from 'react';
import Clock from '../../public/icons/clock.svg';

const WrittenAt = ({ date: dateString }: { date: string }) => {
  const date = new Date(dateString);
  const formatted = new Intl.DateTimeFormat('en-us').format(date);

  return (
    <small className="flex items-center gap-2 text-subtle">
      <Clock height={24} width={24} className="my-icon" />
      <span className="self-center">{formatted}</span>
    </small>
  );
};

export { WrittenAt };
