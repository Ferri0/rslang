export interface StatsState {
  value: any;
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
