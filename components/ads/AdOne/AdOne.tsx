import React from 'react';
import Circle from '../Parts/Circle';
import Text from '../Parts/Text';

import s from './AdOne.module.scss';

interface Props {}

const AdOne = (props: Props) => {
  return (
    <div
      className={s.container}
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage:
          'url("https://images.unsplash.com/photo-1517429391578-8a2fd2679a30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3ByaW5nJTIwd2hpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60")',
      }}
    >
      <div className={s.innerContainer}>
        <Text />
        <span className={s.positionCircle}>
          <Circle />
        </span>
      </div>
    </div>
  );
};

export default AdOne;
