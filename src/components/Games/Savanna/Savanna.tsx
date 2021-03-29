import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../word-service-context';
import { Words, ServiceWordsType } from '../../../types';

import style from './Savanna.module.scss';

export const Savanna = () => {
  const [scrollBg, setScrollBg] = useState({ backgroundPositionY: '100%' });
  const wordsService: ServiceWordsType = useContext(Context);

  const onscrollToTop = () => {
    setScrollBg(({ backgroundPositionY }) => ({
      backgroundPositionY: parseInt(backgroundPositionY) - 10 + '%',
    }));
  };

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const selected: HTMLInputElement = [...e.target.level].find(
      (i) => i.checked
    );

    wordsService
      .getWords(+selected.value, 0)
      .then((res: Words) => console.log(res));
    console.log(selected.value);
  };

  return (
    <div>
      <button
        style={{ width: 200, height: 50 }}
        onClick={() => history.goBack()}
      >
        Go back
      </button>
      <div style={scrollBg} className={style.bg}>
        <button onClick={onscrollToTop} className={style.scrollBtn}>
          Click
        </button>
        <FindOutLevel handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

type HandleSubmit = { handleSubmit: any };

const FindOutLevel = ({ handleSubmit }: HandleSubmit) => {
  const [open, setOpen] = useState(true);

  return (
    <dialog className={style.dialog_modal} open={open}>
      <h2 className={style.title}>choosing your level</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        {[1, 2, 3, 4, 5, 6].map((num) => {
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
        <input type="submit" value="OK" onClick={() => setOpen(false)} />
      </form>
    </dialog>
  );
};
