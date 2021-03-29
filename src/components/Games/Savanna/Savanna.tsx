import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks';
import { DialogModal } from '../../ChooseLevel';
import { GameMenu } from '../GameMenu';

import style from './Savanna.module.scss';

export const Savanna = () => {
  const [scrollBg, setScrollBg] = useState({ backgroundPositionY: '100%' });
  const { words } = useTypedSelector((state) => state.words);

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
