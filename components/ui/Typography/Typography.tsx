import { ReactNode, forwardRef, createElement } from 'react';
import cn from 'classnames';

import s from './Typography.module.scss';

type TypographyProps = JSX.IntrinsicElements['p'] & {
  readonly children: ReactNode;
  readonly as: string;
  readonly className: string;
};

const Typography = forwardRef<HTMLElement, Partial<TypographyProps>>(
  (props, typoRef) => {
    const { as = 'p', children, className, ...rest } = props;

    return createElement(
      as,
      { className: cn(className), ref: typoRef, ...rest },
      children
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
