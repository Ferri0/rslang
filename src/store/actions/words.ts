import { Dispatch } from 'react';
import {
  WordsActionTypes,
  Words,
  WordsAction,
  ServiceWordsType,
} from '../../types';

const wordsLoaded = (words: Words): WordsAction => ({
  type: WordsActionTypes.FETCH_WORDS_SUCCESS,
  payload: words,
});

const wordsFetchError = (error: Error): WordsAction => ({
  type: WordsActionTypes.FETCH_WORDS_FAILUR,
  payload: error,
});

export const fetchWords = (
  wordsService: ServiceWordsType,
  group: string
) => async (dispatch: Dispatch<WordsAction>): Promise<void> => {
  try {
    dispatch({ type: WordsActionTypes.FETCH_WORDS_REQUEST });
    const response = await wordsService.getWords(group);
    dispatch(wordsLoaded(response));
  } catch (error) {
    dispatch(wordsFetchError(error));
  }
};

export { wordsLoaded, wordsFetchError };
