export enum GameStatusActionTypes {
  SET_WIN = 'SET_WIN',
  SET_LOOSE = 'SET_LOOSE',
}

export interface GameStatusState {
  isWin: boolean;
  isLoose: boolean;
}

export type GameStatusAction = SetWinAction | SetLooseAction;

interface SetWinAction {
  type: GameStatusActionTypes.SET_WIN;
  payload: boolean;
}

interface SetLooseAction {
  type: GameStatusActionTypes.SET_LOOSE;
  payload: boolean;
}
