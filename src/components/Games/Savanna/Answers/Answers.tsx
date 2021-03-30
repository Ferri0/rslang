import React from 'react';

import style from './Answers.module.scss';

export const Answers = () => {
  return (
    <div className={style.attempt_words}>
      <button className={style.answer} onKeyUp={() => {}} onClick={() => {}}>
        1.duck
      </button>
      <button className={style.answer} onKeyUp={() => {}} onClick={() => {}}>
        2.house
      </button>
      <button className={style.answer} onKeyUp={() => {}} onClick={() => {}}>
        3.agree
      </button>
      <button className={style.answer} onKeyUp={() => {}} onClick={() => {}}>
        4.arrive
      </button>
    </div>
  );
};
