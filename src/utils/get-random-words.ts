import { Word } from '../types';
import { shuffle } from './shuffle';

type GetRandomWordType = (arr: Word[], except: string, num: number) => string[];

export const getTRandomWords: GetRandomWordType = (arr, except, num) =>
  shuffle(arr.filter((word) => word.wordTranslate !== except))
    .slice(0, num)
    .map((item) => item.wordTranslate);
