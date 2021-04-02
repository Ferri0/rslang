import { SavannaActionTypes, SavannaState, SavannaActions } from '../../types';

const initialState: SavannaState = {
  hearts: 5,
  rightAnswer: false,
  question: {
    word: 'example',
    wordTranslate: 'example',
  },
  wordsToPlay: [],
  wordsInButtons: [],
};

export const savannaState = (
  state: SavannaState = initialState,
  action: SavannaActions
): SavannaState => {
  switch (action.type) {
    case SavannaActionTypes.SET_HEARTS_LEFT: {
      return {
        ...state,
        hearts: action.payload,
      };
    }

    case SavannaActionTypes.SET_RIGHT_ANSWER: {
      return {
        ...state,
        rightAnswer: action.payload,
      };
    }

    case SavannaActionTypes.SET_WORDS_TO_PLAY: {
      return {
        ...state,
        wordsToPlay: action.payload,
      };
    }

    case SavannaActionTypes.SET_QUESTION: {
      return {
        ...state,
        question: action.payload,
      };
    }

    case SavannaActionTypes.SET_BUTTONS_WORDS: {
      return {
        ...state,
        wordsInButtons: action.payload,
      };
    }

    default:
      return state;
  }
};
