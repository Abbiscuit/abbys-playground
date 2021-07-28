import { ReactNode, forwardRef, createElement } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

/* JSX.IntrinsicElements['button']でHTML要素の'button'を参照する */
type ButtonProps = Readonly<JSX.IntrinsicElements['button']> & {
  readonly children: ReactNode;
  readonly as: string;
  readonly className: string;
  readonly href: string;
  readonly variant: 'ghost' | 'primary' | 'inverted';
  readonly active: boolean;
};

/* forwardRefで引数として受け取ったrefを`as`に紐付ける（転送） */
const Button = forwardRef<HTMLElement, Partial<ButtonProps>>((props, ref) => {
  const {
    as = 'button',
    children,
    className,
    variant,
    active,
    ...rest
  } = props;

  return createElement(
    as,
    {
      className: cn(
        s.baseButton,
        {
          [s.ghost]: variant === 'ghost',
          [s.primary]: variant === 'primary',
          [s.inverted]: variant === 'inverted',
        },
        className
      ),
      ref,
      ...rest,
    },
    children
  );
});

/* eslintのエラー回避 */
Button.displayName = 'Button';

export default Button;
