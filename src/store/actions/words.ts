import { Dispatch } from 'react';
import {
  WordsActionTypes,
  Word,
  WordsAction,
  ServiceWordsType,
} from '../../types';

export const wordsLoaded = (words: Word[]): WordsAction => ({
  type: WordsActionTypes.FETCH_WORDS_SUCCESS,
  payload: words,
});

export const wordsFetchError = (error: Error): WordsAction => ({
  type: WordsActionTypes.FETCH_WORDS_FAILURE,
  payload: error,
});

export const fetchWords = (
  wordsService: ServiceWordsType,
  group: number,
  page: number
) => async (dispatch: Dispatch<WordsAction>): Promise<void> => {
  try {
    dispatch({ type: WordsActionTypes.FETCH_WORDS_REQUEST });
    const response = await wordsService.getWords(group, page);
    dispatch(wordsLoaded(response));
  } catch (error) {
    dispatch(wordsFetchError(error));
  }
};
