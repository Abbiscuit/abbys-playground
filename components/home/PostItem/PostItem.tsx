import { Post } from '@prisma/client';
import React from 'react';

import s from './PostItem.module.scss';

interface PostProps {
  post: Post;
}

const PostItem = ({ post: p }: PostProps): JSX.Element => {
  return (
    <div className={s.postContainer}>
      <h3>{p.title}</h3>
      <span>{p.createdAt}</span>
      <span>{p.authorId}</span>
    </div>
  );
};

export default PostItem;
