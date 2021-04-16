import { UserStatsType, GameType } from '../types/stats';
import { AnswerType } from '../types/words';
import { getAllUserWords } from './User-words-service';

export const getUserStats = async (
  userId: string,
  token: string
): Promise<Response> => {
  const response = await fetch(
    `https://yaia-team-rslang-api.herokuapp.com/users/${userId}/statistics`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  return response;
};

const putUserStats = async (
  userId: string,
  token: string,
  data: UserStatsType
): Promise<Response> => {
  const response = await fetch(
    `https://yaia-team-rslang-api.herokuapp.com/users/${userId}/statistics`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  return response;
};

export const updateUserStats = async (
  userId: string,
  token: string,
  game: GameType,
  answer: AnswerType
): Promise<Response> => {
  const updateBody = {
    learnedWords: 0,
    optional: {
      series: {
        puzzle: 0,
        sprint: 0,
        savanna: 0,
        audiocall: 0,
      },
    },
  };
  const rawResponse = await getUserStats(userId, token);
  if (rawResponse.status === 200) {
    const response = await rawResponse.json();
    if (answer === 'right') {
      response.optional.series[game] += 1;
    }
    if (answer === 'wrong') {
      response.optional.series[game] = 0;
    }
    updateBody.optional = response.optional;
  } else if (answer === 'right') {
    updateBody.optional.series[game] += 1;
  }
  const userWordsResponse = await getAllUserWords(userId, token);
  if (userWordsResponse.status === 200) {
    const userWordsArray = await userWordsResponse.json();
    updateBody.learnedWords = userWordsArray.length;
  }
  const updateResponse = await putUserStats(userId, token, updateBody);
  return updateResponse;
};
