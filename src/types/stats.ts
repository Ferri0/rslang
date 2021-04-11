import { Word } from './words-type';

export interface StatsState {
  day: {
    learnedWords: number; // count
    correctAnswers: number; // percentage
  };
  allTime: {
    learnedWords: number; // count
    correctAnswers: number; // percentage
  };
  series: {
    puzzle: number;
    sprint: number;
    savanna: number;
    audiocall: number;
  };
  wordsData: Array<Word>;
  loading: boolean;
  error: string | null;
}

export enum StatsTypes {
  FETCH_STATS_STARTED = 'FETCH_STATS_STARTED',
  FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS',
  FETCH_STATS_FAILURE = 'FETCH_STATS_FAILURE',
}

export type FetchStatsStartedType = {
  type: StatsTypes.FETCH_STATS_STARTED;
};
export type FetchStatsSuccessType = {
  type: StatsTypes.FETCH_STATS_SUCCESS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};
export type FetchStatsFailureType = {
  type: StatsTypes.FETCH_STATS_FAILURE;
  payload: string;
};

export type StatsActionType =
  | FetchStatsStartedType
  | FetchStatsSuccessType
  | FetchStatsFailureType;
