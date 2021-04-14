import { UserWordType } from '../types/words';

const isToday = (someDate: Date) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

const getTodayWords = (words: Array<UserWordType>) =>
  words.filter((word: UserWordType) => {
    try {
      const date = new Date(word.optional.date);
      return isToday(date);
    } catch {
      return false;
    }
  });

export const getLearnedWordsToday = (words: Array<UserWordType>): number =>
  getTodayWords(words).length;

export const getCorrectAnswers = (words: Array<UserWordType>): string => {
  let right = 0;
  let wrong = 0;
  words.forEach((word: UserWordType) => {
    right += word.optional.rightAnswers;
    wrong += word.optional.wrongAnswers;
  });
  const all = right + wrong;
  return ((right * 100) / all).toFixed(1);
};

export const getCorrectAnswersToday = (words: Array<UserWordType>): string => {
  const todayWords = getTodayWords(words);
  return getCorrectAnswers(todayWords);
};
