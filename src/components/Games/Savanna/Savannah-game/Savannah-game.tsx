import React, { useEffect, useRef } from 'react';
import { Word } from '../../../../types';
import { GameMenu } from '../../GameMenu';
import { useTypedSelector, useAction } from '../../../../hooks';
import { getRandomWords, shuffle } from '../../../../utils';

import style from './Savannah-game.module.scss';
import rightAnswerSound from '../../../../assets/sounds/correct.mp3';
import errorAnswerSound from '../../../../assets/sounds/error.mp3';
import { Answers } from '../../Answers';
import { updateUserStats, updateUserWordStatisitic } from '../../../../service';
import { addWordsToDB } from '../../../../utils/addWordsToDB';

type PropsType = {
  words: Word[];
  setGameOver: (arg: boolean) => void;
};

export const SavannahGame: React.FC<PropsType> = ({ words, setGameOver }) => {
  const clazzRef = useRef(style.question);
  const fullscreenRef = useRef();
  const errorSoundRef = new Audio(errorAnswerSound);
  const rightSound = new Audio(rightAnswerSound);
  const {
    gameState,
    auth: { isAuthorized },
  } = useTypedSelector((state) => state);
  const actions = useAction();
  const { wordsToPlay, hearts, question } = gameState;

  const setStateIfWrongAnswer = () => {
    errorSoundRef.play();
    actions.addWrongWordToStatics(question);
    actions.setQuestionAction(wordsToPlay[wordsToPlay.length - 1]);
    actions.setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
    actions.setHearts(hearts - 1);
    actions.setWrongAnswerAction(false);

    if (isAuthorized) {
      addWordsToDB(updateUserWordStatisitic, 'wrong', question.id);
      addWordsToDB(updateUserStats, 'wrong', question.id, 'audiocall');
    }
  };

  useEffect(() => {
    if (wordsToPlay.length !== 0) {
      const lastIdx = wordsToPlay.length - 1;
      const wordToPlay = wordsToPlay[lastIdx].wordTranslate;
      const newWordsToPlay = shuffle([
        ...getRandomWords(words, wordToPlay, 3),
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

  if (gameState.rightAnswer) {
    rightSound.play();
    actions.setScrollToTop();
    actions.addRightWordToStatics(question);
    actions.setQuestionAction(wordsToPlay[wordsToPlay.length - 1]);
    actions.setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
    actions.setRightAnswerAction(false);
  }

  if (gameState.wrongAnswer) {
    setStateIfWrongAnswer();
  }

  if ((!wordsToPlay.length || !hearts) && gameState.isLoadingPlayWords) {
    setGameOver(true);
  }

  return (
    <div className={style.game_wrapper} ref={fullscreenRef}>
      <GameMenu fullscreenRef={fullscreenRef} hearts={hearts} />
      <div className={style.game_main}>
        <div className={style.game_image} style={gameState.scrollBg} />
        <div className={style.game_words}>
          <div className={clazzRef.current}>{question.word}</div>
          <Answers
            clazz={clazzRef.current}
            setRightAnswerAction={actions.setRightAnswerAction}
            question={question.wordTranslate}
            wordsInButtons={gameState.wordsInButtons}
            setWrongAnswerAction={actions.setWrongAnswerAction}
          />
        </div>
      </div>
    </div>
  );
};
