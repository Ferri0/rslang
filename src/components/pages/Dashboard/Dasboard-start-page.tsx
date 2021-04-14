import React from 'react';
import { Link } from 'react-router-dom';
import style from './Dasboard-start-page.module.scss';
import { gameInfo } from '../../Games/Promo-game-card/info';
import { useAction } from '../../../hooks';

export function DashboardStartPage(): JSX.Element {
  const arr = [
    { id: 'learning', title: 'Изучаемые' },
    { id: 'difficult', title: 'Сложные' },
    { id: 'deleted', title: 'Удаленные' },
  ];
  const { setIsMainPage } = useAction();

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
        <div className={style.stats}>Stats</div>
      </div>
    </div>
  );
}
