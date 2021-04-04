import React from 'react';

import style from './Answers.module.scss';

interface ArrayOfWords {
  wordsInButtons: string[];
  question: string;
  setRightAnswerAction: (str: boolean) => void;
  setWrongAnswerAction: (value: boolean) => void;
  clazz: string;
}

export const Answers = ({
  wordsInButtons,
  question,
  setRightAnswerAction,
  setWrongAnswerAction,
  clazz,
}: ArrayOfWords): JSX.Element => {
  const handlerAnswerToggle = (str: string) => {
    setRightAnswerAction(str === question);
    setWrongAnswerAction(str !== question);
  };

  const keyHandler = (key: string, arr: string[]) => {
    setRightAnswerAction(question === arr[+key - 1]);
    setWrongAnswerAction(question !== arr[+key - 1]);
  };

  window.onkeyup = (e: KeyboardEvent) => {
    if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4') {
      keyHandler(e.key, wordsInButtons);
    }
  };

  const elem: HTMLElement = document.querySelector(`.${clazz}`);
  elem?.classList.remove(clazz);
  // eslint-disable-next-line no-unused-expressions
  elem?.offsetWidth;
  elem?.classList.add(clazz);
  return (
    <div className={style.attempt_words}>
      {wordsInButtons.map((str: string, idx: number) => (
        <button
          type="button"
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          className={style.answer}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          tabIndex={0}
          onClick={() => handlerAnswerToggle(str)}
        >
          {idx + 1}.{str}
        </button>
      ))}
    </div>
  );
};
