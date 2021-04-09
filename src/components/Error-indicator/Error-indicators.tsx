import React from 'react';

import error from './language-errors-social.png';
import style from './Error-indicator.module.scss';

export const ErrorIndicator = (): React.ReactNode => (
  <div className={style.error__indicator}>
    <img src={error} alt="error" className={style.error__img} />
    <div className={style.text_wrap}>
      <span>Sorry</span>
      <span>Something went wrong</span>
      <span>(but we already check what&apos;s going on)</span>
    </div>
  </div>
);
