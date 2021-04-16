export type CategoryType = 'learning' | 'difficult' | 'deleted';
export type AnswerType = 'right' | 'wrong';
export type UserWordType = {
  difficulty: string;
  optional: {
    rightAnswers: number;
    wrongAnswers: number;
    date: string;
  };
};
