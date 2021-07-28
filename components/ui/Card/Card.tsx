import {
  ReactNode,
  createElement,
  forwardRef,
  HTMLAttributes,
  ElementType,
} from 'react';
import cn from 'classnames';

import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  readonly className: string;
  readonly children: ReactNode;
  readonly as: ElementType<any>; // or string?
  readonly href: string;
  readonly padding: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

const Card = forwardRef<HTMLElement, Partial<CardProps>>(
  (props, ref): JSX.Element => {
    const {
      className,
      children,
      as = 'div',
      padding = 'none',
      style,
      ...rest
    } = props;

    return createElement(
      as,
      {
        className: cn(
          s.base,
          {
            [s.sm]: padding === 'sm',
            [s.md]: padding === 'md',
            [s.lg]: padding === 'lg',
            [s.xl]: padding === 'xl',
          },
          className
        ),
        ref,
        ...rest,
      },
      children
    );
  }
);

Card.displayName = 'Card';

export default Card;
