import { Word } from './words-type';

export enum SavannaActionTypes {
  SET_WORDS_TO_PLAY = 'SET_WORDS_TO_PLAY',
  SET_HEARTS_LEFT = 'SET_HEARTS_LEFT',
  SET_RIGHT_ANSWER = 'SET_RIGHT_ANSWER',
  SET_QUESTION = 'SET_QUESTION',
  SET_BUTTONS_WORDS = 'SET_BUTTONS_WORDS',
}

interface SetHeartLeftAtrin {
  type: SavannaActionTypes.SET_HEARTS_LEFT;
  payload: number;
}

interface RightAnswerAtion {
  type: SavannaActionTypes.SET_RIGHT_ANSWER;
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

export interface SavannaState {
  hearts: number;
  rightAnswer: boolean;
  question:
    | {
        word: 'example';
        wordTranslate: 'example';
      }
    | Word;
  wordsToPlay: Word[];
  wordsInButtons: string[];
}

export type SavannaActions =
  | SetHeartLeftAtrin
  | RightAnswerAtion
  | SetWordsToPlayAction
  | QuestionAction
  | SetButtonswersAction;
