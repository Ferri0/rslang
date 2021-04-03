import React, { useState } from 'react';
import style from './WordCard.module.scss';
import { wait } from './util/wait';
import {
  addToDeleted,
  addToDifficult,
  removeUserWord,
} from '../../service/User-words-service';
import { useStore } from 'react-redux';

type WordCardProps = {
  wordInfo: any;
  unitStyle: any;
  displayBtns: boolean;
  displayTranslate: boolean;
  userProps: any;
  isDeletedProp: boolean;
  isDifficultProp: boolean;
};

export function WordCard({
  wordInfo,
  unitStyle,
  displayBtns,
  displayTranslate,
  userProps,
  isDeletedProp,
  isDifficultProp,
}: WordCardProps) {
  const apiUrl: string = 'https://yaia-team-rslang-api.herokuapp.com/';

  const [isDeleted, setIsDeleted] = useState(isDeletedProp);
  const [isDifficult, setIsDifficult] = useState(isDifficultProp);

  if (wordInfo._id) wordInfo.id = wordInfo._id;

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

  console.log(wordInfo);
  if (isDeleted) return null;
  return (
    <div className={[style.tab, unitStyle.tab].join(' ')}>
      {displayBtns ? (
        <div
          className={
            isDifficult
              ? [style.starImg, style.starImg_active].join(' ')
              : style.starImg
          }
          onClick={(e) => {
            if (userProps.isAuthorized && isDifficult) {
              addToDifficult(userProps.id, wordInfo.id, userProps.token);
              setIsDifficult(!isDifficult);
            } else if (userProps.isAuthorized && !isDifficult) {
              removeUserWord(userProps.id, wordInfo.id, userProps.token);
              setIsDifficult(!isDifficult);
            }
          }}
        ></div>
      ) : null}
      <input
        type="checkbox"
        id={wordInfo.word}
        name="tab-group"
        className={[style.hidden, unitStyle.input].join(' ')}
      />
      <label
        htmlFor={wordInfo.word}
        className={[style.tabTitle, unitStyle.tabTitleHover].join(' ')}
      >
        <span>{wordInfo.word}</span>
      </label>
      <section className={style.tabContent}>
        <div className={style.tabContent_header}>
          <p className={style.wordTitle}>
            {`${wordInfo.word} - ${wordInfo.transcription} ${
              displayTranslate ? `- ${wordInfo.wordTranslate}` : ''
            }`}
          </p>
          <div className={style.tabContent_header___btnsBlock}>
            {displayBtns ? (
              <button
                className={style.deleteWordBtn}
                type="button"
                onClick={() => {
                  if (userProps.isAuthorized) {
                    addToDeleted(userProps.id, wordInfo.id, userProps.token);
                    setIsDeleted(!isDeleted);
                  }
                }}
              />
            ) : null}

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
        {displayTranslate ? <span>{wordInfo.textMeaningTranslate}</span> : null}
        <h4>Example:</h4>
        <div className={unitStyle.separator}></div>
        <span dangerouslySetInnerHTML={{ __html: wordInfo.textExample }}></span>
        {displayTranslate ? (
          <span className={style.lastLine}>
            {wordInfo.textExampleTranslate}
          </span>
        ) : null}
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
