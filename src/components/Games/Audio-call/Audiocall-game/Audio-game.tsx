import React, { useContext, useEffect, useRef, useState } from 'react';
import { useAction, useTypedSelector } from '../../../../hooks';
import { Word } from '../../../../types';
import { GameMenu } from '../../GameMenu';
import style from './Audiocall-game.module.scss';
import rightAnswerSound from '../../../../assets/sounds/correct.mp3';
import errorAnswerSound from '../../../../assets/sounds/error.mp3';
import { getRandomWords, shuffle } from '../../../../utils';
import { Context } from '../../../word-service-context';
import { ViewAnswer } from '../View-answer';
import { ViewQuestion } from '../Audio-question';

type PropsType = {
  words: Word[];
  setGameEnd: (arg: boolean) => void;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>;
  isWrong: boolean;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  exampleAudioRef: React.MutableRefObject<HTMLAudioElement>;
};

export const AudioGame = ({
  words,
  setGameEnd,
  setIsWrong,
  isWrong,
  audioRef,
  exampleAudioRef,
}: PropsType): JSX.Element => {
  const context = useContext(Context);
  const fullscreenRef = useRef();
  const [mainActiveClass, setMainActiveClass] = useState(style.icon);
  const [exampleActiveClass, setExampleActiveClass] = useState(style.icon);
  const { gameState } = useTypedSelector((state) => state);
  const actions = useAction();

  const errorSoundRef = new Audio(errorAnswerSound);
  const rightSound = new Audio(rightAnswerSound);

  const setStateIfWrongAnswer = () => {
    errorSoundRef.play();
    setIsWrong(true);
    actions.setWrongAnswerAction(false);
  };

  const continueAfterMistake = () => {
    actions.setWrongAnswerAction(false);
    actions.addWrongWordToStatics(gameState.question);
    actions.setQuestionAction(
      gameState.wordsToPlay[gameState.wordsToPlay.length - 1]
    );
    actions.setWordsToPlayAction(
      gameState.wordsToPlay.slice(0, gameState.wordsToPlay.length - 1)
    );
    setIsWrong(false);
  };

  const setStateIfRightAnswer = () => {
    rightSound.play();
    actions.addRightWordToStatics(gameState.question);
    actions.setQuestionAction(
      gameState.wordsToPlay[gameState.wordsToPlay.length - 1]
    );
    actions.setWordsToPlayAction(
      gameState.wordsToPlay.slice(0, gameState.wordsToPlay.length - 1)
    );
    actions.setRightAnswerAction(false);
  };

  const toggleActiveClass = () => {
    setMainActiveClass(style.active_icon);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setMainActiveClass(style.icon);
    }, 800);
    return () => {
      clearTimeout(id);
    };
  }, [mainActiveClass]);

  useEffect(() => {
    const id = setTimeout(() => {
      setExampleActiveClass(style.icon);
    }, 800);
    return () => {
      clearTimeout(id);
    };
  }, [exampleActiveClass]);

  useEffect(() => {
    if (gameState.wordsToPlay.length !== 0) {
      const lastIdx = gameState.wordsToPlay.length - 1;
      const wordToPlay = gameState.wordsToPlay[lastIdx].wordTranslate;
      const newWordsToPlay = shuffle([
        ...getRandomWords(words, wordToPlay, 3),
        wordToPlay,
      ]);

      actions.setWordsInButtons(newWordsToPlay);
      actions.setQuestionAction(gameState.wordsToPlay[lastIdx]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, gameState.wordsToPlay]);

  if (gameState.rightAnswer) {
    setStateIfRightAnswer();
  }

  if (gameState.wrongAnswer) {
    setStateIfWrongAnswer();
  }

  if (!gameState.wordsToPlay.length && gameState.isLoadingPlayWords) {
    setGameEnd(true);
  }

  const audioWord = (audio: React.MutableRefObject<HTMLAudioElement>) => {
    toggleActiveClass();
    audio.current.play();
  };

  const audioExample = (audio: React.MutableRefObject<HTMLAudioElement>) => {
    setExampleActiveClass(style.active_icon);
    audio.current.play();
  };

  const keyHandler = (key: string) => {
    if (key === 'Enter') {
      toggleActiveClass();
      audioRef.current.play();
    }
  };

  const viewLayout = isWrong ? (
    <ViewAnswer
      apiPath={context.apiPath}
      gameState={gameState}
      audioRef={audioRef}
      audioWord={audioWord}
      keyHandler={keyHandler}
      mainActiveClass={mainActiveClass}
      exampleAudioRef={exampleAudioRef}
      audioExample={audioExample}
      exampleActiveClass={exampleActiveClass}
      continueAfterMistake={continueAfterMistake}
    />
  ) : (
    <ViewQuestion
      apiPath={context.apiPath}
      gameState={gameState}
      audioRef={audioRef}
      audioWord={audioWord}
      keyHandler={keyHandler}
      mainActiveClass={mainActiveClass}
      setRightAnswerAction={actions.setRightAnswerAction}
      setWrongAnswerAction={actions.setWrongAnswerAction}
    />
  );

  return (
    <div className={style.main} ref={fullscreenRef}>
      <GameMenu fullscreenRef={fullscreenRef} />
      <div className={style.game_main}>
        <div className={style.game_words}>{viewLayout}</div>
      </div>
    </div>
  );
};
