import { combineReducers } from 'redux';
import { testReducer } from './testReducer';

export const rootReducer = combineReducers({
  test: testReducer,
  // other reducers
});

export type RootState = ReturnType<typeof rootReducer>;
