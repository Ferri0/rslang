import React, { useEffect } from 'react';
import style from './Stats.module.scss';
import { useAction, useTypedSelector } from '../../hooks';
import { Unit } from './Unit';
import { Chart } from './Chart';

export const Stats: React.FC = () => {
  const { currentUserId, token } = useTypedSelector((state) => state.auth);
  const { day, allTime, series, dayData, allData, loading } = useTypedSelector(
    (state) => state.stats
  );
  const { fetchStats } = useAction();

  useEffect(() => {
    fetchStats(currentUserId, token);
  }, [currentUserId, token]);

  return (
    <div className={style.root}>
      <h2 className={style.title}>Статистика</h2>
      <div className={style.wrapper}>
        {loading ? (
          'Загрузка...'
        ) : (
          <>
            <ul className={style.list}>
              <Unit
                text="Количество изученных слов сегодня"
                value={day.learnedWords}
              />
              <Unit
                text="Процент правильных ответов сегодня"
                value={`${day.correctAnswers} %`}
              />
              <Unit
                text="Количество изученных слов за все время"
                value={allTime.learnedWords}
              />
              <Unit
                text="Процент правильных ответов за все время"
                value={`${allTime.correctAnswers} %`}
              />

              <Unit
                text="Самая длинная серия в игре Спринт"
                value={series.sprint}
              />
              <Unit
                text="Самая длинная серия в игре Саванна"
                value={series.savanna}
              />
              <Unit
                text="Самая длинная серия в игре Пазл"
                value={series.puzzle}
              />
              <Unit
                text="Самая длинная серия в игре Аудиовызов"
                value={series.audiocall}
              />
            </ul>
            <div className={style.container}>
              <Chart
                data={dayData}
                title="Количество изученных слов за каждый день изучения"
              />
              <Chart
                data={allData}
                title="Количество изученных слов за весь период изучения"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
