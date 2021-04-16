import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { ownGameReducer } from './own-game-reducer';
import { gameStatusReducer } from './game-status';
import { wordsReducer } from './words-reducer';
import { statsReducer } from './stats-reducer';
import { gameStateReducer } from './game-state-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  stats: statsReducer,
  ownGame: ownGameReducer,
  gameStatus: gameStatusReducer,
  groupOfWords: wordsReducer,
  gameState: gameStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
