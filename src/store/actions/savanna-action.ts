import { SavannaActions, SavannaActionTypes, Word } from '../../types';

export const setHearts = (value: number): SavannaActions => ({
  type: SavannaActionTypes.SET_HEARTS_LEFT,
  payload: value,
});

export const setRightAnswerAction = (value: boolean): SavannaActions => ({
  type: SavannaActionTypes.SET_RIGHT_ANSWER,
  payload: value,
});

export const setWordsToPlayAction = (value: Word[]): SavannaActions => ({
  type: SavannaActionTypes.SET_WORDS_TO_PLAY,
  payload: value,
});

export const questionAction = (value: Word): SavannaActions => ({
  type: SavannaActionTypes.SET_QUESTION,
  payload: value,
});

export const setButtonsAction = (value: string[]): SavannaActions => ({
  type: SavannaActionTypes.SET_BUTTONS_WORDS,
  payload: value,
});
