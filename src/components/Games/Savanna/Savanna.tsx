import React from 'react';
import { useTypedSelector } from '../../../hooks';
import { DialogModal } from '../../ChooseLevel';
import { Intro } from './Intro';

export const Savanna = (): JSX.Element => {
  const { words } = useTypedSelector((state) => state.groupOfWords);

  if (words.length === 0) {
    return <DialogModal />;
  }

  return <Intro />;
};
