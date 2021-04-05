import React from 'react';

import style from './Game-menu.module.scss';
import heart from '../../../../assets/icons/heart.svg';
import heartFail from '../../../../assets/icons/heart-fail.svg';

type Props = {
  hearts: number;
  fullscreenRef: React.MutableRefObject<undefined>;
};

export const GameMenu = ({ hearts, fullscreenRef }: Props): JSX.Element => {
  const headrtRender = (): JSX.Element[] => {
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

  const toggleFullScreen = (elem: HTMLDivElement) => {
    if (!document.fullscreenElement) {
      elem.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div className={style.game_menu}>
      <button
        className={style.button}
        type="button"
        onClick={() => toggleFullScreen(fullscreenRef.current)}
      >
        fullscreen
      </button>
      <div className={style.heart_wrapper}>{headrtRender()}</div>
    </div>
  );
};
