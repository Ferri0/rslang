import { number } from 'prop-types';
import React from 'react';
import style from './WordCard.module.scss';

type WordCardProps = { wordInfo: any; unitStyle: any };

export function WordCard({ wordInfo, unitStyle }: WordCardProps) {
  const apiUrl: string = 'https://yaia-team-rslang-api.herokuapp.com/';

  const playAudio = (audioId: string) => {
    const audio: any = document.getElementById(`${wordInfo.id}-audio`);
    audio.play();
  };

  return (
    <div className={[style.tab, unitStyle.tab].join(' ')}>
      <input
        type="checkbox"
        id={wordInfo.id}
        name="tab-group"
        className={[style.hidden, unitStyle.input].join(' ')}
      />
      <label htmlFor={wordInfo.id} className={style.tabTitle}>
        {wordInfo.word}
      </label>
      <section className={style.tabContent}>
        <img src={apiUrl + wordInfo.image} alt="word-img" />
        <audio src={apiUrl + wordInfo.audio} id={`${wordInfo.id}-audio`} />
        <button type="button" onClick={() => playAudio(wordInfo.id)}>
          Play
        </button>
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
