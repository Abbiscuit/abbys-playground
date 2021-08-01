/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cn from 'classnames';

import Button from '../../ui/Button/Button';

import s from './AvatarCard.module.scss';

interface AvatarCardProps {
  readonly mode: 'horizontal';
}

const AvatarCard = (props: Partial<AvatarCardProps>) => {
  console.log('AvatarCard render...');
  return (
    <div
      className={cn(s.avatarCard, {
        [s.horizontal]: props.mode === 'horizontal',
      })}
    >
      <figure className={s.imgFigure}>
        <img src="https://picsum.photos/id/1005/400/250" alt="" />
      </figure>
      <div className={s.content}>
        <h4 className={s.title}>Title</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          blanditiis alias enim, quisquam quod cupiditate numquam nostrum iste
          reiciendis neque perferendis ut maiores, pariatur perspiciatis, velit
          natus impedit voluptates et!
        </p>
        <div className={s.actions}>
          <Button>Get started</Button>
          <Button>More info</Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AvatarCard);
