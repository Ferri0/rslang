import React from 'react';
import { Word } from '../../../types';
import { Button } from '../Savanna/Button';

import style from './Statistics.module.scss';

interface IStatisticsWords {
  statics: {
    known: Word[];
    unknown: Word[];
  };
}
function rew() {
  console.log('done');
}
export const Statistics = ({ statics }: IStatisticsWords): JSX.Element => (
  <div className={style.background}>
    <dialog className={style.dialog} open>
      <h1 className={style.title}>Статистика игры</h1>
      <div className={style.wrapper}>
        <p className={style.answers}>Верные ответы: </p>
        {statics.known.map((word) => (
          <div className={style.mistake} key={word.id}>
            <audio
              className={style.audio}
              controls
              src={`https://yaia-team-rslang-api.herokuapp.com/${word.audio}`}
            >
              <track kind="captions" />
            </audio>
            <em>
              {word.word} - {word.wordTranslate}
            </em>
          </div>
        ))}
        <p className={style.answers}>Неверные ответы: </p>
        {statics.unknown.map((word) => (
          <div className={style.mistake} key={word.id}>
            <audio
              className={style.audio}
              controls
              src={`https://yaia-team-rslang-api.herokuapp.com/${word.audio}`}
            >
              <track kind="captions" />
            </audio>
            <em>
              {word.word} - {word.wordTranslate}
            </em>
          </div>
        ))}
      </div>
      <div className={style.btn_wrapper}>
        <Button text="Продолжить" fn={rew} />
      </div>
    </dialog>
  </div>
);
