import { AuthActionTypes, AuthState, AuthAction } from '../../types/auth-types';

const initialState: AuthState = {
  isShowAuth: false,
  isShowRegister: false,
  isAuthorized: false,
  currentUser: null,
  loading: false,
  error: null,
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
) => {
  switch (action.type) {
    case AuthActionTypes.SET_SHOW_AUTH: {
      return {
        ...state,
        isShowAuth: action.payload,
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

    default: {
      return {
        ...state,
      };
    }
  }
};
