import { StatsActionType, StatsTypes, StatsState } from '../../types';

const initialState: StatsState = {
  day: {
    learnedWords: 0,
    correctAnswers: 0,
  },
  allTime: {
    learnedWords: 0,
    correctAnswers: 0,
  },
  series: {
    puzzle: 0,
    sprint: 0,
    savanna: 0,
    audiocall: 0,
  },
  dayData: [],
  allData: [],
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
        day: {
          learnedWords:
            action.payload.learnedWordsToday || state.day.learnedWords,
          correctAnswers:
            action.payload.correctAnswersToday || state.day.correctAnswers,
        },
        allTime: {
          learnedWords:
            action.payload.learnedWords || state.allTime.learnedWords,
          correctAnswers:
            action.payload.correctAnswers || state.allTime.correctAnswers,
        },
        series: {
          puzzle:
            action.payload?.optional?.series?.puzzle || state.series.puzzle,
          sprint:
            action.payload?.optional?.series?.sprint || state.series.sprint,
          savanna:
            action.payload?.optional?.series?.savanna || state.series.savanna,
          audiocall:
            action.payload?.optional?.series?.audiocall ||
            state.series.audiocall,
        },
        dayData: action.payload.dayData,
        allData: action.payload.allData,
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
