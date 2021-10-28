import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type LinkProps = Pick<React.ComponentProps<typeof Link>, 'href' | 'children'> & { onClick: React.MouseEventHandler };

const MenuLink = React.forwardRef(
    (
        { onClick, href, children, className }: { className?: string } & Partial<LinkProps>,
        ref: React.ForwardedRef<HTMLAnchorElement>,
    ) => {
        const [hovered, setHovered] = React.useState(false);
        const toggle = () => setHovered((v) => !v);

        return (
            <motion.a
                animate={{ x: 0 }}
                initial={{ x: 50 }}
                href={href?.toString()}
                onClick={onClick}
                ref={ref}
                className={`${className} pb-2 relative`}
                onHoverStart={toggle}
                onHoverEnd={toggle}
            >
                {children}
                {hovered ? (
                    <motion.span
                        animate={{ width: '100%' }}
                        initial={{ width: 0 }}
                        className="absolute bottom-0 -left-3 h-px md:h-0.5 bg-white"
                    ></motion.span>
                ) : null}
            </motion.a>
        );
    },
);
MenuLink.displayName = 'MenuLink';

export { MenuLink };
