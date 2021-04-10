import React from 'react';
import { SavannaActions, SavannaState } from '../../../../types';
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
  setRightAnswerAction: (value: boolean) => SavannaActions;
  setWrongAnswerAction: (value: boolean) => SavannaActions;
};

export const ViewQuestion = ({
  apiPath,
  gameState,
  audioRef,
  audioWord,
  keyHandler,
  mainActiveClass,
  setRightAnswerAction,
  setWrongAnswerAction,
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
      setRightAnswerAction={setRightAnswerAction}
      question={gameState.question.wordTranslate}
      wordsInButtons={gameState.wordsInButtons}
      setWrongAnswerAction={setWrongAnswerAction}
    />
  </>
);
