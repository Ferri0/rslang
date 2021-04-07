import { WordsActionTypes, WordState, WordsAction } from '../../types';

const initialState: WordState = {
  words: [],
  loading: false,
  error: null,
};

export const wordsReducer = (
  state: WordState = initialState,
  action: WordsAction
): WordState => {
  switch (action.type) {
    case WordsActionTypes.FETCH_WORDS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case WordsActionTypes.FETCH_WORDS_SUCCESS: {
      return {
        ...state,
        words: action.payload,
        loading: false,
      };
    }

    case WordsActionTypes.FETCH_WORDS_FAILUR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
