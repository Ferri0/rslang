import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { MainMenu } from '../menus';
import style from './header.module.scss';

function Header() {
  return (
    <div className={style.header}>
      <button
        type="button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Logo
      </button>
      <MainMenu />
      <button type="button">Войти</button>
    </div>
  );
}

export { Header };
