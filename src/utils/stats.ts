import { UserWordType } from '../types/words';

const compareDates = (firstDate: Date, secondDate: Date) =>
  firstDate.getDate() === secondDate.getDate() &&
  firstDate.getMonth() === secondDate.getMonth() &&
  firstDate.getFullYear() === secondDate.getFullYear();

const isToday = (date: Date) => {
  const today = new Date();
  return compareDates(date, today);
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

export const formDayChartData = (words: Array<UserWordType>) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const res = [];
  const date = new Date();
  while (res.length < 7) {
    res.unshift({
      name: days[date.getDay()],
      words: words.filter((word) => {
        const wordDate = new Date(word.optional.date);
        return compareDates(date, wordDate);
      }).length,
    });
    date.setDate(date.getDate() - 1);
  }
  return res;
};

export const formAllChartData = (words: Array<UserWordType>) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const res = [];
  const date = new Date();
  let wordsCount = words.length;
  while (res.length < 7) {
    res.unshift({
      name: days[date.getDay()],
      words: wordsCount,
    });
    const wordsToday = words.filter((word) => {
      const wordDate = new Date(word.optional.date);
      return compareDates(date, wordDate);
    }).length;
    wordsCount -= wordsToday;
    date.setDate(date.getDate() - 1);
  }
  return res;
};
