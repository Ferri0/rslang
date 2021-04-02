import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './TextbookControls.module.scss';

export function TextbookControls() {
  const [settingsActive, setSettingsActive] = useState(false);
  const [gamesActive, setGamesActive] = useState(false);
  return (
    <div className={style.btnsBlock}>
      <Link className={[style.btn, style.btn_home].join(' ')} to="/dashboard" />
      <div
        className={
          settingsActive
            ? [style.settingsBlock, style.settingsBlock_active].join(' ')
            : style.settingsBlock
        }
      >
        <div
          className={style.settingsClickZone}
          onClick={() => {
            if (gamesActive) setGamesActive(!gamesActive);
            setSettingsActive(!settingsActive);
          }}
        />
        <div className={style.settingWrapper}>
          <label className={style.container}>
            <input type="checkbox" id="translate" />
            <span className={style.checkmark}></span>
          </label>
          <div className={style.settingWrapperIcons}>
            <div>{'Кнопки'}</div>
            <div className={style.settingsIconStar} />
            <div className={style.settingsIconDel} />
          </div>
        </div>
        <div className={style.settingWrapper}>
          <label className={style.container}>
            <input type="checkbox" id="translate" />
            <span className={style.checkmark}></span>
          </label>
          {'Перевод слов'}
        </div>
      </div>
      <div
        className={
          gamesActive
            ? [style.gamesBlock, style.gamesBlock_active].join(' ')
            : style.gamesBlock
        }
      >
        <div
          className={style.gamesClickZone}
          onClick={() => {
            if (settingsActive) setSettingsActive(!settingsActive);
            setGamesActive(!gamesActive);
          }}
        />
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
