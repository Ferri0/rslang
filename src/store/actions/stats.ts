import { Dispatch } from 'redux';
import { StatsTypes, StatsActionType } from '../../types';

const fetchStatsStarted = (): StatsActionType => ({
  type: StatsTypes.FETCH_STATS_STARTED,
});

const fetchStatsSuccess = (data: any): StatsActionType => ({
  type: StatsTypes.FETCH_STATS_SUCCESS,
  payload: data,
});

const fetchStatsFailure = (): StatsActionType => ({
  type: StatsTypes.FETCH_STATS_FAILURE,
  payload: 'Fetch stats error',
});

export const fetchStats = () => async (
  dispatch: Dispatch<StatsActionType>
): Promise<void> => {
  try {
    dispatch(fetchStatsStarted());
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    dispatch(fetchStatsSuccess(json));
  } catch (e) {
    dispatch(fetchStatsFailure());
  }
};
