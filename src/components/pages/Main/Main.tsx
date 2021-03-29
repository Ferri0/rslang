import React from 'react';
import { Header } from '../../Header';
import { Games } from '../../Games';
import { Footer } from '../../Footer';
import style from './Main.module.scss';

export function MainPage() {
  return (
    <div className={style.mainPage}>
      <Header />
      <div className={style.greeting} id="top">
        greeting block
      </div>
      <div className={style.dictionary} id="textbook">
        English textbook description
      </div>
      <div className={style.games} id="games">
        <Games />
      </div>
      <div className={style.stats} id="stats">
        stats description
      </div>
      <Footer />
    </div>
  );
}
