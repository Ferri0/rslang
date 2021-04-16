import React from 'react';
import style from './Unit.module.scss';

export interface UnitProps {
  text: string;
  value: string | number;
}

export const Unit: React.FC<UnitProps> = ({ text, value }) => (
  <li className={style.root}>
    <h3>{text}</h3>
    <div>{value}</div>
  </li>
);
