import React from 'react';
import { useTypedSelector } from '../../../hooks';
import { ChooseLvl } from '../../ChooseLvl';

export const Sprint = (): JSX.Element => {
  const { isMainPage } = useTypedSelector((state) => state.savannaState);

  if (isMainPage) {
    return <ChooseLvl bg="sprint.webp" />;
  }

  return <div>Game</div>;
};
