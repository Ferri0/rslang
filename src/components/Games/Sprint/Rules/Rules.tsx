import React from 'react';
import style from './Rules.module.scss';

interface Props {
  clickStart: React.MouseEventHandler<HTMLButtonElement>;
  rulesCls: string;
}

export const Rules: React.FC<Props> = ({ clickStart, rulesCls }) => (
  <div className={`${style.rulesWrapper} ${style[rulesCls]}`}>
    <div className={style.rules}>
      <div className={style.title}>Спринт</div>
      <div className={style.text}>
        <p>Мини-игра «Спринт» - это тренировка выученных слов на скорость.</p>
        <p>
          В игре показываются пары слов на английском и русском языке. Нужно
          выбрать, правильно переведено слово или неправильно.
        </p>
        <p>
          Можно использовать мышь для выбора ответа. Или клавиши влево и вправо.
        </p>
      </div>
      <button type="button" onClick={clickStart}>
        Начать игру
      </button>
    </div>
  </div>
);
