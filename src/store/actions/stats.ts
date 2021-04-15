import { Dispatch } from 'redux';
import {
  getAllUserWords,
  getUserStats,
  getWordsOfCategoryByPage,
} from '../../service';
import { StatsTypes, StatsActionType } from '../../types';
import {
  formAllChartData,
  formDayChartData,
  getCorrectAnswers,
  getCorrectAnswersToday,
  getLearnedWordsToday,
} from '../../utils/stats';

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
    const allWordsResponse = await getAllUserWords(userId, token);
    const statsResponse = await getUserStats(userId, token);
    const allWords = await allWordsResponse.json();
    const stats = await statsResponse.json();
    const learningWords = await getWordsOfCategoryByPage(
      userId,
      token,
      'learning',
      1
    );
    const difficultWords = await getWordsOfCategoryByPage(
      userId,
      token,
      'difficult',
      1
    );
    const deletedWords = await getWordsOfCategoryByPage(
      userId,
      token,
      'deleted',
      1
    );
    stats.learnedWordsToday = getLearnedWordsToday(allWords);
    stats.correctAnswersToday = getCorrectAnswersToday(allWords);
    stats.correctAnswers = getCorrectAnswers(allWords);
    stats.dayData = formDayChartData(allWords);
    stats.allData = formAllChartData(allWords);
    stats.learningWords = learningWords.count;
    stats.difficultWords = difficultWords.count;
    stats.deletedWords = deletedWords.count;
    dispatch(fetchStatsSuccess(stats));
  } catch (e) {
    dispatch(fetchStatsFailure());
  }
};
