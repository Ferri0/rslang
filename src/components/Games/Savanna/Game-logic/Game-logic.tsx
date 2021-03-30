import React, { useEffect, useState } from 'react';
import { Words } from '../../../../types';
import { GameMenu } from '.';
import { Answers } from '../Answers';
import style from './Game-logic.module.scss';
import errorMp3 from '../../../../assets/sounds/erro.mp3';
import { useTypedSelector } from '../../../../hooks';

export const GameLogic = () => {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState('Random word');
  const [heartsLeft, setHeartsLeft] = useState(5);
  const [scrollBg, setScrollBg] = useState({ backgroundPositionY: '100%' });

  const { words } = useTypedSelector((state) => state.groupOfWords);

  const shuffle = (arr: Words): Words => arr.sort(() => Math.random() - 0.5);

  const arrayWords = shuffle(words).slice(10);
  const sound = new Audio(errorMp3);

  useEffect(() => {
    setAnswers(arrayWords);
  }, [words]);

  useEffect(() => {
    const timeId = setTimeout(() => console.log('Playing sound'), 2000);

    if (answers.length > 0) {
      setQuestion(answers.pop().word);
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [answers]);

  console.log(answers);

  const onscrollToTop = () => {
    setScrollBg(({ backgroundPositionY }) => ({
      backgroundPositionY: parseInt(backgroundPositionY) - 10 + '%',
    }));
  };

  const playWord = () => {
    setQuestion(answers.pop().word);
    console.log('play');
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
          <Answers />
        </div>
        <button onClick={onscrollToTop} className={style.scrollBtn}>
          Scroll
        </button>
        <button onClick={playWord} className={style.play_word}>
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
