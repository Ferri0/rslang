import React from 'react';

type Question = {
  question: string;
  clazz: string;
};

export const QuestionWord = ({ question, clazz }: Question): JSX.Element => (
  <div className={clazz}>{question}</div>
);
