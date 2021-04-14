import { Dispatch } from 'redux';
import { getUserStats } from '../../service';
import { StatsTypes, StatsActionType } from '../../types';

const fetchStatsStarted = (): StatsActionType => ({
  type: StatsTypes.FETCH_STATS_STARTED,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchStatsSuccess = (data: any): StatsActionType => ({
  type: StatsTypes.FETCH_STATS_SUCCESS,
  payload: data,
});

const fetchStatsFailure = (): StatsActionType => ({
  type: StatsTypes.FETCH_STATS_FAILURE,
  payload: 'Fetch stats error',
});

export const fetchStats = (userId: string, token: string) => async (
  dispatch: Dispatch<StatsActionType>
): Promise<void> => {
  try {
    dispatch(fetchStatsStarted());
    const response = await getUserStats(userId, token);
    const json = await response.json();
    dispatch(fetchStatsSuccess(json));
  } catch (e) {
    dispatch(fetchStatsFailure());
  }
};
