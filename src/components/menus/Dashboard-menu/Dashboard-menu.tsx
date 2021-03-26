import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Dashboard-menu.module.scss';

export function DashboardMenu() {
  return (
    <nav className={style.menu}>
      <Link className={style.menuItem} to="/">
        Logo
      </Link>
      <Link className={style.menuItem} to="/dashboard/textbook/unit1">
        1 раздел
      </Link>
      <Link className={style.menuItem} to="/dashboard/textbook/unit2">
        2 раздел
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
