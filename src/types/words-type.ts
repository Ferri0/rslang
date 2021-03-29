import { AuthState } from './auth-types';

export enum WordsActionTypes {
  FETCH_WORDS_REQUEST = 'FETCH_WORDS_REQUEST',
  FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS',
  FETCH_WORDS_FAILUR = 'FETCH_WORDS_FAILUR',
}

interface Word {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id: string;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
}

export type Words = Array<Word>;

type wordsRequested = {
  type: WordsActionTypes.FETCH_WORDS_REQUEST;
};

type WordsLoadedAction = {
  type: WordsActionTypes.FETCH_WORDS_SUCCESS;
  payload: Words;
};

type WordsFetchError = {
  type: WordsActionTypes.FETCH_WORDS_FAILUR;
  payload: Error;
};

export type WordState = {
  words: Words;
  loading: boolean;
  error: null | boolean;
};

export interface RootState {
  auth: AuthState;
  words: WordState;
}

export type WordsAction = wordsRequested | WordsLoadedAction | WordsFetchError;
