import React from 'react';
import { useTypedSelector } from '../../../hooks';
import { ChooseLvl } from '../../ChooseLvl';
import { Intro } from '../Intro';
import info from '../info-games.json';

export const Savanna = (): JSX.Element => {
  const infoGame = info.find((item) => item.name === 'САВАННА');
  const { isMainPage } = useTypedSelector((state) => state.savannaState);
  if (isMainPage) {
    return <ChooseLvl bg="savanna.jpg" />;
  }

  return (
    <Intro name={infoGame.name} text={infoGame.text} bg="savannah-intro.png" />
  );
};
