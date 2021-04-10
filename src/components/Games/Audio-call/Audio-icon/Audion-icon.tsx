import React from 'react';

type AudioIconType = {
  clazz: string;
  audioPath: string;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  activeClass: string;
  keyHandler: (key: string) => void;
  clickHandler: (audioRef: React.MutableRefObject<HTMLAudioElement>) => void;
};

export const AudioIcon = ({
  clazz,
  audioPath,
  audioRef,
  clickHandler,
  keyHandler,
  activeClass,
}: AudioIconType): JSX.Element => (
  <div
    className={clazz}
    onClick={() => clickHandler(audioRef)}
    onKeyUp={({ key }) => keyHandler(key)}
    role="button"
    tabIndex={0}
  >
    <audio src={audioPath} ref={audioRef}>
      <track kind="captions" />
    </audio>
    <i className={`fas fa-volume-up ${activeClass}`} />
  </div>
);
