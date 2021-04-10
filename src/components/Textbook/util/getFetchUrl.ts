const FETCH_PATH = 'https://yaia-team-rslang-api.herokuapp.com';

export function getFetchUrl(
  group: number,
  page: number,
  userID?: string
): string {
  if (userID) {
    return `${FETCH_PATH}/users/${userID}/aggregatedWords?group=${group}&page=${page}&wordsPerPage=${20}&filter=%7B%22%24or%22%3A%5B%7B%22userWord.difficulty%22%3A%22difficult%22%7D%2C%7B%22userWord%22%3Anull%7D%5D%7D`;
  }
  return `${FETCH_PATH}/words?group=${group}&page=${page}`;
}
