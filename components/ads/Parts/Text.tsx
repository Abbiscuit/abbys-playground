import s from './Text.module.scss';

const Text = () => {
  return (
    <div className={s.textContainer}>
      <h3 className={s.title}>
        新生活 応援 <br />
        キャンペーン
      </h3>
      <p className={s.date}>2021.8.1~</p>
    </div>
  );
};

export default Text;
