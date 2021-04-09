import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Form } from './Form';

import style from './ChooseLvl.module.scss';
import { useTypedSelector, useAction } from '../../hooks';
import { Spinner } from '../Spinner';
import { ErrorIndicator } from '../Error-indicator';
import { Context } from '../word-service-context';
import { ServiceWordsType } from '../../types';

type EventHandler = React.FormEvent<HTMLFormElement> | KeyboardEvent;
type Background = {
  background: string;
};
export const ChooseLvl = ({ background }: Background): JSX.Element => {
  const [open, setOpen] = useState(true);
  const [group, setGroup] = useState<number>();
  const wordsService: ServiceWordsType = useContext(Context);
  const { error, loading } = useTypedSelector((state) => state.groupOfWords);
  const { fetchWords, setIsLocation } = useAction();

  const submitCallback = useCallback(
    (e: EventHandler) => {
      e.preventDefault();
      const randNum = Math.floor(Math.random() * 20);
      fetchWords(wordsService, group, randNum);
      setIsLocation(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        submitCallback(e);
      }
    };

    window.addEventListener('keyup', keyHandler);
    return () => {
      window.removeEventListener('keyup', keyHandler);
    };
  }, [submitCallback]);

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
        backgroundImage: `url(../../assets/images/choose-level-bg/${background})`,
      }}
    >
      <dialog className={style.dialog_modal} open={open}>
        <h2 className={style.title}>Choose group of words</h2>
        <Form
          handleSubmit={submitCallback}
          setOpen={setOpen}
          group={group}
          setGroup={setGroup}
        />
      </dialog>
    </div>
  );
};
