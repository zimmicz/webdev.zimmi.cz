import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllCategories } from '../../lib/utils';

export default (req: NextApiRequest, res: NextApiResponse) => {
  getAllCategories().then((categories) => {
    res.status(200).json(categories);
  });
};
