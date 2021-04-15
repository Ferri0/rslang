import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Dasboard-start-page.module.scss';
import { gameInfo } from '../../Games/Promo-game-card/info';
import { useAction, useTypedSelector } from '../../../hooks';
import { Unit } from '../../Stats/Unit';

export function DashboardStartPage(): JSX.Element {
  const { currentUserId, token } = useTypedSelector((state) => state.auth);
  const { day } = useTypedSelector((state) => state.stats);
  const arr = [
    { id: 'learning', title: 'Изучаемые' },
    { id: 'difficult', title: 'Сложные' },
    { id: 'deleted', title: 'Удаленные' },
  ];
  const { setIsMainPage, fetchStats } = useAction();

  useEffect(() => {
    fetchStats(currentUserId, token);
  }, [currentUserId, token]);

  return (
    <div className={style.dashboardStartWrapper}>
      <div className={style.dashboardStartPage}>
        <div className={style.textbook}>
          Учебник
          <div className={style.textbookUnits}>
            {[1, 2, 3, 4, 5, 6].map((unit) => (
              <Link
                key={`start-unit-${unit}`}
                className={`${style.unit} ${style[`unit-${unit}`]}`}
                to={`/dashboard/textbook/unit${unit}`}
                onClick={() => setIsMainPage(false)}
              >
                <div
                  key={`start-unit-title-${unit}`}
                  className={style.unitTitle}
                >
                  {`Раздел ${unit}`}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={style.games}>
          Мини-игры
          <div className={style.gamesBlock}>
            {gameInfo.map((game) => (
              <Link
                key={`start-${game.id}`}
                className={style.game}
                to={`/dashboard/games/${game.id}`}
                style={{ background: `url("${game.img}")` }}
              >
                <div
                  key={`start-game-title-${game.id}`}
                  className={style.gameTitle}
                >
                  {game.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={style.dictionary}>
          Словарь
          <div className={style.dictionaryBlock}>
            {arr.map((dict) => (
              <Link
                key={`start-${dict.id}`}
                className={style.dict}
                to={`/dashboard/dictionary/${dict.id}`}
              >
                <div key={`start-${dict.id}-title`} className={style.dictTitle}>
                  <span>{`${dict.title} слова`}</span>
                  <span>N слов</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={style.stats}>
          Статистика
          <div className={style.statsBlock}>
            <Link to="/dashboard/stats" className={style.stat}>
              <Unit
                text="Количество изученных слов сегодня"
                value={day.learnedWords}
              />
            </Link>
            <Link to="/dashboard/stats" className={style.stat}>
              <Unit
                text="Процент правильных ответов сегодня"
                value={`${day.correctAnswers} %`}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
