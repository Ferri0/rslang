/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';
import style from './Sprint-game.module.scss';
import { Timer } from '../Timer';
import { Result } from '../Result';
import { getAllWords, getWord, rand, userId, userToken } from '../utils';
import rightAnswerSound from '../../../../assets/sounds/correct.mp3';
import errorAnserSound from '../../../../assets/sounds/error.mp3';
import { HomeButton } from '../../Home-button';
import { FullscreenBtn } from '../../FullscreenBtn';
import { useTypedSelector } from '../../../../hooks';
import { updateUserStats, updateUserWordStatisitic } from '../../../../service';

interface Props {
  startGame: boolean;
  setStartGame?: (value: boolean) => void;
  setRulesCls?: (value: string) => void;
}

export const SprintGame: React.FC<Props> = ({
  startGame,
  setStartGame,
  setRulesCls,
}) => {
  const {
    groupOfWords: { words },
  } = useTypedSelector((state) => state);

  const [allWords] = useState(() => getAllWords(words));
  const rusWords = allWords.map((word) => word.wordTranslate);
  const enWords = allWords.map((word) => word.word);

  const [endGame, setEndGame] = useState(false);
  const [enWord, setEnWord] = useState(enWords[0]);
  const [rusWord, setRusWord] = useState(() => rusWords[rand(rusWords, 0, 3)]);
  const [ind, setInd] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreH, setScoreH] = useState(10);
  const [numCorrectAns, setNumCorrectAns] = useState(0);
  const [wordSuccess, setWordSuccess] = useState([
    'no-active',
    'no-active',
    'no-active',
  ]);
  const [header, setHeader] = useState('score-10');
  const [border, setBorder] = useState('');
  const [correct, setCorrect] = useState([]);
  const [error, setError] = useState([]);
  const [resultCls, setResultCls] = useState('close');
  const correctSound = new Audio(rightAnswerSound);
  const errorSound = new Audio(errorAnserSound);
  const fullscreenRef = useRef();
  const { isAuthorized } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (endGame) setResultCls('open');
  }, [endGame]);

  const checkAnswer = (ans: 'error' | 'correct') => {
    if (!endGame) {
      const check =
        allWords[ind].wordTranslate === rusWord ? 'correct' : 'error';
      if (ans === check) {
        setNumCorrectAns(numCorrectAns + 1);
        setScore(score + scoreH);
        setBorder('correct');
        setCorrect((prev) => [...prev, enWord]);
        correctSound.play();

        if (isAuthorized) {
          updateUserWordStatisitic(
            userId,
            getWord(enWord, words).id,
            userToken,
            'right'
          );
          updateUserStats(userId, userToken, 'sprint', 'right');
        }
      } else {
        setNumCorrectAns(0);
        setScoreH(10);
        const arr = wordSuccess.map(() => 'no-active');
        setWordSuccess(arr);
        setBorder('error');
        setError((prev) => [...prev, enWord]);
        errorSound.play();

        if (isAuthorized) {
          updateUserWordStatisitic(
            userId,
            getWord(enWord, words).id,
            userToken,
            'wrong'
          );
          updateUserStats(userId, userToken, 'sprint', 'wrong');
        }
      }
      setInd(ind + 1);
    }
  };

  window.onkeyup = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') checkAnswer('correct');
    if (e.key === 'ArrowRight') checkAnswer('error');
  };

  useEffect(() => {
    if (ind < allWords.length) {
      setEnWord(enWords[ind]);
      setRusWord(rusWords[rand(rusWords, ind, ind + 3)]);
    } else {
      setEndGame(true);
      setStartGame(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ind]);

  useEffect(() => {
    setWordSuccess((prevState) => {
      let arr: string[];
      arr = [...prevState];
      if (numCorrectAns === 1) {
        arr = arr.map(() => 'no-active');
      }
      arr[numCorrectAns - 1] = 'active';
      return arr;
    });

    if (numCorrectAns === 3) {
      if (scoreH !== 80) {
        setScoreH(scoreH * 2);
        setNumCorrectAns(0);
      }
    }
  }, [numCorrectAns, scoreH]);

  useEffect(() => {
    setHeader(`score-${scoreH}`);
  }, [scoreH]);

  useEffect(() => {
    setTimeout(() => setBorder(''), 750);
  }, [border]);

  const clickCloseResult = () => {
    setResultCls('close');
    setRulesCls('open');
  };

  return (
    <div className={style.sprintWrapper} ref={fullscreenRef}>
      <div className={style.sprintOverlay} />
      <Result
        clickCloseResult={clickCloseResult}
        cls={resultCls}
        error={error}
        correct={correct}
        allWords={words}
      />
      <div className={style.header}>
        <HomeButton />
        <FullscreenBtn fullscreenRef={fullscreenRef} />
      </div>
      <div className={`${style.sprintGame} ${style[border]}`}>
        <div className={style.sprintInfo}>
          <div className={style.sprintScore}>Очки: {score}</div>
          <Timer setEndGame={setEndGame} startGame={startGame} />
        </div>
        <div className={`${style.sprintHeader} ${style[header]}`}>
          <div className={style.wordSuccessBlock}>
            {[1, 2, 3].map((num) => (
              <div
                key={`word-success-${num}`}
                className={`${style.wordSuccess} ${
                  style[wordSuccess[num - 1]]
                }`}
              />
            ))}
          </div>
          <div className={style.sprintScoreH}>+{scoreH} очков за слово</div>
        </div>
        <div className={style.sprintImg}>
          <div className={`${style.imgSuccess} ${style.img0}`} />
          {[1, 2, 3].map((num) => (
            <div
              key={`img-success-${num}`}
              className={`${style.imgSuccess} ${style[`img${num}`]} ${
                style[wordSuccess[num - 1]]
              }`}
            />
          ))}
        </div>
        <div className={style.sprintWords}>
          <div className={style.eng}>{enWord}</div>
          <div className={style.rus}>{rusWord}</div>
        </div>
        <div className={style.buttonBlock}>
          <button
            type="button"
            className={style.buttonCorrect}
            onClick={() => checkAnswer('correct')}
          >
            Верно
          </button>
          <button
            type="button"
            className={style.buttonError}
            onClick={() => checkAnswer('error')}
          >
            Неверно
          </button>
        </div>
      </div>
    </div>
  );
};
