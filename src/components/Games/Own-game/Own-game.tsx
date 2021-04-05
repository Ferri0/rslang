import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import { shuffleArray, wait } from './utils';
import { wordObjects } from './local-state';
import { LoosePage } from '../../pages/Loose';
import style from './Own-game.module.scss';
import { any } from 'prop-types';

export const OwnGame = () => {
  const {
    currentSentence,
    currentTaskSentence,
    arrayOfTaskBlocks,
    arrayOfTaskWords,
    currentWordIndex,
    arrayOfAnswerBlocks,
    answerCounter,
    healthPoints,
    audioSrc,
  } = useTypedSelector((state) => state.ownGame);
  const { isWin, isLoose } = useTypedSelector((state) => state.gameStatus);
  const {
    setArrayOfAnswerBlock,
    setArrayOfTaskBlocks,
    setArrayOfTaskWords,
    setCurrentSentence,
    setCurrentTaskSentence,
    setCurrentWordIndex,
    setAnswerCounter,
    setHealthPoints,
    setAudioSrc,
    setWin,
    setLoose,
  } = useAction();

  let answerLastDiv: null | HTMLElement;
  let audio: any;
  let mistake: any;
  let loose: any;

  useEffect(() => {
    if (answerCounter < wordObjects.length) {
      setCurrentSentence(wordObjects[answerCounter].textExampleTranslate);
      setCurrentTaskSentence(wordObjects[answerCounter].textExample);
      arrayOfAnswerBlocks.push([]);
      setArrayOfAnswerBlock(arrayOfAnswerBlocks);
      setCurrentWordIndex(0);
      setAudioSrc(wordObjects[answerCounter].audioExample);
      answerLastDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }, [answerCounter]);

  useEffect(() => {
    setArrayOfTaskWords(currentTaskSentence.split(' '));
  }, [currentTaskSentence]);

  useEffect(() => {
    setArrayOfTaskBlocks(shuffleArray(arrayOfTaskWords));
  }, [arrayOfTaskWords]);

  const taskBlocks = arrayOfTaskBlocks.map((item: string, index: number) => (
    <span
      dangerouslySetInnerHTML={{ __html: item }}
      className={style.taskBlock}
      onMouseDown={(e: any) => {
        if (item === arrayOfTaskWords[currentWordIndex]) {
          e.target.className = [style.taskBlock, style.taskBlockGreen].join(
            ' '
          );
        } else {
          e.target.className = [style.taskBlock, style.taskBlockRed].join(' ');
        }
      }}
      onMouseUp={(e: any) => {
        if (item === arrayOfTaskWords[currentWordIndex]) {
          e.target.className = style.taskBlock;
          arrayOfTaskBlocks.splice(index, 1);
          arrayOfAnswerBlocks[answerCounter].push(item);
          setArrayOfTaskBlocks(arrayOfTaskBlocks);
          setArrayOfAnswerBlock(arrayOfAnswerBlocks);
          setCurrentWordIndex(currentWordIndex + 1);
          if (arrayOfTaskBlocks.length < 1) {
            setAnswerCounter(answerCounter + 1);
          }
        } else {
          healthPoints.pop();
          if (healthPoints.length < 1) {
            setLoose(true);
            loose.play();
          } else {
            mistake.play();
            setHealthPoints(healthPoints);
            e.target.className = style.taskBlock;
          }
        }
      }}
    />
  ));
  const answerBlocks = arrayOfAnswerBlocks.map((answerItem: string[]) => (
    <div className={style.answerBlocksWrapper}>
      {answerItem.map((blockItem) => (
        <div className={style.taskBlock}>
          <span dangerouslySetInnerHTML={{ __html: blockItem }} />
        </div>
      ))}
    </div>
  ));
  const healthPointsBlocks = healthPoints.map((item: number) => (
    <div className={style.healthPointBlock}></div>
  ));
  const playAudio = (e: any) => {
    e.target.disabled = true;
    audio.play();
    wait(audio.duration).then(() => {
      e.target.disabled = false;
    });
  };
  return (
    <div className={style.ownGameWrapper}>
      <LoosePage />
      <div className={style.ownGameHeaderWrapper}>
        <div className={style.linkWrapper}>
          <Link
            className={[style.btn, style.btn_home].join(' ')}
            to="/dashboard"
          />
        </div>
        <div className={style.healthPointsWrapper}>
          {healthPointsBlocks}
          <audio
            src={'../../../assets/sounds/mistake.mp3'}
            ref={(el) => {
              mistake = el;
            }}
          />
          <audio
            src={'../../../assets/sounds/loose.mp3'}
            ref={(el) => {
              loose = el;
            }}
          />
        </div>
      </div>
      <div className={style.mainFieldWrapper}>
        {answerBlocks}
        <div
          ref={(el) => {
            answerLastDiv = el;
          }}
        ></div>
      </div>
      <div className={style.taskWrapper}>
        {currentSentence}
        <button
          className={style.playSoundBtn}
          type="button"
          onClick={(e: any) => playAudio(e)}
        />
        <audio
          src={audioSrc}
          ref={(el) => {
            audio = el;
          }}
        />
      </div>
      <div className={style.taskBlocksWrapper}>{taskBlocks}</div>
    </div>
  );
};
