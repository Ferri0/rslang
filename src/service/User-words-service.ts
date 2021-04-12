/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Word } from '../types';
import { CategoryType, AnswerType, UserWordType } from '../types/words';

const getWordsOfType = async (userId: string, token: string, type: string) => {
  const response = await fetch(
    `https://yaia-team-rslang-api.herokuapp.com/users/${userId}/aggregatedWords?filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22${type}%22%7D%5D%7D`,
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

export const addWordToType = async (
  userId: string,
  wordId: string,
  token: string,
  type: CategoryType,
  answer?: AnswerType
) => {
  const data = {
    difficulty: type,
    optional: {
      rightAnswers: answer === 'right' ? 1 : 0,
      wrongAnswers: answer === 'wrong' ? 1 : 0,
    },
  };
  const response = await fetch(
    `https://yaia-team-rslang-api.herokuapp.com/users/${userId}/words/${wordId}`,
    {
      method: 'POST',
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

const removeUserWord = async (
  userId: string,
  wordId: string,
  token: string
): Promise<Response> => {
  const response = await fetch(
    `https://yaia-team-rslang-api.herokuapp.com/users/${userId}/words/${wordId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  return response;
};

const addToDeleted = async (
  userId: string,
  wordId: string,
  token: string
): Promise<void> => {
  removeUserWord(userId, wordId, token);
  addWordToType(userId, wordId, token, 'deleted');
};

const addToDifficult = async (
  userId: string,
  wordId: string,
  token: string
): Promise<void> => {
  addWordToType(userId, wordId, token, 'difficult');
};

const getAllDifficult = async (
  userId: string,
  token: string
): Promise<Response> => {
  const type = 'difficult';
  const rawResponse = await getWordsOfType(userId, token, type);
  const response = await rawResponse.json();
  const result = response[0].paginatedResults;
  return result;
};

const getAllDeleted = async (
  userId: string,
  token: string
): Promise<Response> => {
  const type = 'deleted';
  const rawResponse = await getWordsOfType(userId, token, type);
  const response = await rawResponse.json();
  const result = response[0].paginatedResults;
  return result;
};

const getUserWord = async (
  userId: string,
  wordId: string,
  token: string
): Promise<Response> => {
  const response = await fetch(
    `https://yaia-team-rslang-api.herokuapp.com/users/${userId}/words/${wordId}`,
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

const updateUserWord = async (
  userId: string,
  wordId: string,
  token: string,
  data: UserWordType
): Promise<Response> => {
  console.log(data);
  const response = await fetch(
    `https://yaia-team-rslang-api.herokuapp.com/users/${userId}/words/${wordId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        body: JSON.stringify(data),
      },
    }
  );

  return response;
};

const updateUserWordStatisitic = async (
  userId: string,
  wordId: string,
  token: string,
  answer: AnswerType
): Promise<Response> => {
  const rawResponse = await getUserWord(userId, wordId, token);
  if (rawResponse.status === 200) {
    const response = await rawResponse.json();
    if (answer === 'right') {
      response.optional.rightAnswers += 1;
    }
    if (answer === 'wrong') {
      response.optional.wrongAnswers += 1;
    }
    // console.log(response);
    const updateBody = {
      difficulty: JSON.parse(JSON.stringify(response.difficulty)),
      optional: JSON.parse(JSON.stringify(response.optional)),
    };
    const updateResponse = await updateUserWord(
      userId,
      wordId,
      token,
      updateBody
    );
    // console.log(updateResponse.status);
    const updateResponseBody = await updateResponse.json();
    console.log(updateResponseBody);
  } else {
    const addWordResponse = await addWordToType(
      userId,
      wordId,
      token,
      'learning',
      answer
    );
    // console.log(addWordResponse);
  }
  return rawResponse;
};

// prettier-ignore
export const getWordsOfCategoryByPage = async (
  userId: string, token: string, category: CategoryType, page: number, pages?: number
) => {
  const URL = `https://yaia-team-rslang-api.herokuapp.com/users/${userId}/aggregatedWords?page=${page}&wordsPerPage=${pages}&filter=%7B%22userWord.difficulty%22%3A%22${category}%22%7D`
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await fetch(URL, options);
    const json = await response.json();
    let words: Word[] = [];
    let count = 0

    if (response) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      words = json[0]?.paginatedResults || [];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      count = json[0]?.totalCount[0]?.count || 0;
    }

    return {words, count};
  } catch (err) {
    // console.log(err);
  }
};

export {
  updateUserWordStatisitic,
  addToDeleted,
  addToDifficult,
  removeUserWord,
  getAllDifficult,
  getAllDeleted,
};
