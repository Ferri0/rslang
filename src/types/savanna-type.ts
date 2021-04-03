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
}

interface SetHeartLeftAtrin {
  type: SavannaActionTypes.SET_HEARTS_LEFT;
  payload: number;
}

interface RightAnswerAtion {
  type: SavannaActionTypes.SET_RIGHT_ANSWER;
  payload: boolean;
}

interface WrongAnswerAction {
  type: SavannaActionTypes.SET_WRONG_ANSWER;
  payload: boolean;
}

interface SetWordsToPlayAction {
  type: SavannaActionTypes.SET_WORDS_TO_PLAY;
  payload: Word[];
}

interface QuestionAction {
  type: SavannaActionTypes.SET_QUESTION;
  payload: Word;
}

interface SetButtonswersAction {
  type: SavannaActionTypes.SET_BUTTONS_WORDS;
  payload: string[];
}

interface ScrollAction {
  type: SavannaActionTypes.SET_SCROLL_BACKGROUND;
}

interface ResetScroll {
  type: SavannaActionTypes.RESET_SCROLL_BACKGROUND;
}

export interface SavannaState {
  hearts: number;
  rightAnswer: boolean;
  wrongAnswer: boolean;
  question:
    | {
        word: 'example';
        wordTranslate: 'example';
      }
    | Word;
  wordsToPlay: Word[];
  wordsInButtons: string[];
  scrollBg: { backgroundPositionY: string };
}

export type SavannaActions =
  | SetHeartLeftAtrin
  | RightAnswerAtion
  | WrongAnswerAction
  | SetWordsToPlayAction
  | QuestionAction
  | SetButtonswersAction
  | ScrollAction
  | ResetScroll;
