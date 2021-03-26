import { number } from 'prop-types';
import React from 'react';
import style from './Textbook.module.scss';
import { getUnitStyle } from './util/getUnitStyle';

type textbookProps = {
  unit: number;
};

export function Textbook({ unit }: textbookProps) {
  const unitStyle = getUnitStyle(unit);
  return (
    <div className={[style.textbook, unitStyle.bg].join(' ')}>
      <div className={style.unitTitle}>{`Раздел ${unit}`}</div>
      <div className={style.wordsWrapper}>
        <div className={style.wordsBlock}></div>
        <div className={style.wordsBlock}></div>
      </div>
    </div>
  );
}
