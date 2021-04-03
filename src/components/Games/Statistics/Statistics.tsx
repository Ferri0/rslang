import React from 'react';
import { Word } from '../../../types';

interface IStatistics {
  statisticWords: Word;
}

export const Statistics = ({ statisticWords }: IStatistics): JSX.Element => {
  console.log(statisticWords);
  return (
    <div>
      <dialog open>TABLE WITH RESULTS</dialog>
    </div>
  );
};
