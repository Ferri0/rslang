const FETCH_PATH = 'https://yaia-team-rslang-api.herokuapp.com';

export function getFetchUrl(group: number, page: number) {
  return `${FETCH_PATH}/words?group=${group}&page=${page}`;
}
