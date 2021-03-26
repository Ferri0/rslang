import { Dispatch } from 'redux';
import {
  IncrementAction,
  DecrementAction,
  ResetAction,
  TestActionTypes,
} from '../../types/test';

export const increment = (value: number) => (
  dispatch: Dispatch<IncrementAction>
) => {
  return dispatch({ type: TestActionTypes.INCREMENT, payload: value });
};

export const decrement = (value: number) => (
  dispatch: Dispatch<DecrementAction>
) => {
  return dispatch({ type: TestActionTypes.DECREMENT, payload: value });
};

export const reset = () => (dispatch: Dispatch<ResetAction>) => {
  return dispatch({ type: TestActionTypes.RESET });
};
