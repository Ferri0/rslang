import { ServiceWordsType } from '../types';

export class WordsService implements ServiceWordsType {
  apiBaseUrl = 'https://yaia-team-rslang-api.herokuapp.com/';

  apiWords = (group = 0, page = 0): string =>
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

  getWords = async () => (await this.getResource(this.apiWords())).json();

  getSound = async (path: string) =>
    await this.getResource(`${this.apiBaseUrl}${path}`);
}
