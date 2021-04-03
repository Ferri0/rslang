import React, { useState, useEffect } from 'react';
import style from './Textbook.module.scss';
import { getUnitStyle } from './util/getUnitStyle';
import { getFetchUrl } from './util/getFetchUrl';
import { WordCard } from '../WordCard';
import { PageControls } from '../PageControls';
import { TextbookControls } from '../TextbookControls';
import { useTypedSelector } from '../../hooks/useTypedSelector';

type TextbookProps = {
  unit: number;
};

export function Textbook({ unit }: TextbookProps) {
  const [group, setGroup] = useState(unit);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [fetchedPage, setFetchedPage] = useState(null);
  const [wordCards, setWordCards] = useState(null);
  const [displayBtns, setDisplayBtns] = useState(true);
  const [displayTranslate, setDisplayTranslate] = useState(true);

  const unitStyle = getUnitStyle(unit);

  const { token, currentUserId, isAuthorized } = useTypedSelector(
    (state) => state.auth
  );

  useEffect(() => {
    setLoading(true);
    setGroup(unit);
    setPage(0);
  }, [group, unit]);

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      if (isAuthorized) {
        console.log('Authorized block');
        const resolve = await fetch(getFetchUrl(group, page, currentUserId), {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const response = await resolve.json();
        setFetchedPage(response[0].paginatedResults);
      } else {
        console.log('Unauthorized block');
        const resolve = await fetch(getFetchUrl(group, page));
        const response = await resolve.json();
        setFetchedPage(response);
      }
    };
    fetchPage();
  }, [page, group]);

  useEffect(() => {
    if (fetchedPage !== null) {
      const wordCards: any[] = [];
      fetchedPage.forEach((element: any, i: number) => {
        wordCards.push(
          <WordCard
            wordInfo={element}
            unitStyle={unitStyle}
            displayBtns={displayBtns}
            displayTranslate={displayTranslate}
            userProps={{ token, id: currentUserId, isAuthorized }}
            isDeletedProp={element?.userWord?.difficulty === 'deleted'}
            isDifficultProp={element?.userWord?.difficulty === 'difficult'}
            key={element.word}
          />
        );
      });
      setWordCards(wordCards);
      setLoading(false);
    }
  }, [fetchedPage, displayBtns, displayTranslate]);

  if (loading) {
    return (
      <div className={[style.textbook, unitStyle.bg].join(' ')}>
        <TextbookControls
          displayBtns={{ value: displayBtns, set: setDisplayBtns }}
          displayTranslate={{
            value: displayTranslate,
            set: setDisplayTranslate,
          }}
        />
        <div className={style.unitTitle}>{`Раздел ${group + 1}`}</div>
        <div className={style.wordsWrapper}>
          {'Загрузка...'}
          <PageControls currentPage={page} setCurrentPage={setPage} />
        </div>
      </div>
    );
  }

  return (
    <div className={[style.textbook, unitStyle.bg].join(' ')}>
      <TextbookControls
        displayBtns={{ value: displayBtns, set: setDisplayBtns }}
        displayTranslate={{
          value: displayTranslate,
          set: setDisplayTranslate,
        }}
      />
      <div className={style.unitTitle}>{`Раздел ${group + 1}`}</div>
      <div className={style.wordsWrapper}>
        <div className={style.wordsBlock}>
          {wordCards.filter((e: any, i: number) => i < 10)}
        </div>
        <div className={style.wordsBlock}>
          {wordCards.filter((e: any, i: number) => i >= 10)}
        </div>
        <PageControls currentPage={page} setCurrentPage={setPage} />
      </div>
    </div>
  );
}
