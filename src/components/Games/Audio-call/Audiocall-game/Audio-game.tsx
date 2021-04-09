import React, { useEffect, useRef } from 'react';
import { useAction, useTypedSelector } from '../../../../hooks';
import { Word } from '../../../../types';
import { GameMenu } from '../../Savanna/GameMenu';
import style from './Audiocall-game.module.scss';
import rightAnswerSound from '../../../../assets/sounds/correct.mp3';
import errorAnswerSound from '../../../../assets/sounds/error.mp3';
import { getTRandomWords, shuffle } from '../../../../utils';
import { Answers } from '../../Answers';

type PropsType = {
  words: Word[];
  setGameEnd: (arg: boolean) => void;
};

export const AudioGame = ({ words, setGameEnd }: PropsType): JSX.Element => {
  const fullscreenRef = useRef();

  const errorSoundRef = new Audio(errorAnswerSound);
  const rightSound = new Audio(rightAnswerSound);
  const {
    question,
    rightAnswer,
    wrongAnswer,
    wordsToPlay,
    wordsInButtons,
    isLoadingPlayWords,
  } = useTypedSelector((state) => state.gameState);
  const actions = useAction();

  const setStateIfWrongAnswer = () => {
    errorSoundRef.play();
    actions.addWrongWordToStatics(question);
    actions.setQuestionAction(wordsToPlay[wordsToPlay.length - 1]);
    actions.setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, wordsToPlay]);

  if (rightAnswer) {
    rightSound.play();
    actions.addRightWordToStatics(question);
    actions.setQuestionAction(wordsToPlay[wordsToPlay.length - 1]);
    actions.setWordsToPlayAction(wordsToPlay.slice(0, wordsToPlay.length - 1));
    actions.setRightAnswerAction(false);
  }

  if (wrongAnswer) {
    setStateIfWrongAnswer();
  }

  if (!wordsToPlay.length && isLoadingPlayWords) {
    setGameEnd(true);
  }

  return (
    <div className={style.main} ref={fullscreenRef}>
      <GameMenu fullscreenRef={fullscreenRef} />
      <div className={style.game_main}>
        <div className={style.game_words}>
          <div className={style.question_wrapper}>
            <i className="fas fa-volume-up" />
          </div>
          <Answers
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
