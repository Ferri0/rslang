import React, { useState, useEffect } from 'react';
import style from './Textbook.module.scss';
import { getUnitStyle } from './util/getUnitStyle';
import { getFetchUrl } from './util/getFetchUrl';
import { WordCard } from '../WordCard';
import { PageControls } from '../PageControls';
import { TextbookControls } from '../TextBookControls';
import { Word } from '../../types';

type TextbookProps = {
  unit: number;
};

export function Textbook({ unit }: TextbookProps): JSX.Element {
  const [group, setGroup] = useState(unit);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [fetchedPage, setFetchedPage] = useState(null);
  const [wordCards, setWordCards] = useState(null);
  // const [displayBtns, setDisplayBtns] = useState(true);
  // const [displayTranslate, setDisplayTranslate] = useState(true);

  const unitStyle = getUnitStyle(unit);

  useEffect(() => {
    setLoading(true);
    setGroup(unit);
    setPage(0);
  }, [group, unit]);

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      const resolve = await fetch(getFetchUrl(group, page));
      const response = await resolve.json();
      setFetchedPage(response);
    };
    fetchPage();
  }, [page, group]);

  useEffect(() => {
    if (fetchedPage !== null) {
      const wordCardsArr: JSX.Element[] = [];
      fetchedPage.forEach((element: Word) => {
        wordCardsArr.push(
          <WordCard wordInfo={element} unitStyle={unitStyle} key={element.id} />
        );
      });
      setWordCards(wordCardsArr);
      setLoading(false);
    }
  }, [fetchedPage]);

  if (loading) {
    return (
      <div className={[style.textbook, unitStyle.bg].join(' ')}>
        <TextbookControls />
        <div className={style.unitTitle}>{`Раздел ${group + 1}`}</div>
        <div className={style.wordsWrapper}>
          Загрузка...
          <PageControls currentPage={page} setCurrentPage={setPage} />
        </div>
      </div>
    );
  }

  return (
    <div className={[style.textbook, unitStyle.bg].join(' ')}>
      <TextbookControls />
      <div className={style.unitTitle}>{`Раздел ${group + 1}`}</div>
      <div className={style.wordsWrapper}>
        <div className={style.wordsBlock}>
          {wordCards.filter((_: JSX.Element, i: number) => i % 2 !== 0)}
        </div>
        <div className={style.wordsBlock}>
          {wordCards.filter((_: JSX.Element, i: number) => i % 2 === 0)}
        </div>
        <PageControls currentPage={page} setCurrentPage={setPage} />
      </div>
    </div>
  );
}
