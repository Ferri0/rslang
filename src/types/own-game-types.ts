export interface OwnGameState {
    currentSentence: string,
    arrayOfTaskBlocks: string[],
    arrayOfAnswerBlocks: string[]
}

export enum OwnGameActionTypes {
    SET_CURRENT_SENTENCE = 'SET_CURRENT_SENTENCE',
    SET_ARRAY_OF_TASK_BLOCKS ='SET_ARRAY_OF_TASK_BLOCKS',
    SET_ARRAY_OF_ANSWER_BLOCKS = 'SET_ARRAY_OF_ANSWER_BLOCKS'
} 

export type OwnGameAction = setCurrentSentenceAction
|setArrayOfTaskBlocksAction
|setArrayOfAnswerBlocksAction;

interface setCurrentSentenceAction {
    type: OwnGameActionTypes.SET_CURRENT_SENTENCE;
    payload: string;
  }

interface setArrayOfTaskBlocksAction {
    type: OwnGameActionTypes.SET_ARRAY_OF_TASK_BLOCKS;
    payload: string[];
  }

interface setArrayOfAnswerBlocksAction {
    type: OwnGameActionTypes.SET_ARRAY_OF_ANSWER_BLOCKS;
    payload: string[];
  }