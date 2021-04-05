import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { ownGameReducer } from './own-game-reducer';
import { gameStatusReducer } from './game-status';

export const rootReducer = combineReducers({
  auth: authReducer,
  ownGame: ownGameReducer,
  gameStatus: gameStatusReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
