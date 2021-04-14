/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './TextbookControl.module.scss';
import { Word } from '../../types/words-type';
// import { Button } from '../Games/Savanna/Button';

type TextbookControlsProps = {
  displayBtns: { set: (value: boolean) => void; value: boolean };
  displayTranslate: { set: (value: boolean) => void; value: boolean };
  currentPageWords: Array<Word>;
};

export function TextbookControl({
  displayBtns,
  displayTranslate,
  currentPageWords,
}: TextbookControlsProps): React.ReactElement {
  const [settingsActive, setSettingsActive] = useState(false);
  const [gamesActive, setGamesActive] = useState(false);

  const handleBtnsClick = () => {
    displayBtns.set(!displayBtns.value);
  };

  const handleTranslateClick = () => {
    displayTranslate.set(!displayTranslate.value);
  };

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
          aria-label="Settings"
          role="button"
          tabIndex={0}
          className={style.settingsClickZone}
          onClick={() => {
            if (gamesActive) setGamesActive(!gamesActive);
            setSettingsActive(!settingsActive);
          }}
        />
        <div className={style.settingWrapper}>
          <label htmlFor="settings-btn" className={style.container}>
            <input
              type="checkbox"
              id="settings-btn"
              checked={displayBtns.value}
              onChange={handleBtnsClick}
            />
            <span className={style.checkmark} />
          </label>
          <div className={style.settingWrapperIcons}>
            <div>Кнопки</div>
            <div className={style.settingsIconStar} />
            <div className={style.settingsIconDel} />
          </div>
        </div>
        <div className={style.settingWrapper}>
          <label htmlFor="translate-btn" className={style.container}>
            <input
              type="checkbox"
              id="translate-btn"
              checked={displayTranslate.value}
              onChange={handleTranslateClick}
            />
            <span className={style.checkmark} />
          </label>
          <span className={style.settingsTranslateText}>Перевод слов</span>
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
          aria-label="Games"
          role="button"
          tabIndex={0}
          className={style.gamesClickZone}
          onClick={() => {
            if (settingsActive) setSettingsActive(!settingsActive);
            setGamesActive(!gamesActive);
          }}
        />
        <div
          aria-label="Start-game-1"
          role="button"
          tabIndex={0}
          className={[style.gameIcon, style.gameIcon_game1].join(' ')}
          onClick={() => console.log(`Game 1, array: ${currentPageWords}`)}
        />
        <div
          aria-label="Start-game-2"
          role="button"
          tabIndex={0}
          className={[style.gameIcon, style.gameIcon_game2].join(' ')}
          onClick={() => console.log(`Game 2, array: ${currentPageWords}`)}
        />
        <div
          aria-label="Start-game-3"
          role="button"
          tabIndex={0}
          className={[style.gameIcon, style.gameIcon_game3].join(' ')}
          onClick={() => console.log(`Game 3, array: ${currentPageWords}`)}
        />
        <div
          aria-label="Start-game-4"
          role="button"
          tabIndex={0}
          className={[style.gameIcon, style.gameIcon_game4].join(' ')}
          onClick={() => console.log(`Game 4, array: ${currentPageWords}`)}
        />
      </div>
    </div>
  );
}
