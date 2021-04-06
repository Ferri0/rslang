import React from 'react';
import { HeaderAuthBlock } from '../header-auth-block';
import { MainMenu } from '../menus/Main-menu';
import style from './Header.module.scss';

export function Header(): JSX.Element {
  return (
    <div className={style.header}>
      <button
        className={style.logo}
        type="button"
        aria-label="Logo"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
      <MainMenu />
      <HeaderAuthBlock />
    </div>
  );
}
