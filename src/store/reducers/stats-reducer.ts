import { StatsActionType, StatsTypes, StatsState } from '../../types';

const initialState: StatsState = {
  value: 0,
  loading: false,
  error: null,
};

export const statsReducer = (
  state = initialState,
  action: StatsActionType
): StatsState => {
  switch (action.type) {
    case StatsTypes.FETCH_STATS_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case StatsTypes.FETCH_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        value: action.payload,
      };

    case StatsTypes.FETCH_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
