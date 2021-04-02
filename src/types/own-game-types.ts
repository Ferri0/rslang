export enum OwnGameActionTypes {
  SET_CURRENT_SENTENCE = 'SET_CURRENT_SENTENCE',
  SET_CURRENT_TASK_SENTENCE = 'SET_CURRENT_TASK_SENTENCE',
  SET_ARRAY_OF_TASK_BLOCKS ='SET_ARRAY_OF_TASK_BLOCKS',
  SET_ARRAY_OF_ANSWER_BLOCKS = 'SET_ARRAY_OF_ANSWER_BLOCKS',
  SET_ANSWER_COUNTER = 'SET_ANSWER_COUNTER'
} 

export interface OwnGameState {
    currentSentence: string,
    currentTaskSentence: string,
    arrayOfTaskBlocks: string[],
    arrayOfAnswerBlocks: [string[]],
    answerCounter: number
}

export type OwnGameAction = setCurrentSentenceAction
|setCurrentTaskSentenceAction
|setArrayOfTaskBlocksAction
|setAnswerCounterAction
|setArrayOfAnswerBlocksAction;

interface setCurrentSentenceAction {
    type: OwnGameActionTypes.SET_CURRENT_SENTENCE;
    payload: string;
  }

interface setCurrentTaskSentenceAction {
    type: OwnGameActionTypes.SET_CURRENT_TASK_SENTENCE;
    payload: string;
  }

interface setArrayOfTaskBlocksAction {
    type: OwnGameActionTypes.SET_ARRAY_OF_TASK_BLOCKS;
    payload: string[];
  }

interface setArrayOfAnswerBlocksAction {
    type: OwnGameActionTypes.SET_ARRAY_OF_ANSWER_BLOCKS;
    payload: [string[]];
  }

interface setAnswerCounterAction {
    type: OwnGameActionTypes.SET_ANSWER_COUNTER;
    payload: number;
  }