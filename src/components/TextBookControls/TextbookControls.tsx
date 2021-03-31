import React from 'react';
import style from './TextbookControls.module.scss';

export function TextbookControls() {
  return (
    <div className={style.btnsBlock}>
      <button className={[style.btn, style.btn_home].join(' ')} type="button" />
      <div className={style.settingsBlock} />
      <div className={style.gamesBlock} />
    </div>
  );
}
