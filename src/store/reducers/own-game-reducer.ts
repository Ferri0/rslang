import {
  OwnGameState,
  OwnGameActionTypes,
  OwnGameAction,
} from '../../types/own-game-types';

const initialState: OwnGameState = {
  currentSentence:
    'Человек не должен водить машину после того, как он выпил алкоголь',
  currentTaskSentence:
    'Человек не должен водить машину после того, как он выпил алкоголь',
  arrayOfTaskWords: [
    'Человек',
    'не',
    'должен',
    'водить',
    'машину',
    'после',
    'того',
    'как',
    'он',
    'выпил',
    'алкоголь',
  ],
  arrayOfTaskBlocks: [
    'Человек',
    'не',
    'должен',
    'водить',
    'машину',
    'после',
    'того',
    'как',
    'он',
    'выпил',
    'алкоголь',
  ],
  currentWordIndex: 0,
  arrayOfAnswerBlocks: [[]],
  answerCounter: 0,
  healthPoints: [1, 1, 1, 1, 1],
  audioSrc:
    'https://yaia-team-rslang-api.herokuapp.com/files/01_0002_example.mp3',
};

export const ownGameReducer = (
  state: OwnGameState = initialState,
  action: OwnGameAction
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  switch (action.type) {
    case OwnGameActionTypes.SET_CURRENT_SENTENCE: {
      return {
        ...state,
        currentSentence: action.payload,
      };
    }
    case OwnGameActionTypes.SET_CURRENT_TASK_SENTENCE: {
      return {
        ...state,
        currentTaskSentence: action.payload,
      };
    }
    case OwnGameActionTypes.SET_ARRAY_OF_TASK_WORDS: {
      return {
        ...state,
        arrayOfTaskWords: action.payload,
      };
    }
    case OwnGameActionTypes.SET_ARRAY_OF_TASK_BLOCKS: {
      return {
        ...state,
        arrayOfTaskBlocks: action.payload,
      };
    }
    case OwnGameActionTypes.SET_ARRAY_OF_ANSWER_BLOCKS: {
      return {
        ...state,
        arrayOfAnswerBlocks: action.payload,
      };
    }
    case OwnGameActionTypes.SET_ANSWER_COUNTER: {
      return {
        ...state,
        answerCounter: action.payload,
      };
    }
    case OwnGameActionTypes.SET_ANSWER_CURRENT_WORD_INDEX: {
      return {
        ...state,
        currentWordIndex: action.payload,
      };
    }
    case OwnGameActionTypes.SET_HEALTH_POINTS: {
      return {
        ...state,
        healthPoints: action.payload,
      };
    }
    case OwnGameActionTypes.SET_AUDIO_SRC: {
      return {
        ...state,
        audioSrc: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
