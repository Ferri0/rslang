import React from 'react';

import style from './Game-menu.module.scss';
import heart from '../../../../assets/icons/heart.svg';

interface heart {
  heartsLeft: number;
}

export const GameMenu = ({ heartsLeft }: heart): JSX.Element => {
  const headrtRender = (): JSX.Element[] => {
    const headrts = [];
    for (let i = 0; i < heartsLeft; i += 1) {
      headrts.push(
        <img key={i} className={style.heart} src={heart} alt="heart" />
      );
    }
    return headrts;
  };
  return (
    <div className={style.game_menu}>
      <div className={style.heart_wrapper}>{headrtRender()}</div>
    </div>
  );
};
