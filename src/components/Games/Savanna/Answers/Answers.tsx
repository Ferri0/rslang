import React from 'react';

import style from './Answers.module.scss';

interface ArrayOfWords {
  threeRandomWord: string[];
}

export const Answers = ({ threeRandomWord }: ArrayOfWords) => {
  return (
    <div className={style.attempt_words}>
      {threeRandomWord.map((str: string, idx: number) => {
        return (
          <button
            key={idx}
            className={style.answer}
            onKeyUp={() => {}}
            onClick={() => {}}
          >
            {idx + 1}.{str}
          </button>
        );
      })}
    </div>
  );
};
