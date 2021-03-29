import { ServiceWordsType, Words } from '../types';

export class WordsService implements ServiceWordsType {
  apiBaseUrl = 'https://yaia-team-rslang-api.herokuapp.com/';

  apiWords = (group: number = 0, page: number = 0): string =>
    `https://yaia-team-rslang-api.herokuapp.com/words?group=${group}&page=${page}`;

  getResource = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `Ooops, Could not fetch ${url}` + `, received ${res.status}`
      );
    }

    return res;
  };

  getWords = async (group: number, page: number = 0): Promise<Words> => {
    return (await this.getResource(this.apiWords(group, page))).json();
  };

  getSound = async (path: string) => {
    return await this.getResource(`${this.apiBaseUrl}${path}`);
  };
}
