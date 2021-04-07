import React from 'react';
import { Word } from '../../../../types';

type PropsType = {
  words: Word[];
  setGameEnd: (arg: boolean) => void;
};

export const SprintGame = ({ words, setGameEnd }: PropsType): JSX.Element => {
  const endGame = () => {
    setGameEnd(true);
  };
  return (
    <div>
      <h2>Sprint game</h2>
      <div>
        {words.map((word) => (
          <div key={word.id}>{word.word}</div>
        ))}
      </div>
      <button type="button" onClick={() => endGame}>
        End game
      </button>
    </div>
  );
};
