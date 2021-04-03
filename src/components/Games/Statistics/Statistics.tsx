import React from 'react';
import { Word } from '../../../types';

interface IStatisticsWords {
  statics: {
    known: Word[];
    unknown: Word[];
  };
}

export const Statistics = ({ statics }: IStatisticsWords): JSX.Element => {
  console.log(statics);
  return (
    <div>
      <dialog open>
        <div>
          <p>Верные ответы: </p>
          {statics.known.map((word) => (
            <div key={word.id}>
              <audio
                controls
                src={`https://yaia-team-rslang-api.herokuapp.com/${word.audio}`}
              >
                <track kind="captions" />
              </audio>
              <em>{word.wordTranslate}</em>
            </div>
          ))}
          <p>Не Верные ответы: </p>
          {statics.unknown.map((word) => (
            <div key={word.id}>
              <audio
                controls
                src={`https://yaia-team-rslang-api.herokuapp.com/${word.audio}`}
              >
                <track kind="captions" />
              </audio>
              <em>{word.wordTranslate}</em>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
};
