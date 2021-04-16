import React from 'react';
import { gameInfo } from './info';
import style from './Promo-game-card.module.scss';

interface PromoGameCardProps {
  title: string;
}

export function PromoGameCard({ title }: PromoGameCardProps): JSX.Element {
  const obj = gameInfo.filter((el) => title === el.id)[0];

  return (
    <div className={style.view}>
      <img src={obj.img} alt="img" />
      <div className={style.mask}>
        <h2>{obj.title}</h2>
        <p>{obj.desc}</p>
        <div className={style.info}>Играть</div>
      </div>
    </div>
  );
}
