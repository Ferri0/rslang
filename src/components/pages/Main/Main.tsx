import React from 'react';
import { Header } from '../../Header';
import { Games } from '../../Games';
import { Footer } from '../../Footer';
import style from './Main.module.scss';
import { Link } from 'react-router-dom';

export function MainPage() {
  return (
    <div className={style.mainPage}>
      <Header />
      <div className={style.greeting} id="top">
        <div className={style.greetingText}>
          <span className={style.greetingTextTitle}>
            Easy English - учи новые слова каждый день!
          </span>
          <span>
            Наша учебная платформа поможет тебе быстро и легко изучить более
            3000 английских слов!
          </span>
          <Link to="/dashboard" className={style.greetingButton}>
            Начать обучение
          </Link>
        </div>
        <div className={style.greetingImg} />
        <div className={style.overlay} />
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
