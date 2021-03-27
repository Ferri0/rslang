import React, { useState } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

import style from './Savanna.module.scss';

export const Savanna = () => {
  const [scrollBg, setScrollBg] = useState({ backgroundPositionY: '100%' });

  const onscrollToTop = () => {
    setScrollBg(({ backgroundPositionY }) => ({
      backgroundPositionY: parseInt(backgroundPositionY) - 10 + '%',
    }));
  };

  return (
    <div>
      <Router>
        <Link to="/">Back to home</Link>
      </Router>
      <div style={scrollBg} className={style.bg}>
        <button onClick={onscrollToTop} className={style.button}>
          Click
        </button>
      </div>
    </div>
  );
};
