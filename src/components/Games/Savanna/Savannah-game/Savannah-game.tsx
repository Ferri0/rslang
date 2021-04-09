import React, { useEffect, useRef } from 'react';
import { Word } from '../../../../types';
import { GameMenu } from '../GameMenu';
import { useTypedSelector, useAction } from '../../../../hooks';
import { getTRandomWords, shuffle } from '../../../../utils';

import style from './Savannah-game.module.scss';
import rightAnswerSound from '../../../../assets/sounds/correct.mp3';
import errorAnswerSound from '../../../../assets/sounds/error.mp3';
import { Answers } from '../../Answers';

type PropsType = {
  words: Word[];
  setGameEnd: (arg: boolean) => void;
};

export const SavannahGame = ({ words, setGameEnd }: PropsType): JSX.Element => {
  const clazzRef = useRef(style.question);
  const fullscreenRef = useRef();
  const errorSoundRef = new Audio(errorAnswerSound);
  const rightSound = new Audio(rightAnswerSound);
  const {
    question,
    hearts,
    rightAnswer,
    wrongAnswer,
    wordsToPlay,
    wordsInButtons,
    scrollBg,
    isLoadingPlayWords,
  } = useTypedSelector((state) => state.gameState);
  const actions = useAction();

  const setStateIfWrongAnswer = () => {
    errorSoundRef.play();
    actions.addWrongWordToStatics(question);
    actions.setQuestionAction(wordsToPlay[wordsToPlay.length - 1]);
    actions.setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
    actions.setHearts(hearts - 1);
    actions.setWrongAnswerAction(false);
  };

  useEffect(() => {
    if (wordsToPlay.length !== 0) {
      const lastIdx = wordsToPlay.length - 1;
      const wordToPlay = wordsToPlay[lastIdx].wordTranslate;
      const newWordsToPlay = shuffle([
        ...getTRandomWords(words, wordToPlay, 3),
        wordToPlay,
      ]);

      actions.setWordsInButtons(newWordsToPlay);
      actions.setQuestionAction(wordsToPlay[lastIdx]);
    }

    const timerID = setTimeout(() => {
      setStateIfWrongAnswer();
    }, 6000);
    return () => {
      clearTimeout(timerID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, wordsToPlay, hearts]);

  if (rightAnswer) {
    rightSound.play();
    actions.setScrollToTop();
    actions.addRightWordToStatics(question);
    actions.setQuestionAction(wordsToPlay[wordsToPlay.length - 1]);
    actions.setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
    actions.setRightAnswerAction(false);
  }

  if (wrongAnswer) {
    setStateIfWrongAnswer();
  }

  if ((!wordsToPlay.length || !hearts) && isLoadingPlayWords) {
    setGameEnd(true);
  }

  return (
    <div className={style.game_wrapper} ref={fullscreenRef}>
      <GameMenu fullscreenRef={fullscreenRef} hearts={hearts} />
      <div className={style.game_main}>
        <div className={style.game_image} style={scrollBg} />
        <div className={style.game_words}>
          <div className={clazzRef.current}>{question.word}</div>
          <Answers
            clazz={clazzRef.current}
            setRightAnswerAction={actions.setRightAnswerAction}
            question={question.wordTranslate}
            wordsInButtons={wordsInButtons}
            setWrongAnswerAction={actions.setWrongAnswerAction}
          />
        </div>
      </div>
    </div>
  );
};
