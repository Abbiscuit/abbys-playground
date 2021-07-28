import React from 'react';
import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as FilledStar } from '@heroicons/react/solid';

import s from './FavoriteButton.module.scss';

function FavoriteButton() {
  const [toggle, setToggle] = React.useState(false);

  const toggleHandler = () => {
    setToggle(prevState => !prevState);
  };

  return (
    <span onClick={toggleHandler}>
      {toggle ? (
        <StarIcon className={s.favIcon} />
      ) : (
        <FilledStar className={`${s.favIcon} ${s.filled}`} />
      )}
    </span>
  );
}

export default FavoriteButton;
