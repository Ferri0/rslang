import React, { useEffect } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';

import { wordObjects } from './local-state';
import style from './Own-game.module.scss';

export const OwnGame = () => {
  const {
    currentSentence,
    currentTaskSentence,
    arrayOfTaskBlocks,
    arrayOfAnswerBlocks,
    answerCounter,
  } = useTypedSelector((state) => state.ownGame);
  const {
    setArrayOfAnswerBlock,
    setArrayOfTaskBlocks,
    setCurrentSentence,
    setCurrentTaskSentence,
    setAnswerCounter,
  } = useAction();

  let answerLastDiv: null | HTMLElement;

  // useEffect(() => {
  //   setCurrentSentence(wordObjects[0].textExampleTranslate);
  //   setCurrentTaskSentence(wordObjects[0].textExample);

  // }, []);

  useEffect(() => {
    if (answerCounter < wordObjects.length) {
      setCurrentSentence(wordObjects[answerCounter].textExampleTranslate);
      setCurrentTaskSentence(wordObjects[answerCounter].textExample);
      arrayOfAnswerBlocks.push([]);
      setArrayOfAnswerBlock(arrayOfAnswerBlocks);
      answerLastDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }, [answerCounter]);

  useEffect(() => {
    setArrayOfTaskBlocks(currentTaskSentence.split(' '));
  }, [currentTaskSentence]);

  const taskBlocks = arrayOfTaskBlocks.map((item: string, index: number) => (
    <div
      className={style.taskBlock}
      onClick={() => {
        arrayOfTaskBlocks.splice(index, 1);
        arrayOfAnswerBlocks[answerCounter].push(item);
        setArrayOfTaskBlocks(arrayOfTaskBlocks);
        setArrayOfAnswerBlock(arrayOfAnswerBlocks);
        if (arrayOfTaskBlocks.length < 1) {
          setAnswerCounter(answerCounter + 1);
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
  return (
    <div className={style.ownGameWrapper}>
      <div className={style.linkWrapper}>
        <Router>
          <Link to="/">Back to home</Link>
        </Router>
      </div>
      <div className={style.healthPointsWrapper}>
        This is health points wrapper
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
