import { SavannaActions, SavannaActionTypes, Word } from '../../types';

export const setHearts = (value: number): SavannaActions => ({
  type: SavannaActionTypes.SET_HEARTS_LEFT,
  payload: value,
});

export const setRightAnswerAction = (value: boolean): SavannaActions => ({
  type: SavannaActionTypes.SET_RIGHT_ANSWER,
  payload: value,
});

export const setWrongAnswerAction = (value: boolean): SavannaActions => ({
  type: SavannaActionTypes.SET_WRONG_ANSWER,
  payload: value,
});

export const setWordsToPlayAction = (value: Word[]): SavannaActions => ({
  type: SavannaActionTypes.SET_WORDS_TO_PLAY,
  payload: value,
});

export const setQuestionAction = (value: Word): SavannaActions => ({
  type: SavannaActionTypes.SET_QUESTION,
  payload: value,
});

export const setButtonsAction = (value: string[]): SavannaActions => ({
  type: SavannaActionTypes.SET_BUTTONS_WORDS,
  payload: value,
});

export const setScrollToTop = (): SavannaActions => ({
  type: SavannaActionTypes.SET_SCROLL_BACKGROUND,
});

export const resetScrollBackground = (): SavannaActions => ({
  type: SavannaActionTypes.RESET_SCROLL_BACKGROUND,
});

export const addRightWordToStatics = (value: Word): SavannaActions => ({
  type: SavannaActionTypes.ADD_RIGHT_WORD,
  payload: value,
});

export const addWrongWordToStatics = (value: Word): SavannaActions => ({
  type: SavannaActionTypes.ADD_WRONG_WORD,
  payload: value,
});
