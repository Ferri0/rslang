import { ServiceWordsType } from '../types';

export class WordsService implements ServiceWordsType {
  apiBaseUrl = 'https://yaia-team-rslang-api.herokuapp.com/';

  apiWords = (group = 0, page = 0): string =>
    `https://yaia-team-rslang-api.herokuapp.com/words?group=${group}&page=${page}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getResource = async (url: string): Promise<any> => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Ooops, Could not fetch ${url}, received ${res.status}`);
    }

    return res;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getWords = async (): Promise<any> =>
    (await this.getResource(this.apiWords())).json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSound = async (path: string): Promise<any> =>
    this.getResource(`${this.apiBaseUrl}${path}`);
}
