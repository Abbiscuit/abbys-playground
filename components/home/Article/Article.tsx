import cn from 'classnames';
import React from 'react';
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';
import Typography from '../../ui/Typography/Typography';

import s from './Article.module.scss';

const Article = () => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const myRef = React.createRef<HTMLDivElement>();

  return (
    <article className={cn(s.article)}>
      <Typography as="span" className={s.prologue}>
        Prologue
      </Typography>
      <Card ref={cardRef} as="div" className={s.section}>
        <Typography as="h2" className={s.title}>
          Section Title
        </Typography>

        <Typography as="p" className={s.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ut,
          odio error corrupti modi voluptatibus facere blanditiis ad aspernatur
          labore in itaque reiciendis inventore enim, pariatur perferendis
          vitae, dolor a.
        </Typography>

        <div className={s.buttonContainer}>
          <Button>Button</Button>
          <Button variant="ghost">Nah</Button>
          <Button variant="primary">Favorite</Button>
          <Button variant="inverted">Inverted</Button>
        </div>
      </Card>

      <div ref={myRef}></div>
    </article>
  );
};

export default React.memo(Article);
