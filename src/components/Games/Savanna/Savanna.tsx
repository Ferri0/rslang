import React from 'react';
import { useTypedSelector } from '../../../hooks';
import { DialogModal } from '../../ChooseLevel';
import { Intro } from './Intro';

export const Savanna = (): JSX.Element => {
  const { isMainPage } = useTypedSelector((state) => state.savannaState);

  if (isMainPage) {
    return <DialogModal />;
  }

  return <Intro />;
};
