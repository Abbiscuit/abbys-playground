import cn from 'classnames';
import React from 'react';
import { useCount } from '../../../context/CountProvider';
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';
import Typography from '../../ui/Typography/Typography';

import s from './Article.module.scss';

const Article = () => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const myRef = React.createRef<HTMLDivElement>();
  console.log('Article...');

  return (
    <article className={cn(s.article)}>
      <Typography as="span" className={s.prologue}>
        Prologue
      </Typography>
      <Card ref={cardRef} as="div" className={s.section}>
        <TitleCount />

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

/* Articleコンポーネントで`useCount`を使用すると、stateに変更が加わる度に子コンポーネントも含めリレンダリングが走ってしまう。 */
/* それを解決するために`TitleCount`という`count`を表示するだけのコンポーネントを切り出し、そのコンポーネント内部でのみ`useCount`を使用。。 */
/* レンダリングは行われるが、子コンポーネントの数は減るのでベターと言える。 */
const TitleCount = () => {
  const { count } = useCount();

  return (
    <Typography as="h2" className={s.title}>
      Section Title {count}
    </Typography>
  );
};

export default Article;
