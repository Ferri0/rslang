import React from 'react';
import { useTypedSelector } from '../../../hooks';
import { ChooseLvl } from '../../ChooseLvl';
import { Intro } from './Intro';

export const Savanna = (): JSX.Element => {
  const { isMainPage } = useTypedSelector((state) => state.savannaState);

  if (isMainPage) {
    return <ChooseLvl />;
  }

  return <Intro />;
};
