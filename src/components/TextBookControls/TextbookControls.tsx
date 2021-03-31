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
          if (gamesActive) setGamesActive(!gamesActive);
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
          if (settingsActive) setSettingsActive(!settingsActive);
          setGamesActive(!gamesActive);
        }}
      >
        <div
          className={[style.gameIcon, style.gameIcon_game1].join(' ')}
          onClick={() => console.log(`Game 1, array: ${[]}`)}
        />
        <div
          className={[style.gameIcon, style.gameIcon_game2].join(' ')}
          onClick={() => console.log(`Game 2, array: ${[]}`)}
        />
        <div
          className={[style.gameIcon, style.gameIcon_game3].join(' ')}
          onClick={() => console.log(`Game 3, array: ${[]}`)}
        />
        <div
          className={[style.gameIcon, style.gameIcon_game4].join(' ')}
          onClick={() => console.log(`Game 4, array: ${[]}`)}
        />
      </div>
    </div>
  );
}
