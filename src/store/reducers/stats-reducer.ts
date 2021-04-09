import { StatsActionType, StatsTypes, StatsState } from '../../types';

const initialState: StatsState = {
  day: {
    learnedWords: 0, // count
    correctAnswers: 0, // percentage
  },
  allTime: {
    learnedWords: 0, // count
    correctAnswers: 0, // percentage
  },
  series: {
    puzzle: 0,
    sprint: 0,
    savanna: 0,
    audiocall: 0,
  },
  wordsData: [],
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
        wordsData: action.payload,
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
