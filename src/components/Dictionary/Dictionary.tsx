import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks';
import { getUnitStyle } from './util/getUnitStyle';
import { PageControls } from '../PageControls';
import { WordCard } from '../WordCard';
import { getWordsOfCategoryByPage } from '../../service';
import style from './Dictionary.module.scss';
import { CategoryType } from '../../types/words';

enum Category {
  'learning' = 'Изучаемые слова',
  'difficult' = 'Сложные слова',
  'deleted' = 'Удаленные слова',
}

export interface DictionaryProps {
  type: CategoryType;
}

export const Dictionary: React.FC<DictionaryProps> = ({ type }) => {
  const { currentUserId, token } = useTypedSelector((state) => state.auth);
  const unitStyle = getUnitStyle(type);

  const [page, setPage] = useState(0);
  const [wordCards, setWordCards] = useState([]);
  const [wordsCount, setWordsCount] = useState(0);
  const [maxPage, setMaxPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const pages = 20;

  const countPages = (value: number, itemsPerPage: number) =>
    Math.ceil(value / itemsPerPage) || 1;

  useEffect(() => {
    (async () => {
      setLoading(true);
      // prettier-ignore
      const response = await getWordsOfCategoryByPage(currentUserId, token, type, page, pages);

      if (response) {
        const { words, count } = response;
        setMaxPage(countPages(count, pages));
        setWordsCount(count);

        setWordCards(
          words.map((word: any) => (
            <WordCard wordInfo={word} unitStyle={unitStyle} key={word._id} />
          ))
        );
      }

      setLoading(false);
    })();
  }, [page, type]);

  return (
    <div className={[style.root, unitStyle.bg].join(' ')}>
      {loading || (
        <div className={style.unitState}>{`${wordsCount} из 3600`}</div>
      )}
      <div className={style.unitTitle}>{Category[type]}</div>
      <div className={style.wordsWrapper}>
        {loading ? (
          'Загрузка...'
        ) : (
          <>
            {wordCards.length === 0 && 'Список пуст'}
            <div className={style.wordsBlock}>
              {wordCards.filter((e: any, i: number) => i % 2 !== 0)}
            </div>
            <div className={style.wordsBlock}>
              {wordCards.filter((e: any, i: number) => i % 2 === 0)}
            </div>
          </>
        )}
        <PageControls
          currentPage={page}
          setCurrentPage={setPage}
          maxPage={maxPage}
        />
      </div>
    </div>
  );
};
