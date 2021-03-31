import React, { useState, useEffect } from 'react';
import style from './Textbook.module.scss';
import { getUnitStyle } from './util/getUnitStyle';
import { getFetchUrl } from './util/getFetchUrl';
import { WordCard } from '../WordCard';

type TextbookProps = {
  unit: number;
};

export function Textbook({ unit }: TextbookProps) {
  const [group, setGroup] = useState(unit);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [fetchedPage, setFetchedPage] = useState(null);
  const [wordCards, setWordCards] = useState(null);

  const unitStyle = getUnitStyle(unit);

  useEffect(() => {
    console.log('first use effect');
    setLoading(true);
    setGroup(unit);
    setPage(0);
  }, [group, unit]);

  useEffect(() => {
    console.log('use effect fetching');
    const fetchPage = async () => {
      const resolve = await fetch(getFetchUrl(group, page));
      const response = await resolve.json();
      setFetchedPage(response);
    };
    fetchPage();
  }, [page, group]);

  useEffect(() => {
    console.log('use effect set elements');
    if (fetchedPage !== null) {
      const wordCards: any[] = [];
      fetchedPage.forEach((element: any, i: number) => {
        wordCards.push(
          <WordCard wordInfo={element} unitStyle={unitStyle} key={element.id} />
        );
      });
      setWordCards(wordCards);
      setLoading(false);
    }
  }, [fetchedPage]);

  if (loading) {
    return (
      <div className={[style.textbook, unitStyle.bg].join(' ')}>
        <div className={style.unitTitle}>{`Раздел ${group + 1}`}</div>
        <div className={style.wordsWrapper}>{'Загрузка...'}</div>
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
      <div className={style.unitTitle}>{`Раздел ${group + 1}`}</div>
      <div className={style.wordsWrapper}>
        <div className={style.wordsBlock}>
          {wordCards.filter((e: any, i: number) => i % 2 !== 0)}
        </div>
        <div className={style.wordsBlock}>
          {wordCards.filter((e: any, i: number) => i % 2 === 0)}
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
