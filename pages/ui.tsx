import React from 'react';
import AvatarCard from '../components/common/AvatarCard/AvatarCard';
import Typography from '../components/ui/Typography/Typography';

import s from '../styles/ui.module.scss';

interface Props {}

const UIPage = (props: Props) => {
  return (
    <section className={s.uiPage}>
      <Typography as="h3">UI Development</Typography>

      <section className={s.cardLayout}>
        <div className={s.leftPanel}>
          <AvatarCard />
        </div>
        <div className={s.rightPanel}>
          <AvatarCard mode="horizontal" />
          <AvatarCard mode="horizontal" />
          <AvatarCard mode="horizontal" />
        </div>
      </section>
    </section>
  );
};

export default UIPage;
