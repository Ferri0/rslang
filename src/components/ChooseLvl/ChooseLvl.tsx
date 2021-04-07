import React, { useContext, useState } from 'react';
import { Form } from './Form';

import style from './ChooseLvl.module.scss';
import { useTypedSelector, useAction } from '../../hooks';
import { Spinner } from '../Spinner';
import { ErrorIndicator } from '../Error-indicator';
import { Context } from '../word-service-context';
import { ServiceWordsType } from '../../types';

type EventHandler = React.FormEvent<HTMLFormElement> | KeyboardEvent;
type Backgroud = {
  bg: string;
};
export const ChooseLvl = ({ bg }: Backgroud): JSX.Element => {
  const [open, setOpen] = useState(true);
  const [group, setGroup] = useState<number>();
  const wordsService: ServiceWordsType = useContext(Context);
  const { error, loading } = useTypedSelector((state) => state.groupOfWords);
  const { fetchWords, setIsLocation } = useAction();
  const handleSubmit = (e: EventHandler) => {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * 20);
    fetchWords(wordsService, group, randNum);
    setIsLocation(false);
  };

  window.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  });

  if (loading) {
    return (
      <div className={style.loading}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div
      className={style.background}
      style={{
        backgroundImage: `url(../../assets/images/choose-level-bg/${bg})`,
      }}
    >
      <dialog className={style.dialog_modal} open={open}>
        <h2 className={style.title}>Choose group of words</h2>
        <Form
          handleSubmit={handleSubmit}
          setOpen={setOpen}
          group={group}
          setGroup={setGroup}
        />
      </dialog>
    </div>
  );
};
