/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { HeaderAuthBlock } from '../header-auth-block';
import { MainMenu } from '../menus/Main-menu';
import style from './Header.module.scss';

interface Props {
  clickBurgerMenu: () => void;
  cls: string;
}

export const Header: React.FC<Props> = ({ clickBurgerMenu, cls }) => (
  <div className={`${style.header} ${style[cls]}`} onClick={clickBurgerMenu}>
    <button
      className={style.logo}
      type="button"
      aria-label="Logo"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    />
    <MainMenu />
    <HeaderAuthBlock parent="startPage" />
  </div>
);
