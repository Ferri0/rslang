import { CategoryType } from '../types/words';

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
  type: CategoryType
) => {
  const data = {
    difficulty: type,
    optional: {},
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
) => {
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

const addToDeleted = async (userId: string, wordId: string, token: string) => {
  const x = await removeUserWord(userId, wordId, token);
  const y = await addWordToType(userId, wordId, token, 'deleted');
};

const addToDifficult = async (
  userId: string,
  wordId: string,
  token: string
) => {
  addWordToType(userId, wordId, token, 'difficult');
};

const getAllDifficult = async (userId: string, token: string) => {
  const type = 'difficult';
  const rawResponse = await getWordsOfType(userId, token, type);
  const response = await rawResponse.json();
  const result = response[0].paginatedResults;
  return result;
};

const getAllDeleted = async (userId: string, token: string) => {
  const type = 'deleted';
  const rawResponse = await getWordsOfType(userId, token, type);
  const response = await rawResponse.json();
  const result = response[0].paginatedResults;
  return result;
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
    let words: any[] = [];
    let count = 0

    if (response) {
      // @ts-ignore
      words = json[0]?.paginatedResults || [];
      // @ts-ignore
      count = json[0]?.totalCount[0]?.count || 0;
    }

    return {words, count};
  } catch (err) {
    console.log(err);
  }
};

export {
  addToDeleted,
  addToDifficult,
  removeUserWord,
  getAllDifficult,
  getAllDeleted,
};
