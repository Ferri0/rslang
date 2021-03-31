import React from 'react';
import style from './PageControls.module.scss';

export function PageControls() {
  return (
    <div className={style.pageControls}>
      <button className={[style.btn, style.btn_firstPage].join(' ')}></button>
      <button className={[style.btn, style.btn_prevPage].join(' ')}></button>
      <div className={style.pageBlock}>1/30</div>
      <button className={[style.btn, style.btn_nextPage].join(' ')}></button>
      <button className={[style.btn, style.btn_lastPage].join(' ')}></button>
    </div>
  );
}
