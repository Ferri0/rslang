import React from 'react';
import style from './Rules.module.scss';

interface Props {
  clickStart: React.MouseEventHandler<HTMLButtonElement>;
  cls: string;
}

export const Rules: React.FC<Props> = ({ clickStart, cls }) => (
  <div className={`${style.rulesWrapper} ${style[cls]}`}>
    <div className={style.rules}>
      <div className={style.title}>Паззл</div>
      <div className={style.text}>
        <p>
          Мини-игра «Паззл» - это тренировка, развивающая навыки речи и
          перевода.
        </p>
        <p>
          В игре показывается предложение на русском языке с возможностью
          прослушивания перевода, а также английские слова, которые используются
          в этом предложении. Игроку нужно составить правильное предложение из
          представленых слов.
        </p>
        <p>Можно использовать мышь для выбора ответа.</p>
      </div>
      <button type="button" onClick={clickStart}>
        Начать игру
      </button>
    </div>
  </div>
);
