import { updateUserStats, updateUserWordStatisitic } from '../service';
import { GameType } from '../types';
import { AnswerType } from '../types/words';

type cbType = typeof updateUserWordStatisitic | typeof updateUserStats;

type addWordsToDBType = (
  cb: cbType,
  answer: AnswerType,
  wordID: string,
  game?: GameType
) => void;

export const addWordsToDB: addWordsToDBType = (cb, answer, wordID, game) => {
  if (game) {
    cb(
      JSON.parse(localStorage.getItem('yaia-team-rslang-userID')),
      JSON.parse(localStorage.getItem('yaia-team-rslang-token')),
      game,
      answer
    );
  } else {
    cb(
      JSON.parse(localStorage.getItem('yaia-team-rslang-userID')),
      wordID,
      JSON.parse(localStorage.getItem('yaia-team-rslang-token')),
      answer
    );
  }
};
