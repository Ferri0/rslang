import { ServiceWordsType, Word } from '../types';

export class WordsService implements ServiceWordsType {
  apiBaseUrl = 'https://yaia-team-rslang-api.herokuapp.com/';

  apiWords = (group = 0, page = 0): string =>
    `https://yaia-team-rslang-api.herokuapp.com/words?group=${group}&page=${page}`;

  getResource = async (url: string): Promise<Response> => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Oops, Could not fetch ${url}, received ${res.status}`);
    }

    return res;
  };

  getWords = async (group = 1, page = 1): Promise<Word[]> =>
    (await this.getResource(this.apiWords(group, page))).json();

  getSound = async (path: string): Promise<Response> => {
    const result = await this.getResource(`${this.apiBaseUrl}${path}`);
    return result;
  };
}
