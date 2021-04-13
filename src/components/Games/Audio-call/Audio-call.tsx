import React from 'react';
import { useTypedSelector } from '../../../hooks';
import { ChooseLvl } from '../../ChooseLvl';
import { Intro } from '../Intro';
import info from '../info-games.json';

export const AudioCall: React.FC = () => {
  const infoGame = info.find((item) => item.name === 'АУДИОВЫЗОВ');
  const { isMainPage } = useTypedSelector((state) => state.gameState);

  if (isMainPage) {
    return <ChooseLvl background="Headphones.jpg" />;
  }

  return (
    <Intro name={infoGame.name} text={infoGame.text} bg="audiocall-intro.jpg" />
  );
};
