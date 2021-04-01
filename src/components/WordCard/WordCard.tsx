import React from 'react';
import style from './WordCard.module.scss';
import { wait } from './util/wait';

type WordCardProps = { wordInfo: any; unitStyle: any };

export function WordCard({ wordInfo, unitStyle }: WordCardProps) {
  const apiUrl: string = 'https://yaia-team-rslang-api.herokuapp.com/';

  const playAudio = (e: any) => {
    const audio: any = document.getElementById(`${wordInfo.id}-audio`);
    const audioMeaning: any = document.getElementById(
      `${wordInfo.id}-audioMeaning`
    );
    const audioExample: any = document.getElementById(
      `${wordInfo.id}-audioExample`
    );

    e.target.disabled = true;
    audio.play();
    wait(audio.duration).then(() => {
      audioMeaning.play();
    });
    wait(audioMeaning.duration + audio.duration).then(() => {
      audioExample.play();
    });
    wait(audioExample.duration + audioMeaning.duration + audio.duration).then(
      () => {
        e.target.disabled = false;
      }
    );
  };

  return (
    <div className={[style.tab, unitStyle.tab].join(' ')}>
      <input
        type="checkbox"
        id={wordInfo.id}
        name="tab-group"
        className={[style.hidden, unitStyle.input].join(' ')}
      />
      <label
        htmlFor={wordInfo.id}
        className={[style.tabTitle, unitStyle.tabTitleHover].join(' ')}
      >
        <span>{wordInfo.word}</span>
        <div className={style.starImg}></div>
      </label>
      <section className={style.tabContent}>
        <div className={style.tabContent_header}>
          <p className={style.wordTitle}>
            {wordInfo.word} - {wordInfo.transcription} -{' '}
            {wordInfo.wordTranslate}
          </p>
          <div className={style.tabContent_header___btnsBlock}>
            <button
              className={style.deleteWordBtn}
              type="button"
              onClick={() => console.log('delete word function')}
            />
            <button
              className={style.playSoundBtn}
              type="button"
              onClick={(e: any) => playAudio(e)}
            />
          </div>
        </div>
        <img
          src={apiUrl + wordInfo.image}
          className={style.wordImg}
          alt="word-img"
        />
        <h4>Meaning:</h4>
        <div className={unitStyle.separator}></div>
        <span dangerouslySetInnerHTML={{ __html: wordInfo.textMeaning }}></span>
        <span>{wordInfo.textMeaningTranslate}</span>
        <h4>Example:</h4>
        <div className={unitStyle.separator}></div>
        <span dangerouslySetInnerHTML={{ __html: wordInfo.textExample }}></span>
        <span className={style.lastLine}>{wordInfo.textExampleTranslate}</span>
        <audio src={apiUrl + wordInfo.audio} id={`${wordInfo.id}-audio`} />
        <audio
          src={apiUrl + wordInfo.audioMeaning}
          id={`${wordInfo.id}-audioMeaning`}
        />
        <audio
          src={apiUrl + wordInfo.audioExample}
          id={`${wordInfo.id}-audioExample`}
        />
      </section>
    </div>
  );
}
