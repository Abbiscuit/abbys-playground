/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Typography from '../../ui/Typography/Typography';

import s from './Buffet.module.scss';

interface Props {}

const Buffet = (props: Props) => {
  return (
    <article className={s.article}>
      <div className={s.boxTop}></div>
      <div className={s.boxBottom}></div>
      <div className={s.imgContainer}>
        <img
          src="https://images.unsplash.com/photo-1616668856493-9df876327739?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1ZmZldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          className={s.bgImage}
          alt="template"
        />
      </div>

      <div className={s.copy}>
        <Typography className={s.copyTop} as="p">
          豪華な
        </Typography>
        <Typography className={s.copyMiddle} as="p">
          朝食
        </Typography>
        <Typography className={s.copyBottom} as="p">
          バイキング
        </Typography>
      </div>
    </article>
  );
};

export default Buffet;
