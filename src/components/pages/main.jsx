import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import style from './main.module.scss';

function MainPage() {
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
        games description
      </div>
      <div className={style.stats} id="stats">
        stats description
      </div>
      <Footer />
    </div>
  );
}

export { MainPage };
