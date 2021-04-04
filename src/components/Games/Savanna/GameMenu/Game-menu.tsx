import React from 'react';

import style from './Game-menu.module.scss';
import heart from '../../../../assets/icons/heart.svg';

type heart = {
  hearts: number;
  fullscreenRef: React.MutableRefObject<undefined>;
};

export const GameMenu = ({ hearts, fullscreenRef }: heart): JSX.Element => {
  const headrtRender = (): JSX.Element[] => {
    const headrts = [];
    for (let i = 0; i < hearts; i += 1) {
      headrts.push(
        <img key={i} className={style.heart} src={heart} alt="heart" />
      );
    }
    return headrts;
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
