import {
  WordsActionTypes,
  WordState,
  WordsAction,
  RootState,
} from '../../types';

const initialState: WordState = {
  words: [],
  loading: false,
  error: null,
};

export const wordsReducer = (
  state: WordState = initialState,
  action: WordsAction
) => {
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
        error: false,
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
