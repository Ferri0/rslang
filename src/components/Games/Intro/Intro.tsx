import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAction, useTypedSelector } from '../../../hooks';
import { shuffle } from '../../../utils';
import { OwnGame } from '../Own-game';
import { Statistics } from '../Statistics';
import { Button } from '../Savanna/Button';
import { SavannahGame } from '../Savanna/Savannah-game';

import style from './Intro.module.scss';
import { AudioGame } from '../Audio-call/Audiocall-game';
import { SprintGame } from '../Sprint/Sprint-game';

type Props = {
  name: string;
  text: string;
  bg: string;
};

export const Intro = ({ name, text, bg }: Props): JSX.Element => {
  const [startGame, setStartGame] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const currentRef = useRef();
  const {
    groupOfWords: { words },
    gameState: { statistics },
  } = useTypedSelector((state) => state);
  const location = useLocation();
  const [, pathOfGame] = location.pathname
    .match(/games.+/g)
    .join()
    .split('/');

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

  if (startGame && pathOfGame === 'savanna') {
    return <SavannahGame words={words} setGameEnd={setGameEnd} />;
  }

  if (startGame && pathOfGame === 'audiocall') {
    return <AudioGame words={words} setGameEnd={setGameEnd} />;
  }

  if (startGame && pathOfGame === 'sprint') {
    return <SprintGame words={words} setGameEnd={setGameEnd} />;
  }

  if (startGame && pathOfGame === 'owngame') {
    return <OwnGame />;
  }

  return (
    <div
      className={style.Intro}
      ref={currentRef}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../../../../assets/images/intro-bg/${bg})`,
      }}
    >
      <div className={style.text}>
        <h1 className={style.title}>{name}</h1>
        <h3 className={style.subtitle}>{text}</h3>
        <p>1. Кликните по нему мышью;</p>
        <p>2. Используйте клавиши 1, 2, 3, 4.</p>
        <Button text="Начать" fn={onStartGame} />
      </div>
    </div>
  );
};
