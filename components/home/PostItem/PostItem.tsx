import React from 'react';
import { Post } from '@prisma/client';

import FavoriteButton from '../FavoriteButton/FavoriteButton';

import s from './PostItem.module.scss';

interface PostProps {
  post: Post;
}

const PostItem = ({ post: p }: PostProps): JSX.Element => {
  return (
    <div className={s.postContainer}>
      <h3>{p.title}</h3>
      <span className={s.span}>{p.createdAt}</span>
      <span className={s.span}>{p.authorId}</span>
      <FavoriteButton />
    </div>
  );
};

export default PostItem;
