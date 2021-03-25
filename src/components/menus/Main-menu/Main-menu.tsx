import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import style from './Main-menu.module.scss';

function MainMenu() {
  return (
    <nav className={style.menu}>
      <Link className={style.menuItem} to="#textbook">
        Учебник
      </Link>
      <Link className={style.menuItem} to="#games">
        Мини-игры
      </Link>
      <Link className={style.menuItem} to="#stats">
        Статистика
      </Link>
      {/* Temp menu item */}
      <Link className={style.menuItem} to="/dashboard">
        Dashboard
      </Link>
    </nav>
  );
}

export { MainMenu };
