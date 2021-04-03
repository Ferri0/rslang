import { SavannaActionTypes, SavannaState, SavannaActions } from '../../types';

const initialState: SavannaState = {
  hearts: 5,
  rightAnswer: false,
  wrongAnswer: false,
  question: {
    word: 'example',
    wordTranslate: 'example',
  },
  wordsToPlay: [],
  wordsInButtons: [],
  scrollBg: { backgroundPositionY: '0%' },
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

    case SavannaActionTypes.SET_WRONG_ANSWER: {
      return {
        ...state,
        wrongAnswer: action.payload,
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

    case SavannaActionTypes.SET_SCROLL_BACKGROUND: {
      const newState = {
        backgroundPositionY: `${
          parseInt(state.scrollBg.backgroundPositionY, 10) - 5
        }%`,
      };
      return {
        ...state,
        scrollBg: newState,
      };
    }

    case SavannaActionTypes.RESET_SCROLL_BACKGROUND: {
      const newState = { backgroundPositionY: '100%' };
      return {
        ...state,
        scrollBg: newState,
      };
    }

    default:
      return state;
  }
};
