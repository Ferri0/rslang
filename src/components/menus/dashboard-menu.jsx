import React from 'react';
import { Link } from 'react-router-dom';
import style from './dashboard-menu.module.scss';

function DashboardMenu() {
  return (
    <nav className={style.menu}>
      <Link className={style.menuItem} to="/">
        Logo
      </Link>
      <Link className={style.menuItem} to="/dashboard/textbook">
        Учебник
      </Link>
      <Link className={style.menuItem} to="/dashboard/games">
        Мини-игры
      </Link>
      <Link className={style.menuItem} to="/dashboard/stats">
        Статистика
      </Link>
    </nav>
  );
}

export { DashboardMenu };
