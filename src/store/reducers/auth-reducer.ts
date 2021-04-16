import { AuthActionTypes, AuthState, AuthAction } from '../../types/auth-types';

const initialState: AuthState = {
  isShowLogin: false,
  isShowRegister: false,
  isAuthorized: false,
  currentUser: null,
  token: null,
  refreshToken: null,
  currentUserId: null,
  loading: false,
  error: null,
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_SHOW_LOGIN: {
      return {
        ...state,
        isShowLogin: action.payload,
      };
    }

    case AuthActionTypes.SET_SHOW_REGISTER: {
      return {
        ...state,
        isShowRegister: action.payload,
      };
    }

    case AuthActionTypes.SET_AUTHORIZED: {
      return {
        ...state,
        isAuthorized: action.payload,
      };
    }

    case AuthActionTypes.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }

    case AuthActionTypes.SET_CURRENT_USERID: {
      return {
        ...state,
        currentUserId: action.payload,
      };
    }

    case AuthActionTypes.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }

    case AuthActionTypes.SET_REFRESH_TOKEN: {
      return {
        ...state,
        refreshToken: action.payload,
      };
    }

    case AuthActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
