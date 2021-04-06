import React, { useRef, useState } from 'react';
import { useAction, useTypedSelector } from '../../../../hooks';
import { shuffle } from '../../../../utils';
import { Statistics } from '../../Statistics';
import { Button } from '../Button';
import { SavannahGame } from '../Savannah-game';

import style from './Intro.module.scss';

export const Intro = (): JSX.Element => {
  const [startGame, setStartGame] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const currentRef = useRef();
  const {
    groupOfWords: { words },
    savannaState: { statistics },
  } = useTypedSelector((state) => state);

  const actions = useAction();

  const onStartGame = () => {
    setStartGame(true);
    actions.setHearts(5);
    actions.resetScrollBackground();
    actions.resetStatisticsData();
    actions.setWordsToPlayAction(shuffle(words));
  };

  const startNewGame = () => {
    setStartGame(false);
    setGameEnd(false);
  };

  window.onkeyup = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && currentRef.current) {
      onStartGame();
    }
  };

  if (gameEnd) {
    return <Statistics statics={statistics} startNewGame={startNewGame} />;
  }

  if (startGame) {
    return <SavannahGame words={words} setGameEnd={setGameEnd} />;
  }

  return (
    <div className={style.Intro} ref={currentRef}>
      <div className={style.text}>
        <h1 className={style.title}>САВАННА</h1>
        <h3 className={style.subtitle}>
          Мини-игра «Саванна» - это Анналог одноименной игры из LinguaLeo. После
          запуска игры вы увидите падающее слово на английском и четыре варианта
          перевода. Выбрать правильный ответ можно двумя способами:
        </h3>
        <p>1. Кликните по нему мышью;</p>
        <p>2. Используйте клавиши 1, 2, 3, 4.</p>
        <Button text="Начать" fn={onStartGame} />
      </div>
    </div>
  );
};
