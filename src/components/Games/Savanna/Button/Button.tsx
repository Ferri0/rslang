import React from 'react';

import style from './Button.module.scss';

type TButton = {
  fn: () => void;
  text: string;
};

export const Button = ({ text, fn }: TButton): JSX.Element => (
  <button type="button" className={style.btn} onClick={fn}>
    {text}
  </button>
);
