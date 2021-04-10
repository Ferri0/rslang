import React from 'react';
import { useTypedSelector } from '../../../hooks';
import { ChooseLvl } from '../../ChooseLvl';
import { Intro } from '../Intro';
import info from '../info-games.json';

export const Sprint = (): JSX.Element => {
  const infoGame = info.find((item) => item.name === 'СПРИНТ');
  const { isMainPage } = useTypedSelector((state) => state.gameState);

  if (isMainPage) {
    return <ChooseLvl background="sprint.webp" />;
  }

  return (
    <Intro name={infoGame.name} text={infoGame.text} bg="sprint-intro.jpg" />
  );
};
