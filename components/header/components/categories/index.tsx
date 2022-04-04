import React from 'react';
import _ from 'lodash';
import type { getAllCategories } from '../../../../lib/utils';
import { MenuItems, MenuLink as ReachUIMenuLink, MenuPopover } from '@reach/menu-button';
import { AnimatePresence, motion } from 'framer-motion';
import { positionRight } from '@reach/popover';
import { MenuLink } from '../../../';

const Categories = ({ categories }: { categories: PromiseReturnType<ReturnType<typeof getAllCategories>> }) => {
  const pivot = _.ceil(categories.length / 2);
  const [leftColumn, rightColumn] = _.chunk(categories, pivot);
  return (
    <AnimatePresence>
      <AnimatedMenuPopover position={positionRight} className="z-10">
        <MenuItems className="font-bold flex flex-wrap gap-x-6 bg-white py-3 px-5 drop-shadow-sm transition-all transition-opacity">
          <div className="flex flex-col gap-y-2">
            {leftColumn?.map((category) => (
              <ReachUIMenuLink key={category} as={MenuLink} href={`/categories/${category}`}>
                {category}
              </ReachUIMenuLink>
            ))}
          </div>

          <div className="flex flex-col gap-y-2">
            {rightColumn?.map((category) => (
              <ReachUIMenuLink key={category} as={MenuLink} href={`/categories/${category}`}>
                {category}
              </ReachUIMenuLink>
            ))}
          </div>
        </MenuItems>
      </AnimatedMenuPopover>
    </AnimatePresence>
  );
};

const AnimatedMenuPopover = motion(MenuPopover);

export { Categories };
