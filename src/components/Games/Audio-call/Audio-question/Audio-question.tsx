import React from 'react';
import { SavannaState } from '../../../../types';
import { Answers } from '../../Answers';
import { AudioIcon } from '../Audio-icon';

import style from './Audio-question.module.scss';

type ViewQuestionType = {
  apiPath: string;
  mainActiveClass: string;
  gameState: SavannaState;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  audioWord: (audio: React.MutableRefObject<HTMLAudioElement>) => void;
  keyHandler: (key: string) => void;
  actions: typeof import('d:/Front-end/Projects/rslang/src/store/actions/index');
};

export const ViewQuestion = ({
  apiPath,
  gameState,
  audioRef,
  audioWord,
  keyHandler,
  mainActiveClass,
  actions,
}: ViewQuestionType): JSX.Element => (
  <>
    <AudioIcon
      clazz={style.audio_icon}
      audioPath={apiPath.concat(gameState.question.audio)}
      audioRef={audioRef}
      clickHandler={audioWord}
      keyHandler={keyHandler}
      activeClass={mainActiveClass}
    />
    <Answers
      setRightAnswerAction={actions.setRightAnswerAction}
      question={gameState.question.wordTranslate}
      wordsInButtons={gameState.wordsInButtons}
      setWrongAnswerAction={actions.setWrongAnswerAction}
    />
  </>
);
