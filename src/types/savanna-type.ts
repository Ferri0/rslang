import { Word } from './words-type';

export enum SavannaActionTypes {
  SET_WORDS_TO_PLAY = 'SET_WORDS_TO_PLAY',
  SET_HEARTS_LEFT = 'SET_HEARTS_LEFT',
  SET_RIGHT_ANSWER = 'SET_RIGHT_ANSWER',
  SET_WRONG_ANSWER = 'SET_WRONG_ANSWER',
  SET_QUESTION = 'SET_QUESTION',
  SET_BUTTONS_WORDS = 'SET_BUTTONS_WORDS',
  SET_SCROLL_BACKGROUND = 'SET_SCROLL_BACKGROUND',
  RESET_SCROLL_BACKGROUND = 'RESET_SCROLL_BACKGROUND',
  ADD_RIGHT_WORD = 'ADD_RIGHT_WORD',
  ADD_WRONG_WORD = 'ADD_WRONG_WORD',
  RESET_STATISTICS_DATA = 'RESET_STATISTICS_DATA',
}

type SetHeartLeftAtrin = {
  type: SavannaActionTypes.SET_HEARTS_LEFT;
  payload: number;
};

type RightAnswerAtion = {
  type: SavannaActionTypes.SET_RIGHT_ANSWER;
  payload: boolean;
};

type WrongAnswerAction = {
  type: SavannaActionTypes.SET_WRONG_ANSWER;
  payload: boolean;
};

type SetWordsToPlayAction = {
  type: SavannaActionTypes.SET_WORDS_TO_PLAY;
  payload: Word[];
};

type QuestionAction = {
  type: SavannaActionTypes.SET_QUESTION;
  payload: Word;
};

type SetButtonswersAction = {
  type: SavannaActionTypes.SET_BUTTONS_WORDS;
  payload: string[];
};

type ScrollAction = {
  type: SavannaActionTypes.SET_SCROLL_BACKGROUND;
};

type ResetScroll = {
  type: SavannaActionTypes.RESET_SCROLL_BACKGROUND;
};

type resetStatisticsData = {
  type: SavannaActionTypes.RESET_STATISTICS_DATA;
};

export type IRightWord = {
  type: SavannaActionTypes.ADD_RIGHT_WORD;
  payload: Word;
};

export type IWrongWord = {
  type: SavannaActionTypes.ADD_WRONG_WORD;
  payload: Word;
};

export type SavannaState = {
  hearts: number;
  rightAnswer: boolean;
  wrongAnswer: boolean;
  question: Word;
  wordsToPlay: Word[];
  wordsInButtons: string[];
  scrollBg: { backgroundPositionY: string };
  statistics: {
    known: Word[];
    unknown: Word[];
  };
  isLoadingPlayWords: boolean;
};

export type SavannaActions =
  | SetHeartLeftAtrin
  | RightAnswerAtion
  | WrongAnswerAction
  | SetWordsToPlayAction
  | QuestionAction
  | SetButtonswersAction
  | ScrollAction
  | ResetScroll
  | resetStatisticsData
  | IRightWord
  | IWrongWord;
