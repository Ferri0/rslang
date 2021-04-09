export enum WordsActionTypes {
  FETCH_WORDS_REQUEST = 'FETCH_WORDS_REQUEST',
  FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS',
  FETCH_WORDS_FAILUR = 'FETCH_WORDS_FAILUR',
}

export interface Word {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id: string;
  _id?: string;
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

type wordsRequested = {
  type: WordsActionTypes.FETCH_WORDS_REQUEST;
};

type WordsLoadedAction = {
  type: WordsActionTypes.FETCH_WORDS_SUCCESS;
  payload: Word[];
};

type WordsFetchError = {
  type: WordsActionTypes.FETCH_WORDS_FAILUR;
  payload: Error;
};

export type WordState = {
  words: Word[];
  loading: boolean;
  error: null | Error;
};

export type WordsAction = wordsRequested | WordsLoadedAction | WordsFetchError;
