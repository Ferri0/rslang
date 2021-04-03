import React, { useEffect, useRef } from 'react';
import { Word } from '../../../../types';
import { GameMenu } from '.';
import { useTypedSelector, useAction } from '../../../../hooks';
import { shuffle } from '../../../../utils';

import style from './Game-logic.module.scss';
import rightAnswerSound from '../../../../assets/sounds/correct.mp3';
import errorAnserSound from '../../../../assets/sounds/erro.mp3';
import { GameWords } from '../Game-words';
import { Statistics } from '../../Statistics';

interface IWords {
  words: Word[];
}

export const GameLogic = ({ words }: IWords): JSX.Element => {
  const clazzRef = useRef(style.question);
  const errorSoundRef = useRef(new Audio(errorAnserSound));
  const {
    question,
    hearts,
    rightAnswer,
    wrongAnswer,
    wordsToPlay,
    wordsInButtons,
    scrollBg,
    statics,
  } = useTypedSelector((state) => state.savannaState);

  const {
    setHearts,
    setRightAnswerAction,
    setWrongAnswerAction,
    setWordsToPlayAction,
    questionAction,
    setButtonsAction,
    setScrollToTop,
    resetScrollBackground,
    addRightWordToStatics,
    addWrongWordToStatics,
  } = useAction();

  const getThreeRandomWord = (arr: Word[]): string[] =>
    shuffle(arr)
      .slice(0, 3)
      .map((item) => item.wordTranslate);

  const rightSound = new Audio(rightAnswerSound);
  // const errorSound = new Audio(errorAnserSound);

  useEffect(() => {
    setWordsToPlayAction(shuffle(words));
    setHearts(5);
    resetScrollBackground();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (wordsToPlay.length !== 0) {
      const newButtonsToPlay = shuffle([
        ...getThreeRandomWord(words),
        wordsToPlay[wordsToPlay.length - 1].wordTranslate,
      ]);
      setButtonsAction(newButtonsToPlay);
      questionAction(wordsToPlay[wordsToPlay.length - 1]);
    }

    const timerID = setTimeout(() => {
      // errorSoundRef.current.play();
      addWrongWordToStatics(question);
      questionAction(wordsToPlay[wordsToPlay.length - 1]);
      setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
      setHearts(hearts - 1);
      setWrongAnswerAction(false);
    }, 6000);
    return () => {
      clearTimeout(timerID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, wordsToPlay, hearts]);

  if (rightAnswer) {
    setScrollToTop();
    addRightWordToStatics(question);
    rightSound.play();
    questionAction(wordsToPlay[wordsToPlay.length - 1]);
    setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
    setRightAnswerAction(false);
  }

  if (wrongAnswer) {
    addWrongWordToStatics(question);
    // errorSoundRef.current.play();
    questionAction(wordsToPlay[wordsToPlay.length - 1]);
    setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
    setHearts(hearts - 1);
    setWrongAnswerAction(false);
  }

  if (wordsToPlay.length === 0 || hearts < 1) {
    errorSoundRef.current.pause();
    return <Statistics statics={statics} />;
  }

  return (
    <div className={style.game_wrapper}>
      <GameMenu hearts={hearts} />
      <div className={style.game_main}>
        <div style={scrollBg} className={style.game_image} />
        <GameWords
          clazz={clazzRef.current}
          question={question}
          wordsInButtons={wordsInButtons}
          setRightAnswerAction={setRightAnswerAction}
          setWrongAnswerAction={setWrongAnswerAction}
        />
      </div>
    </div>
  );
};
