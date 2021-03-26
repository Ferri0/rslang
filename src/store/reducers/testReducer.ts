import { TestAction, TestActionTypes, TestState } from '../../types/test';

const initialState: TestState = {
  value: 0,
};

export const testReducer = (
  state = initialState,
  action: TestAction
): TestState => {
  switch (action.type) {
    case TestActionTypes.INCREMENT:
      return { ...state, value: state.value + action.payload };
    case TestActionTypes.DECREMENT:
      return { ...state, value: state.value - action.payload };
    case TestActionTypes.RESET:
      return { ...state, value: 0 };
    default:
      return state;
  }
};
