import React, { useState, useEffect } from 'react';
import style from './Textbook.module.scss';
import { getUnitStyle } from './util/getUnitStyle';
import { WordCard } from '../WordCard';

type TextbookProps = {
  unit: number;
};

export function Textbook({ unit }: TextbookProps) {
  const [fetchedPage, setFetchedPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState([]);

  const unitStyle = getUnitStyle(unit);

  useEffect(() => {
    fetch('https://yaia-team-rslang-api.herokuapp.com/words')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchedPage(data);
      });
  }, []);

  useEffect(() => {
    console.log(fetchedPage);
    if (fetchedPage !== null) {
      const wordsElements: any[] = [];
      fetchedPage.forEach((element: any, i: number) => {
        wordsElements.push(
          <WordCard
            word={element.word}
            unitStyle={unitStyle}
            key={element.word}
          />
        );
      });
      setWords(wordsElements);
      setLoading(false);
    }
  }, [fetchedPage]);

  if (loading) {
    return (
      <div className={[style.textbook, unitStyle.bg].join(' ')}>
        <div className={style.unitTitle}>{`Раздел ${unit}`}</div>
        <div className={style.wordsWrapper}>{'LOADING'}</div>
      </div>
    );
  }
  return (
    <div className={[style.textbook, unitStyle.bg].join(' ')}>
      <div className={style.unitTitle}>{`Раздел ${unit}`}</div>
      <div className={style.wordsWrapper}>
        <div className={style.wordsBlock}>
          {words.filter((e: any, i: number) => i % 2 !== 0)}
        </div>
        <div className={style.wordsBlock}>
          {words.filter((e: any, i: number) => i % 2 === 0)}
        </div>
      </div>
    </div>
  );
}
