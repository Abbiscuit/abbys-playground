import React from 'react';
import { Post } from '@prisma/client';
import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as FilledStar } from '@heroicons/react/solid';

import s from './PostItem.module.scss';

interface PostProps {
  post: Post;
}

const PostItem = ({ post: p }: PostProps): JSX.Element => {
  const [toggle, setToggle] = React.useState(false);

  const toggleHandler = () => {
    setToggle(prevState => !prevState);
  };

  return (
    <div className={s.postContainer}>
      <h3>{p.title}</h3>
      <span className={s.span}>{p.createdAt}</span>
      <span className={s.span}>{p.authorId}</span>

      <span onClick={toggleHandler}>
        {toggle ? (
          <StarIcon className={s.favIcon} />
        ) : (
          <FilledStar className={`${s.favIcon} ${s.filled}`} />
        )}
      </span>
    </div>
  );
};

export default PostItem;
