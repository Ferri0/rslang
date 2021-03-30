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
    setLoading(true);
    fetch(`https://yaia-team-rslang-api.herokuapp.com/words?group=${unit}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchedPage(data);
        setLoading(false);
      });
  }, [unit]);

  useEffect(() => {
    if (fetchedPage !== null) {
      const wordsElements: any[] = [];
      fetchedPage.forEach((element: any, i: number) => {
        wordsElements.push(
          <WordCard wordInfo={element} unitStyle={unitStyle} key={element.id} />
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
      <div className={style.btnsBlock}>
        <button
          className={[style.btn, style.btn_home].join(' ')}
          type="button"
        />
        <div className={style.settingsBlock} />
        <div className={style.gamesBlock} />
      </div>
      <div className={style.unitTitle}>{`Раздел ${unit}`}</div>
      <div className={style.wordsWrapper}>
        <div className={style.wordsBlock}>
          {words.filter((e: any, i: number) => i % 2 !== 0)}
        </div>
        <div className={style.wordsBlock}>
          {words.filter((e: any, i: number) => i % 2 === 0)}
        </div>
        <div className={style.pageControls}>
          <button
            className={[style.btn, style.btn_firstPage].join(' ')}
          ></button>
          <button
            className={[style.btn, style.btn_prevPage].join(' ')}
          ></button>
          <div className={style.pageBlock}>1/30</div>
          <button
            className={[style.btn, style.btn_nextPage].join(' ')}
          ></button>
          <button
            className={[style.btn, style.btn_lastPage].join(' ')}
          ></button>
        </div>
      </div>
    </div>
  );
}
