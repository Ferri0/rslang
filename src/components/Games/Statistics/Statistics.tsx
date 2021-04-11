import React from 'react';
import { Word } from '../../../types';
import { playSound } from '../../../utils/play-sound';
import { Button } from '../Savanna/Button';

import style from './Statistics.module.scss';

type IStatisticsWords = {
  statics: {
    known: Word[];
    unknown: Word[];
  };
  startNewGame: () => void;
};

export const Statistics = ({
  statics,
  startNewGame,
}: IStatisticsWords): JSX.Element => (
  <div className={style.background}>
    <dialog className={style.dialog} open>
      <h1 className={style.title}>Статистика игры</h1>
      <div className={style.wrapper}>
        <p className={style.answers}>Верные ответы: </p>
        {statics.known.map((word) => (
          <div className={style.mistake} key={word.id}>
            <em>
              {word.word} - {word.wordTranslate}
            </em>
            <button
              className={style.audio}
              type="button"
              onClick={() => playSound(word.audio)}
            >
              <i className="fas fa-volume-up" />
            </button>
          </div>
        ))}
        <p className={style.answers}>Неверные ответы: </p>
        {statics.unknown.map((word) => (
          <div className={style.mistake} key={word.id}>
            <em>
              {word.word} - {word.wordTranslate}
            </em>
            <button
              className={style.audio}
              type="button"
              onClick={() => playSound(word.audio)}
            >
              <i className="fas fa-volume-up" />
            </button>
          </div>
        ))}
      </div>
      <div className={style.btn_wrapper}>
        <Button text="Продолжить" fn={startNewGame} />
      </div>
    </dialog>
  </div>
);
