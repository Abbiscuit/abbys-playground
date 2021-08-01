import { useEffect } from 'react';
import cn from 'classnames';
import gsap from 'gsap';

import s from './Circle.module.scss';

type BgColor = 'navy' | 'rgb(235, 33, 67)';
type Color = 'white' | '#212121' | '#1a1a1a';

interface CircleProps {
  readonly color: Color;
  readonly bgColor: BgColor;
  readonly isAnimated: boolean;
  readonly textTop: string;
  readonly textBottom: string;
}

const Circle = (props: Partial<CircleProps>): JSX.Element => {
  return (
    <div className={cn(s.circle)}>
      <span className={cn(s.circleTop)}>{`全品`}</span>
      <p className={cn('textAnim', s.circleMain)}>{`20%OFF`}</p>
    </div>
  );
};

export default Circle;
