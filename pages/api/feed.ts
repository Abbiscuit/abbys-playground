// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Post, User } from '@prisma/client';
import prisma from '../../lib/prisma';

type Data = {
  allPosts: (Post & {
    author: User;
  })[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const allPosts = await prisma.post.findMany({ include: { author: true } });

  res.status(200).json({ allPosts });
}
