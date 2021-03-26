import { AuthActionTypes } from '../../types/auth-types';

const setShowAuth = (value) => ({
  type: AuthActionTypes.SET_SHOW_AUTH,
  payload: value,
});

const setAuthorized = (value) => ({
  type: AuthActionTypes.SET_AUTHORIZED,
  payload: value,
});

const setCurrentUser = (value) => ({
  type: AuthActionTypes.SET_CURRENT_USER,
  payload: value,
});

export { setShowAuth, setAuthorized, setCurrentUser };
