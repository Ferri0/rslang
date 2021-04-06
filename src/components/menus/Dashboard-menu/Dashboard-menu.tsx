import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks';
import style from './Dashboard-menu.module.scss';

export function DashboardMenu() {
  const { isAuthorized, currentUser } = useTypedSelector((state) => state.auth);

  const [menuStatus, setStatusMenu] = useState({
    textbox: 'close',
    games: 'close',
    dictionary: 'close',
  });

  type IType = 'textbox' | 'games' | 'dictionary';

  const menuItemClick = (item: IType) => {
    const newObj = menuStatus;
    Object.keys(newObj).forEach((key: IType) => {
      if (key === item)
        newObj[key] = menuStatus[item] === 'open' ? 'close' : 'open';
      else newObj[key] = 'close';
    });
    setStatusMenu((prev) => ({ ...prev, newObj }));
  };

  const activeStyle = {
    fontWeight: 800,
    color: '#c42b28',
  };

  let welcome;
  if (isAuthorized) welcome = <div>{currentUser}</div>;

  return (
    <div className={style.menuContainer}>
      <Link className={style.logo} to="/" />
      {welcome}
      <nav className={style.menu}>
        <div
          className={`${style.menuItem} ${style[menuStatus.textbox]}`}
          onClick={() => menuItemClick('textbox')}
        >
          Учебник
        </div>
        <div className={`${style.subMenu} ${style[menuStatus.textbox]}`}>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/textbook/unit1"
          >
            1 раздел
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/textbook/unit2"
          >
            2 раздел
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/textbook/unit3"
          >
            3 раздел
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/textbook/unit4"
          >
            4 раздел
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/textbook/unit5"
          >
            5 раздел
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/textbook/unit6"
          >
            6 раздел
          </NavLink>
        </div>
        <div
          className={`${style.menuItem} ${style[menuStatus.dictionary]}`}
          onClick={() => menuItemClick('dictionary')}
        >
          Словарь
        </div>
        <div className={`${style.subMenu} ${style[menuStatus.dictionary]}`}>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/dictionary/learning"
          >
            Изучаемые слова
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/dictionary/difficult"
          >
            Сложные слова
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/dictionary/deleted"
          >
            Удаленные слова
          </NavLink>
        </div>
        <div
          className={`${style.menuItem} ${style[menuStatus.games]}`}
          onClick={() => menuItemClick('games')}
        >
          Мини-игры
        </div>
        <div className={`${style.subMenu} ${style[menuStatus.games]}`}>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/games/savanna"
          >
            Саванна
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/games/sprint"
          >
            Спринт
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/games/audiocall"
          >
            Аудиовызов
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/games/owngame"
          >
            Своя игра
          </NavLink>
        </div>
        <NavLink
          className={style.menuItem}
          activeStyle={activeStyle}
          to="/dashboard/stats"
        >
          Статистика
        </NavLink>
      </nav>
    </div>
  );
}
