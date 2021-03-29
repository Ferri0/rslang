import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

import style from './Games.module.scss';

export function Games() {
  return (
    <Router>
      <div className={style.games}>
        <ul>
          <li>
            <Link to="/savanna">Savanna</Link>
          </li>
          <li>
            <Link to="/sprint">Sprint</Link>
          </li>
          <li>
            <Link to="/audiocall">Audio call</Link>
          </li>
          <li>
            <Link to="/owngame">Own game</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}
