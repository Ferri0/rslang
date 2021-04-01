import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';

import style from './Own-game.module.scss';

export const OwnGame = () => {
  const { currentSentence, arrayOfTaskBlocks, arrayOfAnswerBlocks } = useTypedSelector((state) => state.ownGame);
  const {
    setArrayOfAnswerBlock
  } = useAction();
  const taskBlocks = arrayOfTaskBlocks.map((item: string) => {
    return (
      <div className = {style.taskBlock}
      onClick = {() => {
        arrayOfAnswerBlocks.push(item);
        setArrayOfAnswerBlock(arrayOfAnswerBlocks)}}>{item}</div>
    );
  })
  const answerBlocks = arrayOfAnswerBlocks.map((item: string) => {
    return (
      <div className = {style.taskBlock}>{item}</div>
    );
  })
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
      <div className={style.mainFieldWrapper}>{answerBlocks}</div>
      <div className={style.taskWrapper}>This is Task wrapper</div>
      <div className={style.taskBlocksWrapper}>{taskBlocks}</div>
    </div>
  );
};
