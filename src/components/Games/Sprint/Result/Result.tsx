import React from 'react';
import style from './Result.module.scss';
import { getWord } from '../utils';
import { playSound } from '../../../../utils/play-sound';
import { Word } from '../../../../types';

interface Props {
  clickCloseResult: React.MouseEventHandler<HTMLButtonElement>;
  cls: string;
  error: string[];
  correct: string[];
  allWords: Word[];
}

export const Result: React.FC<Props> = ({
  clickCloseResult,
  cls,
  error,
  correct,
  allWords,
}) => (
  <div className={`${style.resultWrapper} ${style[cls]}`}>
    <div className={style.result}>
      <div className={style.title}>Результаты игры</div>
      <div className={style.info}>
        <div className={style.correctNum}>правильно {correct.length}</div>
        <div className={style.errorNum}>неправильно {error.length}</div>
      </div>
      <div className={style.words}>
        {correct.length > 0 ? (
          <div className={style.correctBlock}>
            {correct.map((word) => (
              <div key={`{correct-word-${word}`} className={style.correctWord}>
                <span>{word}</span>
                <span>{getWord(word, allWords).wordTranslate}</span>
                <button
                  className={style.audio}
                  type="button"
                  onClick={() => playSound(getWord(word, allWords).audio)}
                >
                  <i className="fas fa-volume-up" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div />
        )}
        {error.length > 0 ? (
          <div className={style.errorBlock}>
            {error.map((word) => (
              <div key={`{error-word-${word}`} className={style.errorWord}>
                <span>{word}</span>
                <span>{getWord(word, allWords).wordTranslate}</span>
                <button
                  className={style.audio}
                  type="button"
                  onClick={() => playSound(getWord(word, allWords).audio)}
                >
                  <i className="fas fa-volume-up" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div />
        )}
      </div>
      <button type="button" onClick={clickCloseResult}>
        Закрыть
      </button>
    </div>
  </div>
);
