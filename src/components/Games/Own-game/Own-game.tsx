import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

import style from './Own-game.module.scss';

export const OwnGame = () => {
  return (
    <div className={style.ownGameWrapper}>
      <div className={style.linkWrapper}>
        <Router>
          <Link to="/">Back to home</Link>
        </Router>
      </div>
      <div className={style.healthPointsWrapper}>
        This is health points wrapper
      </div>
      <div className={style.mainFieldWrapper}>This is Main Field wrapper</div>
      <div className={style.taskWrapper}>This is Task wrapper</div>
      <div className={style.taskBlocksWrapper}>This is Task Blocks wrapper</div>
    </div>
  );
};
