export interface TestState {
  value: number;
}

export enum TestActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
}

export interface IncrementAction {
  type: TestActionTypes.INCREMENT;
  payload: number;
}
export interface DecrementAction {
  type: TestActionTypes.DECREMENT;
  payload: number;
}
export interface ResetAction {
  type: TestActionTypes.RESET;
}

export type TestAction = IncrementAction | DecrementAction | ResetAction;
