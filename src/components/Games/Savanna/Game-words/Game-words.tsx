import React from 'react';
import { Word } from '../../../../types';
import { Answers } from '../Answers';
import style from './Game-words.module.scss';

type Props = {
  setRightAnswerAction: (value: boolean) => void;
  setWrongAnswerAction: (value: boolean) => void;
  wordsInButtons: string[];
  question: Word | { word: 'example'; wordTranslate: 'example' };
  clazz: string;
};

export const GameWords = ({
  setRightAnswerAction,
  wordsInButtons,
  setWrongAnswerAction,
  question,
  clazz,
}: Props): JSX.Element => (
  <div className={style.game_words}>
    <div className={clazz}>{question.word}</div>
    <Answers
      clazz={clazz}
      setRightAnswerAction={setRightAnswerAction}
      question={question.wordTranslate}
      wordsInButtons={wordsInButtons}
      setWrongAnswerAction={setWrongAnswerAction}
    />
  </div>
);
