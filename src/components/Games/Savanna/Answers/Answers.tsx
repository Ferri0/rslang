import React from 'react';

import style from './Answers.module.scss';

interface ArrayOfWords {
  answersWords: string[];
  question: string;
  setRightAnswer: (is: boolean) => void;
}

export const Answers = ({
  answersWords,
  question,
  setRightAnswer,
}: ArrayOfWords): JSX.Element => (
  <div className={style.attempt_words}>
    {answersWords.map((str: string, idx: number) => (
      <button
        type="button"
        // eslint-disable-next-line react/no-array-index-key
        key={idx}
        className={style.answer}
        onClick={() => setRightAnswer(str === question)}
      >
        {idx + 1}.{str}
      </button>
    ))}
  </div>
);
