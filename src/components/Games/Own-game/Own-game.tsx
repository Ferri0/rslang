import React, { useEffect } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import {shuffleArray} from './utils';
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
    healthPoints
  } = useTypedSelector((state) => state.ownGame);
  const {
    setArrayOfAnswerBlock,
    setArrayOfTaskBlocks,
    setArrayOfTaskWords,
    setCurrentSentence,
    setCurrentTaskSentence,
    setCurrentWordIndex,
    setAnswerCounter,
    setHealthPoints
  } = useAction();

  let answerLastDiv: null | HTMLElement;

  useEffect(() => {
    if (answerCounter < wordObjects.length) {
      setCurrentSentence(wordObjects[answerCounter].textExampleTranslate);
      setCurrentTaskSentence(wordObjects[answerCounter].textExample);
      arrayOfAnswerBlocks.push([]);
      setArrayOfAnswerBlock(arrayOfAnswerBlocks);
      setCurrentWordIndex(0);
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
      <div className={style.taskWrapper}>{currentSentence}</div>
      <div className={style.taskBlocksWrapper}>{taskBlocks}</div>
    </div>
  );
};
