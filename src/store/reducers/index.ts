import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { ownGameReducer } from './own-game-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  ownGame: ownGameReducer
});

export type RootState = ReturnType<typeof rootReducer>;
