import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from './Form';

import style from './Savanna.module.scss';

export const Savanna = () => {
  const [scrollBg, setScrollBg] = useState({ backgroundPositionY: '100%' });

  const onscrollToTop = () => {
    setScrollBg(({ backgroundPositionY }) => ({
      backgroundPositionY: parseInt(backgroundPositionY) - 10 + '%',
    }));
  };

  const history = useHistory();

  return (
    <div>
      <button
        style={{ width: 200, height: 50 }}
        onClick={() => history.goBack()}
      >
        Go back
      </button>
      <div style={scrollBg} className={style.bg}>
        <button onClick={onscrollToTop} className={style.scrollBtn}>
          Click
        </button>
        <Form />
      </div>
    </div>
  );
};
