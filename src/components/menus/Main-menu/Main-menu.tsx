import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import style from './Main-menu.module.scss';

export function MainMenu(): JSX.Element {
  return (
    <nav className={style.menu}>
      <Link className={style.menuItem} to="#promo">
        Промо
      </Link>
      <Link className={style.menuItem} to="#textbook">
        Учебник
      </Link>
      <Link className={style.menuItem} to="#games">
        Мини-игры
      </Link>
      <Link className={style.menuItem} to="#stats">
        Статистика
      </Link>
      <Link className={style.menuItem} to="#info">
        Команда
      </Link>
    </nav>
  );
}
