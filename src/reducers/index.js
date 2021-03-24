const reducer = (state, action) => {
  if (!state) {
    return {
      isShowAuth: true,
      isAuthorized: false,
      currentUser: null,
    };
  }

  switch (action.type) {
    case 'SET_SHOW_AUTH': {
      return {
        ...state,
        isShowAuth: action.payload,
      };
    }

    case 'SET_AUTHORIZED': {
      return {
        ...state,
        isAuthorized: action.payload,
      };
    }

    case 'SET_CURRENT_USER': {
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

export default reducer;
