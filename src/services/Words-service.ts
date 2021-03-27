interface ServiceWords {
  apiWordsBase: string;
  getResource(url: string): Promise<any>;
  getWords(): Promise<any>;
  getSound(path: string): Promise<any>;
  getWord(id: string): Promise<any>;
}

interface Item {
  id: string;
}

export class WordsService implements ServiceWords {
  apiWordsBase = 'https://yaia-team-rslang-api.herokuapp.com/';

  getResource = async (url: string) => {
    const res = await fetch(this.apiWordsBase);

    if (!res.ok) {
      throw new Error(
        `Ooops, Could not fetch ${url}` + `, received ${res.status}`
      );
    }

    return await res.json();
  };

  getWords = async () => {
    return await this.getResource(`${this.apiWordsBase}words`);
  };

  getSound = async (path: string) => {
    return await this.getResource(`${this.apiWordsBase}${path}`);
  };

  getWord = async (id: string) => {
    const data = await this.getResource(this.apiWordsBase);
    const res = data.find((item: Item) => item.id === id);
    return res;
  };
}
