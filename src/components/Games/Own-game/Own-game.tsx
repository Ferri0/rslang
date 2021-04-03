import React, { useEffect } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import {shuffleArray, wait} from './utils';
import { wordObjects } from './local-state';
import style from './Own-game.module.scss';

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
    audioSrc
  } = useTypedSelector((state) => state.ownGame);
  const {
    setArrayOfAnswerBlock,
    setArrayOfTaskBlocks,
    setArrayOfTaskWords,
    setCurrentSentence,
    setCurrentTaskSentence,
    setCurrentWordIndex,
    setAnswerCounter,
    setHealthPoints,
    setAudioSrc
  } = useAction();

  let answerLastDiv: null | HTMLElement;
  let audio: any;

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
    <div
      className={style.taskBlock}
      onMouseUp={() => {
        if (item === arrayOfTaskWords[currentWordIndex]) {
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
          setHealthPoints(healthPoints);
        }
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: item }} />
    </div>
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
  const healthPointsBlocks = healthPoints.map((item:number) => (
    <div className = {style.healthPointBlock}>{item}</div>
  )
  );
  const playAudio = (e:any) => {
    e.target.disabled = true;
    audio.play();
    wait(audio.duration).then(() => {
      e.target.disabled = false;
    });
  }
  return (
    <div className={style.ownGameWrapper}>
      <div className={style.ownGameHeaderWrapper}>
      <div className={style.linkWrapper}>
        <Router>
          <Link to="/">Back to home</Link>
        </Router>
      </div>
      <div className={style.healthPointsWrapper}>
       {healthPointsBlocks}
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
        <button className = {style.soundButton} onClick = {(e: any) => playAudio(e)}>Прослушать</button>
        <audio src={audioSrc}  ref={(el) => {
            audio = el;
          }}/>
      </div>
      <div className={style.taskBlocksWrapper}>{taskBlocks}</div>
    </div>
  );
};
