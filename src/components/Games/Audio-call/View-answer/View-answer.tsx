/* eslint-disable react/no-danger */
import React from 'react';
import { SavannaState } from '../../../../types';
import { Button } from '../../Savanna/Button';
import { AudioIcon } from '../Audio-icon';

import style from './View-answer.module.scss';

type ViewAnswerType = {
  apiPath: string;
  mainActiveClass: string;
  exampleActiveClass: string;
  gameState: SavannaState;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  exampleAudioRef: React.MutableRefObject<HTMLAudioElement>;
  audioWord: (audio: React.MutableRefObject<HTMLAudioElement>) => void;
  keyHandler: (key: string) => void;
  audioExample: (audio: React.MutableRefObject<HTMLAudioElement>) => void;
  continueAfterMistake: () => void;
};

export const ViewAnswer = ({
  apiPath,
  gameState,
  audioRef,
  audioWord,
  keyHandler,
  mainActiveClass,
  exampleAudioRef,
  audioExample,
  exampleActiveClass,
  continueAfterMistake,
}: ViewAnswerType): JSX.Element => (
  <>
    <img
      className={style.image}
      src={`${apiPath}${gameState.question.image}`}
      alt=""
    />
    <div className={style.game_words_text}>
      <p className={style.text}>{gameState.question.wordTranslate}</p>
    </div>
    <div className={style.game_words_text_example}>
      <p className={style.text}>{gameState.question.textExampleTranslate}</p>
    </div>
    <div className={style.game_words_text}>
      <AudioIcon
        clazz={style.audio_example}
        audioPath={apiPath.concat(gameState.question.audio)}
        audioRef={audioRef}
        clickHandler={audioWord}
        keyHandler={keyHandler}
        activeClass={mainActiveClass}
      />
      <p className={style.text}>{gameState.question.word}</p>
      <p className={style.text}>{gameState.question.transcription}</p>
    </div>
    <div className={style.game_words_text_example}>
      <AudioIcon
        clazz={style.audio_example}
        audioPath={apiPath.concat(gameState.question.audioExample)}
        audioRef={exampleAudioRef}
        clickHandler={audioExample}
        keyHandler={keyHandler}
        activeClass={exampleActiveClass}
      />
      <p
        className={style.text}
        dangerouslySetInnerHTML={{ __html: gameState.question.textExample }}
      />
    </div>
    <Button text="Продолжить" fn={continueAfterMistake} />
  </>
);
