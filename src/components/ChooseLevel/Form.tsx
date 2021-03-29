import React, { useState, useContext } from 'react';
import { Context } from '../word-service-context';
import { ServiceWordsType } from '../../types';

import style from './ChooseLevel.module.scss';
import { useTypedSelector } from '../../hooks';
import { Spinner } from '../Spinner';
import { ErrorIndicator } from '../Error-indicator';
import { useDispatch } from 'react-redux';
import { fetchWords } from '../../store/actions';

type Setter = {
  setter: (setOpen: boolean) => void;
};

export const Form = ({ setter }: Setter) => {
  const [group, setGroup] = useState('');
  const wordsService: ServiceWordsType = useContext(Context);

  const { error, loading, words } = useTypedSelector((state) => state.words);
  const dispatch = useDispatch();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(fetchWords(wordsService, group));
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <form onSubmit={handleSubmit}>
      {['0', '1', '2', '3', '4', '5'].map((num) => {
        return (
          <label key={num} className={style.container} htmlFor={`level${num}`}>
            Group {+num + 1}
            <input
              type="radio"
              id={`level${num}`}
              value={num}
              checked={group === num}
              onChange={() => setGroup(num)}
            />
            <span className={style.checkmark}></span>
          </label>
        );
      })}

      <input type="submit" value="OK" onClick={() => setter(true)} />
    </form>
  );
};
