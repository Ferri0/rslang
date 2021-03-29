import React, { useState, useContext } from 'react';
import { Context } from '../../word-service-context';
import { Words, ServiceWordsType } from '../../../types';

import style from './Savanna.module.scss';

export const Form = () => {
  const [open, setOpen] = useState(true);
  const [level, setLevel] = useState();
  const wordsService: ServiceWordsType = useContext(Context);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.target;

    const selected: HTMLInputElement = [...target.level].find(
      (i: HTMLInputElement) => i.checked
    );

    wordsService
      .getWords(+selected.value, 0)
      .then((res: Words) => console.log(res));
  };

  return (
    <dialog className={style.dialog_modal} open={open}>
      <h2 className={style.title}>choosing your level</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="level1">
          <input type="radio" id="level1" name="level" value="1" />
          <span className={style.checkmark}></span>
        </label>
        {[0, 1, 2, 3, 4, 5].map((num) => {
          return (
            <label
              key={num}
              className={style.container}
              htmlFor={`level${num}`}
            >
              level {num}
              <input type="radio" id={`level${num}`} name="level" value={num} />
              <span className={style.checkmark}></span>
            </label>
          );
        })}
        <input type="submit" value="OK" onClick={() => setOpen(true)} />
      </form>
    </dialog>
  );
};
const RadioInput = () => {};
