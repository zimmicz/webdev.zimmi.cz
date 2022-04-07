import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllCategories } from '../../lib/utils';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  getAllCategories().then((categories) => {
    res.status(200).json(categories);
  });
};
