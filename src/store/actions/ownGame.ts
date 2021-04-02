import {OwnGameActionTypes, OwnGameAction} from '../../types/own-game-types';

const setCurrentSentence = (value: string): OwnGameAction => ({
    type: OwnGameActionTypes.SET_CURRENT_SENTENCE,
    payload: value,
  });

  const setCurrentTaskSentence = (value: string): OwnGameAction => ({
    type: OwnGameActionTypes.SET_CURRENT_TASK_SENTENCE,
    payload: value,
  });

const setArrayOfAnswerBlock = (value: [string[]]): OwnGameAction => ({
    type: OwnGameActionTypes.SET_ARRAY_OF_ANSWER_BLOCKS,
    payload: value,
  });

const setArrayOfTaskBlocks = (value: string[]): OwnGameAction => ({
    type: OwnGameActionTypes.SET_ARRAY_OF_TASK_BLOCKS,
    payload: value,
  });

const setAnswerCounter = (value: number): OwnGameAction => ({
    type: OwnGameActionTypes.SET_ANSWER_COUNTER,
    payload: value,
  });

  export {setCurrentSentence, 
    setCurrentTaskSentence, 
    setArrayOfAnswerBlock, 
    setArrayOfTaskBlocks, 
    setAnswerCounter}