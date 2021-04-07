import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { wordsReducer } from './words-reducer';
import { statsReducer } from './stats-reducer';
import { savannaState } from './savanna-state';

export const rootReducer = combineReducers({
  auth: authReducer,
  stats: statsReducer,
  groupOfWords: wordsReducer,
  savannaState,
});

export type RootState = ReturnType<typeof rootReducer>;
