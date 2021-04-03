import React, { useEffect, useRef, useState } from 'react';
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

interface IProps {
  setQuestionWord: () => void;
  wordsToPlay: Word[];
  setScrollToTop: () => void;
}

const TestComponent = ({
  setQuestionWord,
  wordsToPlay,
  setScrollToTop,
}: IProps): JSX.Element => {
  const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    position: 'absolute',
    top: '50%',
  };
  return (
    <>
      <button
        type="button"
        onClick={setScrollToTop}
        className={style.scrollBtn}
      >
        Scroll
      </button>
      <button
        type="button"
        onClick={setQuestionWord}
        className={style.play_word}
      >
        Play word
      </button>
      <div style={styles}>
        {wordsToPlay.map(({ wordTranslate }) => (
          <span key={wordTranslate}>{wordTranslate}</span>
        ))}
      </div>
    </>
  );
};

export const GameLogic = ({ words }: IWords): JSX.Element => {
  const clazzRef = useRef(style.question);
  const [statisticWords, setStatisticWords] = useState<Word>();
  const errorSoundRef = useRef(new Audio(errorAnserSound));
  const {
    question,
    hearts,
    rightAnswer,
    wrongAnswer,
    wordsToPlay,
    wordsInButtons,
    scrollBg,
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

  const setQuestionWords = () => {
    questionAction(wordsToPlay[wordsToPlay.length - 1]);
    setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
  };

  if (rightAnswer) {
    setScrollToTop();
    rightSound.play();
    questionAction(wordsToPlay[wordsToPlay.length - 1]);
    setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
    setRightAnswerAction(false);
  }

  if (wrongAnswer) {
    errorSoundRef.current.play();
    questionAction(wordsToPlay[wordsToPlay.length - 1]);
    setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
    setHearts(hearts - 1);
    setWrongAnswerAction(false);
  }

  if (wordsToPlay.length === 0 || hearts < 1) {
    errorSoundRef.current.pause();
    return <Statistics statisticWords={statisticWords} />;
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
