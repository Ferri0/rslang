import { shuffle } from '../../../utils/shuffle';
import { Word } from '../../../types';

interface WType {
  word: string;
  wordTranslate: string;
}

export const getAllWords = (words: Word[]): WType[] => {
  const wordsArr: WType[] = [];

  words.forEach((arr) => {
    const obj: WType = {
      word: arr.word,
      wordTranslate: arr.wordTranslate,
    };
    wordsArr.push(obj);
  });

  shuffle(wordsArr);
  return wordsArr;
};

export const rand = (arr: string[], min: number, max: number): number => {
  let ind;
  if (max > arr.length)
    ind = Math.floor(min + Math.random() * (arr.length - min));
  else ind = Math.floor(min + Math.random() * (max - min));
  return ind;
};

interface GWType {
  wordTranslate: string;
  audio: string;
  id: string;
}

export const getWord = (eng: string, words: Word[]): GWType => {
  const obj = words.filter((el) => el.word === eng)[0];
  return {
    wordTranslate: obj.wordTranslate,
    audio: obj.audio,
    id: obj.id,
  };
};

export const userId = JSON.parse(
  localStorage.getItem('yaia-team-rslang-userID')
);

export const userToken = JSON.parse(
  localStorage.getItem('yaia-team-rslang-token')
);
