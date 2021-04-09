import React, { useContext, useEffect, useRef } from 'react';
import { useAction, useTypedSelector } from '../../../../hooks';
import { Word } from '../../../../types';
import { GameMenu } from '../../GameMenu';
import style from './Audiocall-game.module.scss';
import rightAnswerSound from '../../../../assets/sounds/correct.mp3';
import errorAnswerSound from '../../../../assets/sounds/error.mp3';
import { getTRandomWords, playback, shuffle } from '../../../../utils';
import { Answers } from '../../Answers';
import { Context } from '../../../word-service-context';

type PropsType = {
  words: Word[];
  setGameEnd: (arg: boolean) => void;
};

export const AudioGame = ({ words, setGameEnd }: PropsType): JSX.Element => {
  const context = useContext(Context);
  const fullscreenRef = useRef();
  const audioElement = useRef<HTMLAudioElement>();
  const errorSoundRef = new Audio(errorAnswerSound);
  const rightSound = new Audio(rightAnswerSound);
  const { gameState } = useTypedSelector((state) => state);
  const actions = useAction();

  const setStateIfWrongAnswer = () => {
    errorSoundRef.play();
    actions.addWrongWordToStatics(gameState.question);
    actions.setQuestionAction(
      gameState.wordsToPlay[gameState.wordsToPlay.length - 1]
    );
    actions.setWordsToPlayAction(
      gameState.wordsToPlay.slice(0, gameState.wordsToPlay.length - 1)
    );
    actions.setWrongAnswerAction(false);
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

  useEffect(() => {
    if (gameState.wordsToPlay.length !== 0) {
      const lastIdx = gameState.wordsToPlay.length - 1;
      const wordToPlay = gameState.wordsToPlay[lastIdx].wordTranslate;
      const newWordsToPlay = shuffle([
        ...getTRandomWords(words, wordToPlay, 3),
        wordToPlay,
      ]);

      actions.setWordsInButtons(newWordsToPlay);
      actions.setQuestionAction(gameState.wordsToPlay[lastIdx]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, gameState.wordsToPlay]);

  useEffect(() => {
    if (gameState.question.audio) {
      playback(gameState.question.audio);
    }
  }, [gameState.question]);

  if (gameState.rightAnswer) {
    setStateIfRightAnswer();
    audioElement.current.play();
  }

  if (gameState.wrongAnswer) {
    setStateIfWrongAnswer();
    audioElement.current.play();
  }

  if (!gameState.wordsToPlay.length && gameState.isLoadingPlayWords) {
    setGameEnd(true);
  }

  const keyHandler = (key: string) => {
    if (key === 'Enter') {
      audioElement.current.play();
    }
  };

  return (
    <div className={style.main} ref={fullscreenRef}>
      <GameMenu fullscreenRef={fullscreenRef} />
      <div className={style.game_main}>
        <div className={style.game_words}>
          <div
            className={style.question_wrapper}
            onClick={() => audioElement.current.play()}
            onKeyUp={({ key }) => keyHandler(key)}
            role="button"
            tabIndex={0}
          >
            <audio
              src={`${context.apiPath}${gameState.question.audio}`}
              ref={audioElement}
            >
              <track kind="captions" />
            </audio>
            <i className="fas fa-volume-up" />
          </div>
          <Answers
            setRightAnswerAction={actions.setRightAnswerAction}
            question={gameState.question.wordTranslate}
            wordsInButtons={gameState.wordsInButtons}
            setWrongAnswerAction={actions.setWrongAnswerAction}
          />
        </div>
      </div>
    </div>
  );
};
