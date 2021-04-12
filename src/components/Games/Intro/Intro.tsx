import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAction, useTypedSelector } from '../../../hooks';
import { shuffle } from '../../../utils';
import { OwnGame } from '../Own-game';
import { Statistics } from '../Statistics';
import { Button } from '../Savanna/Button';
import { SavannahGame } from '../Savanna/Savannah-game';

import style from './Intro.module.scss';
import { AudioGame } from '../Audio-call/Audiocall-game';
// import { SprintGame } from '../Sprint/Sprint-game';

type Props = {
  name: string;
  text: string;
  bg: string;
};

export const Intro = ({ name, text, bg }: Props): JSX.Element => {
  const [startGame, setStartGame] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const currentRef = useRef();
  const audioRef = useRef<HTMLAudioElement>();
  const exampleAudioRef = useRef<HTMLAudioElement>();
  const {
    groupOfWords: { words },
    gameState: { statistics, question, wrongAnswer },
  } = useTypedSelector((state) => state);
  const location = useLocation();
  const [, gamePath] = location.pathname
    .match(/games.+/g)
    .join()
    .split('/');

  const actions = useAction();

  const onStartGame = () => {
    actions.setHearts(5);
    actions.resetScrollBackground();
    actions.resetStatisticsData();
    actions.setWordsToPlayAction(shuffle(words));
    setStartGame(true);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [question, wrongAnswer]);

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

  if (startGame && gamePath === 'savanna') {
    return <SavannahGame words={words} setGameEnd={setGameEnd} />;
  }

  if (startGame && gamePath === 'audiocall') {
    return (
      <AudioGame
        setIsWrong={setIsWrong}
        isWrong={isWrong}
        words={words}
        setGameEnd={setGameEnd}
        audioRef={audioRef}
        exampleAudioRef={exampleAudioRef}
      />
    );
  }

  // if (startGame && gamePath === 'sprint') {
  //   return <SprintGame words={words} setGameEnd={setGameEnd} />;
  // }

  if (startGame && gamePath === 'owngame') {
    return <OwnGame />;
  }

  const backgroundImagePath = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../../../../assets/images/intro-bg/${bg})`;

  return (
    <div
      className={style.Intro}
      ref={currentRef}
      style={{
        backgroundImage: backgroundImagePath,
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
