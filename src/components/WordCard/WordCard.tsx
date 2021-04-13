/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
// import { useStore } from 'react-redux';
import style from './WordCard.module.scss';
import { wait } from './util/wait';
import {
  addToDeleted,
  addToDifficult,
  removeUserWord,
} from '../../service/User-words-service';
import { Word } from '../../types/words-type';

type WordCardProps = {
  wordInfo: Word;
  unitStyle: { [className: string]: string };
  displayBtns?: boolean;
  displayTranslate?: boolean;
  userProps?: { token: string; id: string; isAuthorized: boolean };
  isDeletedProp?: boolean;
  isDifficultProp?: boolean;
};

export function WordCard({
  wordInfo,
  unitStyle,
  displayBtns,
  displayTranslate,
  userProps,
  isDeletedProp,
  isDifficultProp,
}: WordCardProps): React.ReactElement {
  const apiUrl = 'https://yaia-team-rslang-api.herokuapp.com/';

  const [isDeleted, setIsDeleted] = useState(isDeletedProp);
  const [isDifficult, setIsDifficult] = useState(isDifficultProp);

  // if (wordInfo._id) wordInfo.id = wordInfo._id;

  const playAudio = (e: React.SyntheticEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const audio: any = document.getElementById(
      `${wordInfo._id || wordInfo.id}-audio`
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const audioMeaning: any = document.getElementById(
      `${wordInfo._id || wordInfo.id}-audioMeaning`
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const audioExample: any = document.getElementById(
      `${wordInfo._id || wordInfo.id}-audioExample`
    );

    (e.target as HTMLInputElement).disabled = true;
    audio.play();
    wait(audio.duration).then(() => {
      audioMeaning.play();
    });
    wait(audioMeaning.duration + audio.duration).then(() => {
      audioExample.play();
    });
    wait(audioExample.duration + audioMeaning.duration + audio.duration).then(
      () => {
        (e.target as HTMLInputElement).disabled = false;
      }
    );
  };

  if (isDeleted) return null;
  return (
    <div className={[style.tab, unitStyle.tab].join(' ')}>
      {displayBtns ? (
        <div
          aria-label="Add-to-difficult-words"
          role="button"
          tabIndex={0}
          className={
            isDifficult
              ? [style.starImg, style.starImg_active].join(' ')
              : style.starImg
          }
          onClick={() => {
            if (userProps.isAuthorized && !isDifficult) {
              addToDifficult(
                userProps.id,
                wordInfo._id || wordInfo.id,
                userProps.token
              );
              setIsDifficult(!isDifficult);
            } else if (userProps.isAuthorized && isDifficult) {
              removeUserWord(
                userProps.id,
                wordInfo._id || wordInfo.id,
                userProps.token
              );
              setIsDifficult(!isDifficult);
            }
          }}
        />
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
                aria-label="Delete-word-from-page"
                className={style.deleteWordBtn}
                type="button"
                onClick={() => {
                  if (userProps.isAuthorized) {
                    addToDeleted(
                      userProps.id,
                      wordInfo._id || wordInfo.id,
                      userProps.token
                    );
                    setIsDeleted(!isDeleted);
                  }
                }}
              />
            ) : null}

            <button
              aria-label="Play-sound"
              className={style.playSoundBtn}
              type="button"
              onClick={(e: React.SyntheticEvent) => playAudio(e)}
            />
          </div>
        </div>
        <img
          src={apiUrl + wordInfo.image}
          className={style.wordImg}
          alt="word-img"
        />
        <h4>Meaning:</h4>
        <div className={unitStyle.separator} />
        <span dangerouslySetInnerHTML={{ __html: wordInfo.textMeaning }} />
        {displayTranslate ? <span>{wordInfo.textMeaningTranslate}</span> : null}
        <h4>Example:</h4>
        <div className={unitStyle.separator} />
        <span dangerouslySetInnerHTML={{ __html: wordInfo.textExample }} />
        {displayTranslate ? (
          <span className={style.lastLine}>
            {wordInfo.textExampleTranslate}
          </span>
        ) : null}
        <audio
          src={apiUrl + wordInfo.audio}
          id={`${wordInfo._id || wordInfo.id}-audio`}
        >
          <track src="word-audio" kind="captions" />
        </audio>
        <audio
          src={apiUrl + wordInfo.audioMeaning}
          id={`${wordInfo._id || wordInfo.id}-audioMeaning`}
        >
          <track src="word-meaning-audio" kind="captions" />
        </audio>
        <audio
          src={apiUrl + wordInfo.audioExample}
          id={`${wordInfo._id || wordInfo.id}-audioExample`}
        >
          <track src="word-usage-example-audio" kind="captions" />
        </audio>
      </section>
    </div>
  );
}

WordCard.defaultProps = {
  displayBtns: true,
  displayTranslate: true,
  userProps: { token: null, id: null, isAuthorized: false },
  isDeletedProp: false,
  isDifficultProp: false,
};
