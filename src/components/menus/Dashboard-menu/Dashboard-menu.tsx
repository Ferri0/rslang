/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAction, useTypedSelector } from '../../../hooks';
import style from './Dashboard-menu.module.scss';

interface Props {
  clickBurgerMenu: () => void;
  cls: string;
}

export const DashboardMenu: React.FC<Props> = ({ clickBurgerMenu, cls }) => {
  const { isAuthorized, currentUser } = useTypedSelector((state) => state.auth);
  const { setIsMainPage } = useAction();
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
      <Link className={style.logo} to="/" onClick={() => setIsMainPage(true)} />
      {welcome}
      <nav className={style.menu}>
        <div
          className={`${style.menuItem} ${style[menuStatus.textbox]}`}
          onClick={() => menuItemClick('textbox')}
          onKeyUp={({ key }) =>
            key !== 'Enter' ? false : menuItemClick('textbox')
          }
          role="button"
          tabIndex={0}
        >
          Учебник
        </div>
        <div
          className={`${style.subMenu} ${style[menuStatus.textbox]}`}
          onClick={clickBurgerMenu}
        >
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
          onKeyUp={({ key }) =>
            key !== 'Enter' ? false : menuItemClick('textbox')
          }
          role="button"
          tabIndex={0}
        >
          Словарь
        </div>
        <div
          className={`${style.subMenu} ${style[menuStatus.dictionary]}`}
          onClick={clickBurgerMenu}
        >
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
          onKeyUp={({ key }) =>
            key !== 'Enter' ? false : menuItemClick('textbox')
          }
          role="button"
          tabIndex={0}
        >
          Мини-игры
        </div>
        <div
          className={`${style.subMenu} ${style[menuStatus.games]}`}
          onClick={clickBurgerMenu}
        >
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/games/savanna"
            onClick={() => setIsMainPage(true)}
          >
            Саванна
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/games/sprint"
            onClick={() => setIsMainPage(true)}
          >
            Спринт
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/games/audiocall"
            onClick={() => setIsMainPage(true)}
          >
            Аудиовызов
          </NavLink>
          <NavLink
            className={style.menuItem}
            activeStyle={activeStyle}
            to="/dashboard/games/owngame"
            onClick={() => setIsMainPage(true)}
          >
            Своя игра
          </NavLink>
        </div>
        <NavLink
          className={style.menuItem}
          activeStyle={activeStyle}
          to="/dashboard/stats"
          onClick={() => {
            setIsMainPage(true);
            clickBurgerMenu();
          }}
        >
          Статистика
        </NavLink>
      </nav>
    </div>
  );
};
