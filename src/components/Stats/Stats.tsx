import React, { useEffect } from 'react';
import style from './Stats.module.scss';
import { useAction, useTypedSelector } from '../../hooks';
import { Unit } from './Unit';
import { Chart } from './Chart';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    amt: 2100,
  },
];

export const Stats: React.FC = () => {
  const { day, allTime, series, loading } = useTypedSelector(
    (state) => state.stats
  );
  const { fetchStats } = useAction();

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className={style.root}>
      <h2 className={style.title}>Статистика</h2>
      <div className={style.wrapper}>
        {loading ? (
          'Загрузка...'
        ) : (
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
              value={`${allTime.learnedWords} %`}
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
        )}
        <div className={style.container}>
          <Chart
            data={data}
            title="Количество изученных слов за каждый день изучения"
          />
          <Chart
            data={data}
            title="Количество изученных слов за весь период изучения"
          />
        </div>
      </div>
    </div>
  );
};
