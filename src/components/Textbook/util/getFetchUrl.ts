const FETCH_PATH = 'https://yaia-team-rslang-api.herokuapp.com';

export function getFetchUrl(group: number, page: number, userID?: string) {
  if (userID) {
    return `${FETCH_PATH}/users/${userID}/aggregatedWords?group=${group}&page=${page}&wordsPerPage=${20}`;
  }
  return `${FETCH_PATH}/words?group=${group}&page=${page}`;
}
