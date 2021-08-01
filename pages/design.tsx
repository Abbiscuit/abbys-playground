/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { NextPage } from 'next';
import Typography from '../components/ui/Typography/Typography';
import Buffet from '../components/design/Buffet/Buffet';
import Hotel from '../components/design/Hotel/Hotel';

import s from '../styles/design.module.scss';

interface Props {}

const DesignPage: NextPage = (props: Props) => {
  console.log('DesignPage...');
  return (
    <section>
      <Typography className={s.title} as="h1">
        Beafutiful Design🎉
      </Typography>
      <Typography as="p">Beafutiful Design🎉</Typography>

      <Buffet />
      <Hotel />
    </section>
  );
};

export default DesignPage;
