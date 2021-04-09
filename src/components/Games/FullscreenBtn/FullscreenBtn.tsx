import React from 'react';
import style from './FullscreenBtn.module.scss';

type Props = {
  fullscreenRef: React.MutableRefObject<undefined>;
};

export const FullscreenBtn = ({ fullscreenRef }: Props): JSX.Element => {
  const toggleFullScreen = (elem: HTMLDivElement) => {
    if (!document.fullscreenElement) {
      elem.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };
  return (
    <button
      className={style.button}
      type="button"
      onClick={() => toggleFullScreen(fullscreenRef.current)}
    >
      fullscreen
    </button>
  );
};
