import {
  GameStatusActionTypes,
  GameStatusAction,
} from '../../types/game-status-types';

const setWin = (value: boolean): GameStatusAction => ({
  type: GameStatusActionTypes.SET_WIN,
  payload: value,
});

const setLoose = (value: boolean): GameStatusAction => ({
  type: GameStatusActionTypes.SET_LOOSE,
  payload: value,
});

export { setWin, setLoose };
