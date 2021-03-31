import React, { useEffect, useMemo, useState } from 'react';
import { Words } from '../../../../types';
import { GameMenu } from '.';
import { Answers } from '../Answers';
import style from './Game-logic.module.scss';
import errorMp3 from '../../../../assets/sounds/erro.mp3';
import { useTypedSelector } from '../../../../hooks';

const shuffle = (arr: Words): Words => [...arr.sort(() => Math.random() - 0.5)];

const getThreeRandomWord = (arr: Words): string[] => {
  return shuffle(arr)
    .slice(0, 3)
    .map((item) => item.wordTranslate);
};

export const GameLogic = () => {
  const [heartsLeft, setHeartsLeft] = useState(5);
  const [scrollBg, setScrollBg] = useState({ backgroundPositionY: '100%' });

  const { words } = useTypedSelector((state) => state.groupOfWords);

  const arrayWords = shuffle(words);

  const [answers, setAnswers] = useState(() => shuffle(words));

  const [question, setQuestion] = useState(answers.pop().word);

  const threeRandomWord = [
    ...getThreeRandomWord(words),
    answers.pop().wordTranslate,
  ];

  console.log(threeRandomWord);
  const sound = new Audio(errorMp3);
  console.log(answers);

  useEffect(() => {
    const timeId = setTimeout(() => console.log('Playing sound'), 2000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  const onscrollToTop = () => {
    setScrollBg(({ backgroundPositionY }) => ({
      backgroundPositionY: parseInt(backgroundPositionY) - 10 + '%',
    }));
  };

  const setQuestionWord = () => {
    setQuestion(answers.pop().word);
  };

  const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    position: 'absolute',
    top: '50%',
  };

  return (
    <div className={style.game_wrapper}>
      <GameMenu heartsLeft={heartsLeft} />
      <div className={style.game_main}>
        <div style={scrollBg} className={style.game_image} />
        <div className={style.game_words}>
          <div className={style.question}>{question}</div>
          <Answers threeRandomWord={threeRandomWord} />
        </div>
        <button onClick={onscrollToTop} className={style.scrollBtn}>
          Scroll
        </button>
        <button onClick={setQuestionWord} className={style.play_word}>
          Play word
        </button>
        <div style={styles}>
          {answers.map(({ wordTranslate }) => {
            return <span key={wordTranslate}>{wordTranslate}</span>;
          })}
        </div>
      </div>
    </div>
  );
};
