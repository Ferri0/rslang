import React, { useEffect, useState } from 'react';
import { Words } from '../../../../types';
import { GameMenu } from '.';
import { Answers } from '../Answers';
import { useTypedSelector } from '../../../../hooks';
import { shuffle } from '../../../../utils';

import style from './Game-logic.module.scss';
import rightAnswerSound from '../../../../assets/sounds/right_answer.mp3';

export const GameLogic = (): JSX.Element => {
  const [scrollBg, setScrollBg] = useState({ backgroundPositionY: '100%' });
  const [heartsLeft, setHeartsLeft] = useState(5);
  const [rightAnswer, setRightAnswer] = useState(false);

  const { words } = useTypedSelector((state) => state.groupOfWords);

  const getThreeRandomWord = (arr: Words): string[] =>
    shuffle(arr)
      .slice(0, 3)
      .map((item) => item.wordTranslate);

  const [wordsToPlay, setWordsToPlay] = useState(shuffle(words));

  const [question, setQuestion] = useState(wordsToPlay[wordsToPlay.length - 1]);
  const [answersWords, setAnswersWords] = useState([
    ...getThreeRandomWord(words),
    wordsToPlay[wordsToPlay.length - 1].wordTranslate,
  ]);

  useEffect(() => {
    setAnswersWords([
      ...getThreeRandomWord(words),
      wordsToPlay[wordsToPlay.length - 1].wordTranslate,
    ]);
  }, [words, wordsToPlay]);

  useEffect(() => {
    const timeId = setTimeout(() => console.log('Playing sound'), 2000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  const onscrollToTop = () => {
    setScrollBg(({ backgroundPositionY }) => ({
      backgroundPositionY: `${parseInt(backgroundPositionY, 10) - 5}%`,
    }));
  };

  const setQuestionWord = () => {
    setQuestion(wordsToPlay.pop());
  };

  const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    position: 'absolute',
    top: '50%',
  };

  if (rightAnswer) {
    const sound = new Audio(rightAnswerSound);
    sound.play();
    setQuestion(wordsToPlay.pop());
    setRightAnswer(false);
  }

  return (
    <div className={style.game_wrapper}>
      <GameMenu heartsLeft={heartsLeft} />
      <div className={style.game_main}>
        <div style={scrollBg} className={style.game_image} />
        <div className={style.game_words}>
          <div className={style.question}>{question.word}</div>
          <Answers
            setRightAnswer={setRightAnswer}
            question={question.wordTranslate}
            answersWords={answersWords}
          />
        </div>
        <button
          type="button"
          onClick={onscrollToTop}
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
      </div>
    </div>
  );
};
