import { AuthActionTypes, AuthAction } from '../../types/auth-types';

const setShowLogin = (value: boolean): AuthAction => ({
  type: AuthActionTypes.SET_SHOW_LOGIN,
  payload: value,
});

const setShowRegister = (value: boolean): AuthAction => ({
  type: AuthActionTypes.SET_SHOW_REGISTER,
  payload: value,
});

const setAuthorized = (value: boolean): AuthAction => ({
  type: AuthActionTypes.SET_AUTHORIZED,
  payload: value,
});

const setCurrentUser = (value: null | string) => ({
  type: AuthActionTypes.SET_CURRENT_USER,
  payload: value,
});

export { setShowLogin, setShowRegister, setAuthorized, setCurrentUser };
