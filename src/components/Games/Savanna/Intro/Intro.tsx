import React, { useState } from 'react';
import { Words } from '../../../../types';
import { GameLogic } from '../Game-logic/Game-logic';

import style from './Intro.module.scss';

export const Intro = () => {
  const [startGame, setStartGame] = useState(false);

  const onStartGame = () => {
    setStartGame(true);
  };

  if (startGame) {
    return <GameLogic />;
  }

  return (
    <div className={style.Intro}>
      <div className={style.text}>
        <h1 className={style.title}>САВАННА</h1>
        <h3 className={style.subtitle}>
          Мини-игра «Саванна» - это Анналог одноименной игры из LinguaLeo. После
          запуска игры вы увидите падающее слово на английском и четыре варианта
          перевода. Выбрать правильный ответ можно двумя способами:
        </h3>
        <p>1. Кликните по нему мышью;</p>
        <p>2. Используйте клавиши 1, 2, 3, 4.</p>
        <button className={style.btn} onClick={onStartGame}>
          Начать
        </button>
      </div>
    </div>
  );
};
