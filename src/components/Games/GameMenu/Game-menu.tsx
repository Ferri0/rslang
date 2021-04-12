import React from 'react';

import style from './Game-menu.module.scss';
import heart from '../../../assets/icons/heart.svg';
import heartFail from '../../../assets/icons/heart-fail.svg';
import { FullscreenBtn } from '../FullscreenBtn';
import { HomeButton } from '../Home-button';

type Props = {
  fullscreenRef: React.MutableRefObject<undefined>;
  hearts?: number;
};

export const GameMenu = ({ fullscreenRef, hearts }: Props): JSX.Element => {
  const heartsRender = (): JSX.Element[] => {
    const countOfMistake = 5 - hearts;
    const heartsArray = [];

    for (let i = 0; i < hearts + countOfMistake; i += 1) {
      if (i >= countOfMistake) {
        heartsArray.push(
          <img key={i} className={style.heart} src={heart} alt="heart" />
        );
      } else {
        heartsArray.push(
          <img key={i} className={style.heart} src={heartFail} alt="heart" />
        );
      }
    }
    return heartsArray;
  };

  return (
    <div className={style.game_menu}>
      <div className={style.nav_btn}>
        <HomeButton />
        <FullscreenBtn fullscreenRef={fullscreenRef} />
      </div>
      <div className={style.heart_wrapper}>{heartsRender()}</div>
    </div>
  );
};
