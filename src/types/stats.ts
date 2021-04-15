import { Word } from './words-type';

export type GameType = 'puzzle' | 'sprint' | 'savanna' | 'audiocall';
export type UserStatsType = {
  learnedWords: number;
  optional: {
    series: {
      puzzle: number;
      sprint: number;
      savanna: number;
      audiocall: number;
    };
  };
};

export interface StatsState {
  day: {
    learnedWords: number;
    correctAnswers: number;
  };
  allTime: {
    learnedWords: number;
    correctAnswers: number;
  };
  series: {
    puzzle: number;
    sprint: number;
    savanna: number;
    audiocall: number;
  };
  dayData: Array<Word>;
  allData: Array<Word>;
  words: {
    learning: number;
    difficult: number;
    deleted: number;
  };
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
