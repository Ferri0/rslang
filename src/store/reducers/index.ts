import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { wordsReducer } from './words-reducer';
import { savannaState } from './savanna-state';

export const rootReducer = combineReducers({
  auth: authReducer,
  groupOfWords: wordsReducer,
  savannaState,
});

export type RootState = ReturnType<typeof rootReducer>;
