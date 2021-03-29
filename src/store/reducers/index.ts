import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { wordsReducer } from './words-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  groupOfWords: wordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
