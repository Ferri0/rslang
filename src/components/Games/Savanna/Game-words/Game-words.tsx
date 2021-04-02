import React from 'react';
import { Word } from '../../../../types';
import { Answers } from '../Answers';
import { QuestionWord } from '../Question-word';
import style from './Game-words.module.scss';

type Props = {
  question:
    | Word
    | {
        word: 'example';
        wordTranslate: 'example';
      };
  setRightAnswerAction: (value: boolean) => void;
  wordsInButtons: string[];
};
export const GameWords = ({
  question,
  setRightAnswerAction,
  wordsInButtons,
}: Props): JSX.Element => (
  <div className={style.game_words}>
    <QuestionWord question={question.word} />
    <Answers
      setRightAnswer={setRightAnswerAction}
      question={question.wordTranslate}
      wordsInButtons={wordsInButtons}
    />
  </div>
);
