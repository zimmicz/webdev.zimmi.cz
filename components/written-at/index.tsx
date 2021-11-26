import React from 'react';

const WrittenAt = ({ date: dateString }: { date: string }) => {
    const date = new Date(dateString);
    const formatted = new Intl.DateTimeFormat('en-us').format(date);

    return (
        <small className="flex gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hidden sm:inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span className="self-center">{formatted}</span>
        </small>
    );
};

export { WrittenAt };
