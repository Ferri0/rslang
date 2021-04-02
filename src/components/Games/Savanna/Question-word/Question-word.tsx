import React from 'react';

import style from './Question-word.module.scss';

type Question = {
  question: string;
};

export const QuestionWord = ({ question }: Question): JSX.Element => (
  <div className={style.question}>{question}</div>
);
