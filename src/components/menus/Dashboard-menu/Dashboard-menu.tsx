import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Dashboard-menu.module.scss';

export function DashboardMenu() {
  const [menuStatus, setStatusMenu] = useState({
    textbox: 'close',
    games: 'close',
  });

  const menuItemClick = (item: 'textbox' | 'games') => {
    const status = menuStatus[item] === 'open' ? 'close' : 'open';
    setStatusMenu((prev) => {
      return { ...prev, [item]: status };
    });
  };

  return (
    <div className={style.menuContainer}>
      <Link className={style.logo} to="/" />
      <nav className={style.menu}>
        <div
          className={style.menuItem}
          onClick={() => menuItemClick('textbox')}
        >
          Учебник
        </div>
        <div className={`${style.subMenu} ${style[menuStatus.textbox]}`}>
          <Link className={style.menuItem} to="/dashboard/textbook/unit1">
            1 раздел
          </Link>
          <Link className={style.menuItem} to="/dashboard/textbook/unit2">
            2 раздел
          </Link>
          <Link className={style.menuItem} to="/dashboard/textbook/unit3">
            3 раздел
          </Link>
          <Link className={style.menuItem} to="/dashboard/textbook/unit4">
            4 раздел
          </Link>
          <Link className={style.menuItem} to="/dashboard/textbook/unit5">
            5 раздел
          </Link>
          <Link className={style.menuItem} to="/dashboard/textbook/unit6">
            6 раздел
          </Link>
        </div>
        <div className={style.menuItem} onClick={() => menuItemClick('games')}>
          Мини-игры
        </div>
        <div className={`${style.subMenu} ${style[menuStatus.games]}`}>
          <Link className={style.menuItem} to="/dashboard/games/savanna">
            Саванна
          </Link>
          <Link className={style.menuItem} to="/dashboard/games/sprint">
            Спринт
          </Link>
          <Link className={style.menuItem} to="/dashboard/games/audiocall">
            Аудиовызов
          </Link>
          <Link className={style.menuItem} to="/dashboard/games/owngame">
            Своя игра
          </Link>
        </div>
        <Link className={style.menuItem} to="/dashboard/stats">
          Статистика
        </Link>
      </nav>
    </div>
  );
}
