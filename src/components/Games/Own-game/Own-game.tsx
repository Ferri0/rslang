import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

import style from './Own-game.module.scss';

export const OwnGame = () => {
  return (
    <div className={style.ownGameWrapper}>
      <Router>
        <Link to="/">Back to home</Link>
      </Router>
    </div>
  );
};
