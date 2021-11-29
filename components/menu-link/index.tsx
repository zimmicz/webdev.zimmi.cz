import React from 'react';
import Link from 'next/link';

type LinkProps = Pick<React.ComponentProps<typeof Link>, 'href' | 'children'> & { onClick: React.MouseEventHandler };

const MenuLink = ({ onClick, href, children, className }: { className?: string } & Partial<LinkProps>) => {
    return (
        <a
            onClick={onClick}
            href={href?.toString()}
            className={`${className} pb-2 transition-all bg-gradient-to-r from-white to-white duration-300 bg-no-repeat bg-left-bottom bg-0-2 hover:bg-full-2`}
        >
            {children}
        </a>
    );
};

export { MenuLink };
