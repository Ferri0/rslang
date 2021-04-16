import React, { useContext, useEffect, useState } from 'react';
import { Form } from './Form';
import { useAction } from '../../hooks';
import { Context } from '../word-service-context';
import { ServiceWordsType } from '../../types';

import style from './ChooseLvl.module.scss';

type EventHandler = React.FormEvent<HTMLFormElement> | KeyboardEvent;
type Background = {
  background: string;
};
export const ChooseLvl = ({ background }: Background): JSX.Element => {
  const [open, setOpen] = useState(true);
  const [group, setGroup] = useState<number>();
  const wordsService: ServiceWordsType = useContext(Context);
  const { fetchWords, setIsMainPage } = useAction();

  const handleSubmit = (e: EventHandler) => {
    if (group !== undefined) {
      e.preventDefault();
      const randNum = Math.floor(Math.random() * 20);
      fetchWords(wordsService, group, randNum);
      setIsMainPage(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit(e);
      }
    };

    window.addEventListener('keyup', keyHandler);
    return () => {
      window.removeEventListener('keyup', keyHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={style.background}
      style={{
        backgroundImage: `url(../../assets/images/choose-level-bg/${background})`,
      }}
    >
      <dialog className={style.dialog_modal} open={open}>
        <h2 className={style.title}>Выберите уровень</h2>
        <Form handleSubmit={handleSubmit} group={group} setGroup={setGroup} />
      </dialog>
    </div>
  );
};
