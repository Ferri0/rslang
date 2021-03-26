import React from 'react';
// temporally
// import { HashLink as Link } from 'react-router-hash-link';
import { HeaderAuthBlock } from '../header-auth-block';
import { MainMenu } from '../menus/Main-menu';
import style from './Header.module.scss';

export function Header() {
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
      <HeaderAuthBlock />
    </div>
  );
}
