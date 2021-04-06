import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { ownGameReducer } from './own-game-reducer';
import { gameStatusReducer } from './game-status';
import { wordsReducer } from './words-reducer';
import { savannaState } from './savanna-state';

export const rootReducer = combineReducers({
  auth: authReducer,
  ownGame: ownGameReducer,
  gameStatus: gameStatusReducer,
  groupOfWords: wordsReducer,
  savannaState,
});

export type RootState = ReturnType<typeof rootReducer>;
