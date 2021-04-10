import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import { shuffleArray, wait } from './utils';
import { wordObjects } from './local-state';
import { LoosePage } from '../../pages/Loose';
import { WinPage } from '../../pages/Win';
import style from './Own-game.module.scss';

export const OwnGame = (): React.ReactElement => {
  const {
    currentSentence,
    currentTaskSentence,
    arrayOfTaskBlocks,
    arrayOfTaskWords,
    currentWordIndex,
    arrayOfAnswerBlocks,
    answerCounter,
    healthPoints,
    audioSrc,
  } = useTypedSelector((state) => state.ownGame);
  const {
    setArrayOfAnswerBlock,
    setArrayOfTaskBlocks,
    setArrayOfTaskWords,
    setCurrentSentence,
    setCurrentTaskSentence,
    setCurrentWordIndex,
    setAnswerCounter,
    setHealthPoints,
    setAudioSrc,
    setWin,
    setLoose,
  } = useAction();

  let answerLastDiv: null | HTMLElement;
  let audio: HTMLAudioElement;
  let mistake: HTMLAudioElement;
  let loose: HTMLAudioElement;
  let win: HTMLAudioElement;
  const newElement: string[] = [];

  useEffect(() => {
    if (answerCounter === 0) {
      setCurrentWordIndex(0);
      setCurrentSentence(wordObjects[answerCounter].textExampleTranslate);
      setCurrentTaskSentence(wordObjects[answerCounter].textExample);
      setAudioSrc(wordObjects[answerCounter].audioExample);
      setArrayOfAnswerBlock([[]]);
      setHealthPoints([1, 1, 1, 1, 1]);
    }
    if (answerCounter < wordObjects.length && answerCounter > 0) {
      setCurrentSentence(wordObjects[answerCounter].textExampleTranslate);
      setCurrentTaskSentence(wordObjects[answerCounter].textExample);
      setArrayOfAnswerBlock([...arrayOfAnswerBlocks, newElement]);
      setCurrentWordIndex(0);
      setAudioSrc(wordObjects[answerCounter].audioExample);
      answerLastDiv.scrollIntoView({ behavior: 'smooth' });
    }
    if (answerCounter === wordObjects.length) {
      setWin(true);
      win.play();
    }
  }, [answerCounter]);

  useEffect(() => {
    setArrayOfTaskWords(currentTaskSentence.split(' '));
  }, [currentTaskSentence]);

  useEffect(() => {
    setArrayOfTaskBlocks(shuffleArray(arrayOfTaskWords));
  }, [arrayOfTaskWords]);

  const taskBlocks = arrayOfTaskBlocks.map((item: string, index: number) => (
    <span
      key={item}
      role="presentation"
      dangerouslySetInnerHTML={{ __html: item }}
      className={style.taskBlock}
      onMouseDown={(e) => {
        if (item === arrayOfTaskWords[currentWordIndex]) {
          (e.target as Element).className = [
            style.taskBlock,
            style.taskBlockGreen,
          ].join(' ');
        } else {
          (e.target as Element).className = [
            style.taskBlock,
            style.taskBlockRed,
          ].join(' ');
        }
      }}
      onMouseUp={(e) => {
        if (item === arrayOfTaskWords[currentWordIndex]) {
          (e.target as Element).className = style.taskBlock;
          const copyOfTaskArray = arrayOfTaskBlocks.slice();
          copyOfTaskArray.splice(index, 1);
          setArrayOfTaskBlocks(copyOfTaskArray);
          const copyOfAnswerArray = arrayOfAnswerBlocks.slice();
          copyOfAnswerArray[answerCounter].push(item);
          setArrayOfAnswerBlock(copyOfAnswerArray);
          setCurrentWordIndex(currentWordIndex + 1);
          if (copyOfTaskArray.length < 1) {
            setAnswerCounter(answerCounter + 1);
          }
        } else {
          healthPoints.pop();
          if (healthPoints.length < 1) {
            setLoose(true);
            loose.play();
          } else {
            mistake.play();
            setHealthPoints(healthPoints);
            (e.target as Element).className = style.taskBlock;
          }
        }
      }}
    />
  ));
  const answerBlocks = arrayOfAnswerBlocks.map(
    (answerItem: string[], num: React.Key) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className={style.answerBlocksWrapper} key={num}>
        {answerItem.map((blockItem) => (
          <div className={style.taskBlock}>
            <span dangerouslySetInnerHTML={{ __html: blockItem }} />
          </div>
        ))}
      </div>
    )
  );
  const healthPointsBlocks = healthPoints.map((item: number, num: number) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={num} className={style.healthPointBlock} />
  ));
  const playAudio = (e: React.MouseEvent) => {
    (e.target as HTMLInputElement).disabled = true;
    audio.play();
    wait(audio.duration).then(() => {
      (e.target as HTMLInputElement).disabled = false;
    });
  };
  return (
    <div className={style.ownGameWrapper}>
      <LoosePage />
      <WinPage mistakesCounter={5 - healthPoints.length} />
      <div className={style.ownGameHeaderWrapper}>
        <div className={style.linkWrapper}>
          <Link
            className={[style.btn, style.btn_home].join(' ')}
            to="/dashboard"
          />
        </div>
        <div className={style.healthPointsWrapper}>
          {healthPointsBlocks}
          <audio
            src="../../../assets/sounds/mistake.mp3"
            ref={(el) => {
              mistake = el;
            }}
          >
            <track src="mistake-sound" kind="captions" />
          </audio>
          <audio
            src="../../../assets/sounds/loose.mp3"
            ref={(el) => {
              loose = el;
            }}
          >
            <track src="lose-sound" kind="captions" />
          </audio>
          <audio
            src="../../../assets/sounds/win.mp3"
            ref={(el) => {
              win = el;
            }}
          >
            <track src="lose-sound" kind="captions" />
          </audio>
        </div>
      </div>
      <div className={style.mainFieldWrapper}>
        {answerBlocks}
        <div
          ref={(el) => {
            answerLastDiv = el;
          }}
        />
      </div>
      <div className={style.taskWrapper}>
        {currentSentence}
        <button
          type="button"
          aria-label="Play sound"
          className={style.playSoundBtn}
          onClick={(e) => playAudio(e)}
        />
        <audio
          src={audioSrc}
          ref={(el) => {
            audio = el;
          }}
        >
          <track src="Text-sound" kind="captions" />
        </audio>
      </div>
      <div className={style.taskBlocksWrapper}>{taskBlocks}</div>
    </div>
  );
};
