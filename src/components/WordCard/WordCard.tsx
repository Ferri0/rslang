import React from 'react';
import style from './WordCard.module.scss';

type WordCardProps = { word: any; unitStyle: any };

export function WordCard({ word, unitStyle }: WordCardProps) {
  return (
    <div className={[style.tab, unitStyle.tab].join(' ')}>
      <input
        type="checkbox"
        id={`${word}-word-card`}
        name="tab-group"
        className={[style.hidden, unitStyle.input].join(' ')}
      />
      <label htmlFor={`${word}-word-card`} className={style.tabTitle}>
        {word}
      </label>
      <section className={style.tabContent}>
        <p>Под HTML5 обычно подразумевают два разных понятия:</p>
        <ul>
          <li>
            Это язык разметки документа, пришедший на смену HTML4 и XHTML.
          </li>
          <li>
            Это набор веб-технологий, позволяющий делать на сайте всякие
            интересные штуки.
          </li>
        </ul>
      </section>
    </div>
  );
}
