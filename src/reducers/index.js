const reducer = (state, action) => {
  switch (action.type) {
    case 'SOME_ACTION': {
      return {
        ...state,
      };
    }

    case 'ANOTHER_ACTION': {
      return {
        ...state,
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
