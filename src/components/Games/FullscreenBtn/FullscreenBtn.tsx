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
    <i
      className={`fas fa-expand ${style.newBtn}`}
      onClick={() => toggleFullScreen(fullscreenRef.current)}
      onKeyUp={({ key }) => {
        if (key === 'Enter') {
          toggleFullScreen(fullscreenRef.current);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="fullscreen"
    />
  );
};
