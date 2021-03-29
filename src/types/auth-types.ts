export enum AuthActionTypes {
  SET_SHOW_LOGIN = 'SET_SHOW_LOGIN',
  SET_SHOW_REGISTER = 'SET_SHOW_REGISTER',
  SET_AUTHORIZED = 'SET_AUTHORIZED',
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SET_CURRENT_USERID = 'SET_CURRENT_USERID',
  SET_TOKEN = 'SET_TOKEN',
  SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN',
}
export interface AuthState {
  isShowLogin: boolean;
  isShowRegister: boolean;
  isAuthorized: boolean;
  currentUser: null | string;
  token: null | string;
  refreshToken: null | string;
  currentUserId: null | string;
  loading: boolean;
  error: null | string;
}

export type AuthAction =
  | SetShowLoginAction
  | SetAuthorizedAction
  | SetRegisterAuthAction
  | SetCurrentUserAction
  | SetCurrentUserIdAction
  | SetTokenAction
  | SetRefreshTokenAction;

interface SetShowLoginAction {
  type: AuthActionTypes.SET_SHOW_LOGIN;
  payload: boolean;
}

interface SetAuthorizedAction {
  type: AuthActionTypes.SET_AUTHORIZED;
  payload: boolean;
}

interface SetRegisterAuthAction {
  type: AuthActionTypes.SET_SHOW_REGISTER;
  payload: boolean;
}

interface SetCurrentUserAction {
  type: AuthActionTypes.SET_CURRENT_USER;
  payload: string;
}

interface SetCurrentUserIdAction {
  type: AuthActionTypes.SET_CURRENT_USERID;
  payload: string;
}

interface SetTokenAction {
  type: AuthActionTypes.SET_TOKEN;
  payload: string;
}
interface SetRefreshTokenAction {
  type: AuthActionTypes.SET_REFRESH_TOKEN;
  payload: string;
}
