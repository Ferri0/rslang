import React, { useState } from 'react';
import style from './TextbookControls.module.scss';

export function TextbookControls() {
  const [settingsActive, setSettingsActive] = useState(false);
  const [gamesActive, setGamesActive] = useState(false);
  return (
    <div className={style.btnsBlock}>
      <button className={[style.btn, style.btn_home].join(' ')} type="button" />
      <div
        className={
          settingsActive
            ? [style.settingsBlock, style.settingsBlock_active].join(' ')
            : style.settingsBlock
        }
        onClick={() => {
          setSettingsActive(!settingsActive);
        }}
      />
      <div
        className={
          gamesActive
            ? [style.gamesBlock, style.gamesBlock_active].join(' ')
            : style.gamesBlock
        }
        onClick={() => {
          setGamesActive(!gamesActive);
        }}
      />
    </div>
  );
}
