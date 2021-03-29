import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks';
import { DialogModal } from '../../ChooseLevel';
import { GameMenu } from '../GameMenu';

import style from './Savanna.module.scss';

export const Savanna = () => {
  const [scrollBg, setScrollBg] = useState({ backgroundPositionY: '100%' });
  const { words } = useTypedSelector((state) => state.groupOfWords);

  const onscrollToTop = () => {
    setScrollBg(({ backgroundPositionY }) => ({
      backgroundPositionY: parseInt(backgroundPositionY) - 10 + '%',
    }));
  };

  const history = useHistory();

  console.log(words);

  return (
    <div className={style.savannah}>
      <div className={style.game_wrapper}>
        <GameMenu />
        <div className={style.game_main}>
          <div style={scrollBg} className={style.game_image} />
          <div className={style.game_words}>
            <div className={style.question}>Random word</div>
            <div className={style.attempt_words}>
              <button
                className={style.answer}
                onKeyUp={() => {}}
                onClick={() => {}}
              >
                1.duck
              </button>
              <button
                className={style.answer}
                onKeyUp={() => {}}
                onClick={() => {}}
              >
                2.house
              </button>
              <button
                className={style.answer}
                onKeyUp={() => {}}
                onClick={() => {}}
              >
                3.agree
              </button>
              <button
                className={style.answer}
                onKeyUp={() => {}}
                onClick={() => {}}
              >
                4.arrive
              </button>
            </div>
          </div>
          <button
            style={{ width: 150, height: 30 }}
            onClick={() => history.goBack()}
          >
            Go back
          </button>
          <button onClick={onscrollToTop} className={style.scrollBtn}>
            Click
          </button>
          <DialogModal />
        </div>
      </div>
    </div>
  );
};
