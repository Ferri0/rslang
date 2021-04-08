import {
  GameStatusActionTypes,
  GameStatusState,
  GameStatusAction,
} from '../../types/game-status-types';

const initialState: GameStatusState = {
  isWin: false,
  isLoose: false,
};

export const gameStatusReducer = (
  state: GameStatusState = initialState,
  action: GameStatusAction
) => {
  switch (action.type) {
    case GameStatusActionTypes.SET_WIN: {
      return {
        ...state,
        isWin: action.payload,
      };
    }
    case GameStatusActionTypes.SET_LOOSE: {
      return {
        ...state,
        isLoose: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
