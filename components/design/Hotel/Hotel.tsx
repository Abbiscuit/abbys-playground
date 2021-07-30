/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React from 'react';
import Typography from '../../ui/Typography/Typography';

import s from './Hotel.module.scss';

interface Props {}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1.2,
      duration: 1.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Hotel = (props: Props) => {
  return (
    <article className={s.article}>
      <div className={s.imgContainer}>
        <img
          className={s.img}
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>

      <div className={s.shadow}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={s.catchCopy}
        >
          <motion.div variants={item} className={s.mainContainer}>
            <Typography className={s.mainTitle}>
              ホテル選びに
              <br />
              困っていませんか？
            </Typography>
            <div className={s.border}></div>
          </motion.div>

          <motion.div variants={item} className={s.mainBottom}>
            <Typography className={s.textTop}>あかしやのホテルなら</Typography>
            <Typography className={s.textBottom}>
              <span className={s.circle}>1泊</span>
              <span className={s.price}>5,000円〜</span>
            </Typography>
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
};

export default Hotel;
