import { WordsActionTypes, Words, WordsAction } from '../../types';

const wordsRequested = (): WordsAction => ({
  type: WordsActionTypes.FETCH_WORDS_REQUEST,
});

const wordsLoaded = (words: Words): WordsAction => ({
  type: WordsActionTypes.FETCH_WORDS_SUCCESS,
  payload: words,
});

const wordsFetchError = (error: Error): WordsAction => ({
  type: WordsActionTypes.FETCH_WORDS_FAILUR,
  payload: error,
});

export { wordsRequested, wordsLoaded, wordsFetchError };
