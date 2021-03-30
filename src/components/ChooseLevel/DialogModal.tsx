import React, { useContext, useState } from 'react';
import { Form } from './Form';

import style from './ChooseLevel.module.scss';
import { useTypedSelector } from '../../hooks';
import { Spinner } from '../Spinner';
import { ErrorIndicator } from '../Error-indicator';
import { Context } from '../word-service-context';
import { ServiceWordsType } from '../../types';
import { useDispatch } from 'react-redux';
import { fetchWords } from '../../store/actions';

export const DialogModal = () => {
  const [open, setOpen] = useState(true);
  const [group, setGroup] = useState('');
  const wordsService: ServiceWordsType = useContext(Context);
  const { error, loading } = useTypedSelector((state) => state.groupOfWords);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchWords(wordsService, group));
  };

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
    <div className={style.background}>
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
