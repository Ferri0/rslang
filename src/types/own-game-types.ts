export enum OwnGameActionTypes {
  SET_CURRENT_SENTENCE = 'SET_CURRENT_SENTENCE',
  SET_CURRENT_TASK_SENTENCE = 'SET_CURRENT_TASK_SENTENCE',
  SET_ARRAY_OF_TASK_WORDS = 'SET_ARRAY_OF_TASK_WORDS',
  SET_ARRAY_OF_TASK_BLOCKS ='SET_ARRAY_OF_TASK_BLOCKS',
  SET_ANSWER_CURRENT_WORD_INDEX = 'SET_ANSWER_CURRENT_WORD_INDEX',
  SET_ARRAY_OF_ANSWER_BLOCKS = 'SET_ARRAY_OF_ANSWER_BLOCKS',
  SET_ANSWER_COUNTER = 'SET_ANSWER_COUNTER',
  SET_HEALTH_POINTS = 'SET_HEALTH_POINTS',
  SET_AUDIO_SRC = 'SET_AUDIO_SRC'
} 

export interface OwnGameState {
    currentSentence: string,
    currentTaskSentence: string,
    arrayOfTaskWords: string[],
    arrayOfTaskBlocks: string[],
    currentWordIndex: number,
    arrayOfAnswerBlocks: [string[]],
    answerCounter: number,
    healthPoints: number[],
    audioSrc: string
}

export type OwnGameAction = setCurrentSentenceAction
|setCurrentTaskSentenceAction
|setArrayOfTaskWordsAction
|setArrayOfTaskBlocksAction
|setcurrentWordIndexAction
|setAnswerCounterAction
|setHealthPointsAction
|setArrayOfAnswerBlocksAction
|setAudioSrcAction;

interface setCurrentSentenceAction {
    type: OwnGameActionTypes.SET_CURRENT_SENTENCE;
    payload: string;
  }

interface setCurrentTaskSentenceAction {
    type: OwnGameActionTypes.SET_CURRENT_TASK_SENTENCE;
    payload: string;
  }

interface setArrayOfTaskWordsAction {
    type: OwnGameActionTypes.SET_ARRAY_OF_TASK_WORDS;
    payload: string[];
  }

interface setArrayOfTaskBlocksAction {
    type: OwnGameActionTypes.SET_ARRAY_OF_TASK_BLOCKS;
    payload: string[];
  }

interface setcurrentWordIndexAction {
    type: OwnGameActionTypes.SET_ANSWER_CURRENT_WORD_INDEX;
    payload: number;
  }

interface setArrayOfAnswerBlocksAction {
    type: OwnGameActionTypes.SET_ARRAY_OF_ANSWER_BLOCKS;
    payload: [string[]];
  }

interface setAnswerCounterAction {
    type: OwnGameActionTypes.SET_ANSWER_COUNTER;
    payload: number;
  }

interface setHealthPointsAction {
    type: OwnGameActionTypes.SET_HEALTH_POINTS;
    payload: number[];
  }

interface setAudioSrcAction {
    type: OwnGameActionTypes.SET_AUDIO_SRC;
    payload: string;
  }