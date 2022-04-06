import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { MenuItems, MenuLink as ReachUIMenuLink, MenuPopover } from '@reach/menu-button';
import { AnimatePresence, motion } from 'framer-motion';
import { positionRight } from '@reach/popover';
import { MenuLink } from '../../../';
import { API_ROUTES, PATHS } from '../../../../config';

const Categories = () => {
  const [categories, setCategories] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch(API_ROUTES.categories)
      .then((response) => response.json())
      .then((json) => {
        setCategories(json);
      });
  }, []);

  const pivot = _.ceil(categories.length / 2);
  const [leftColumn, rightColumn] = _.chunk(categories, pivot);
  return (
    <AnimatePresence>
      <AnimatedMenuPopover position={positionRight} className="z-10">
        <MenuItems className="font-bold flex flex-wrap gap-x-6 bg-white py-3 px-5 drop-shadow-sm transition-all transition-opacity">
          <div className="flex flex-col gap-y-2">
            {leftColumn?.map((category) => (
              <Link href={`/categories/${category}`} passHref key={category}>
                <ReachUIMenuLink as={MenuLink}>{category}</ReachUIMenuLink>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-y-2">
            {rightColumn?.map((category) => (
              <Link href={`${PATHS.categories}/${category}`} passHref key={category}>
                <ReachUIMenuLink as={MenuLink}>{category}</ReachUIMenuLink>
              </Link>
            ))}
          </div>
        </MenuItems>
      </AnimatedMenuPopover>
    </AnimatePresence>
  );
};

const AnimatedMenuPopover = motion(MenuPopover);

export { Categories };
