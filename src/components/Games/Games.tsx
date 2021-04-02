import React from 'react';
import { Link } from 'react-router-dom';
import { PromoGameCard } from './Promo-game-card';

import style from './Games.module.scss';
import { arrGame } from './Promo-game-card/info';

export function Games() {
  return (
    <div className={style.gamesWrapper}>
      <h2 className={style.gamesTitle}>Мини-игры</h2>
      <span>
        Мы не заставляем слушать скучные лекции - обучение на нашей учебной
        платформе проводится в игровой форме, ведь научно доказано, что это
        веселее и эффективнее! Играя каждый день, вы закрепляете свои знания в
        изучении новых слов.
      </span>
      <div className={style.gameCards}>
        {arrGame.map((game) => (
            <Link
              key={`game-card-${game}`}
              to={`/dashboard/games/${game.toLowerCase()}`}
            >
              <PromoGameCard title={game} />
            </Link>
          ))}
      </div>
    </div>
  );
}
