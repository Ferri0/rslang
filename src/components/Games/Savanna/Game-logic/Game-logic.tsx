import React, { useEffect, useState } from 'react';
import { Word } from '../../../../types';
import { GameMenu } from '.';
import { useTypedSelector, useAction } from '../../../../hooks';
import { shuffle } from '../../../../utils';

import style from './Game-logic.module.scss';
import rightAnswerSound from '../../../../assets/sounds/correct.mp3';
import { GameWords } from '../Game-words';

interface IWords {
  words: Word[];
}

interface IProps {
  onscrollToTop: () => void;
  setQuestionWord: () => void;
  wordsToPlay: Word[];
}

const TestComponent = ({
  onscrollToTop,
  setQuestionWord,
  wordsToPlay,
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
      <button type="button" onClick={onscrollToTop} className={style.scrollBtn}>
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
  const [scrollBg, setScrollBg] = useState({ backgroundPositionY: '100%' });
  const {
    hearts,
    rightAnswer,
    wordsToPlay,
    wordsInButtons,
    question,
  } = useTypedSelector((state) => state.savannaState);

  const {
    setHearts,
    setRightAnswerAction,
    setWordsToPlayAction,
    questionAction,
    setButtonsAction,
  } = useAction();

  const getThreeRandomWord = (arr: Word[]): string[] =>
    shuffle(arr)
      .slice(0, 3)
      .map((item) => item.wordTranslate);

  const sound = new Audio(rightAnswerSound);

  useEffect(() => {
    setWordsToPlayAction(shuffle(words));
    setHearts(5);
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

    const timerID = setTimeout(() => setHearts(hearts - 1), 5000);
    return () => {
      clearTimeout(timerID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, wordsToPlay]);

  const onscrollToTop = () => {
    setScrollBg(({ backgroundPositionY }) => ({
      backgroundPositionY: `${parseInt(backgroundPositionY, 10) - 5}%`,
    }));
  };

  const setQuestionWord = () => {
    questionAction(wordsToPlay[wordsToPlay.length - 1]);
    setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
  };

  if (rightAnswer) {
    onscrollToTop();
    sound.play();
    sound.currentTime = 0;
    questionAction(wordsToPlay[wordsToPlay.length - 1]);
    setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
    setRightAnswerAction(false);
  }

  if (wordsToPlay.length < 1) {
    return (
      <div>
        <dialog open>TABLE WITH RESULTS</dialog>
      </div>
    );
  }

  return (
    <div className={style.game_wrapper}>
      <GameMenu hearts={hearts} />
      <div className={style.game_main}>
        <div style={scrollBg} className={style.game_image} />
        <GameWords
          question={question}
          wordsInButtons={wordsInButtons}
          setRightAnswerAction={setRightAnswerAction}
        />
        <TestComponent
          onscrollToTop={onscrollToTop}
          setQuestionWord={setQuestionWord}
          wordsToPlay={wordsToPlay}
        />
      </div>
    </div>
  );
};
