import cn from 'classnames';
import React from 'react';
import Button from '../../ui/Button/Button';

import s from './Article.module.scss';

const Article = () => {
  return (
    <article className={cn(s.article)}>
      <section className={s.section}>
        <h2 className={s.title}>Section Title</h2>
        <p className={s.description}>Why are you so serious??</p>

        <div className={s.buttonContainer}>
          <Button>Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="primary">Button</Button>
        </div>
      </section>
    </article>
  );
};

export default Article;
