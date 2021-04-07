import React from 'react';
import { useTypedSelector } from '../../../hooks';
import { ChooseLvl } from '../../ChooseLvl';

export const AudioCall = (): JSX.Element => {
  const { isMainPage } = useTypedSelector((state) => state.savannaState);

  if (isMainPage) {
    return <ChooseLvl bg="Headphones.jpg" />;
  }

  return <div>Intro</div>;
};
