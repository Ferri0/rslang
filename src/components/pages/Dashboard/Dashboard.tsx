import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { DashboardMenu } from '../../menus/Dashboard-menu';
import { Textbook } from '../../Textbook';
import { Games } from '../../Games';
import { Stats } from '../../Stats';
import style from './Dashboard.module.scss';
import { Savanna } from '../../Games/Savanna';
import { Sprint } from '../../Games/Sprint';
import { AudioCall } from '../../Games/Audio-call';
import { Puzzle } from '../../Games/Own-game';
import { DashboardStartPage } from './Dasboard-start-page';
import { Dictionary } from '../../Dictionary';
import { BurgerIcon } from '../Burger-icon';

export function Dashboard(): JSX.Element {
  const location = useLocation();
  let startPage;
  if (location.pathname === '/dashboard') startPage = <DashboardStartPage />;

  const [cls, setCls] = useState('close');

  const clickBurgerMenu = () => {
    const status = cls === 'close' ? 'open' : 'close';
    setCls(status);
  };

  return (
    <div className={style.dashboardContainer}>
      <div className={style.dashboardPage}>
        <BurgerIcon
          clickBurgerMenu={clickBurgerMenu}
          cls={cls}
          parent="dashboardPage"
        />
        <div className={`${style.overlay} ${style[cls]}`} />
        <DashboardMenu clickBurgerMenu={clickBurgerMenu} cls={cls} />
        <div>
          {startPage}
          <Switch>
            <Route path="/dashboard/textbook/unit1">
              <Textbook unit={0} />
            </Route>
            <Route path="/dashboard/textbook/unit2">
              <Textbook unit={1} />
            </Route>
            <Route path="/dashboard/textbook/unit3">
              <Textbook unit={2} />
            </Route>
            <Route path="/dashboard/textbook/unit4">
              <Textbook unit={3} />
            </Route>
            <Route path="/dashboard/textbook/unit5">
              <Textbook unit={4} />
            </Route>
            <Route path="/dashboard/textbook/unit6">
              <Textbook unit={5} />
            </Route>
            <Route path="/dashboard/dictionary/learning">
              <Dictionary type="learning" />
            </Route>
            <Route path="/dashboard/dictionary/difficult">
              <Dictionary type="difficult" />
            </Route>
            <Route path="/dashboard/dictionary/deleted">
              <Dictionary type="deleted" />
            </Route>
            <Route path="/dashboard/games/savanna">
              <Savanna />
            </Route>
            <Route path="/dashboard/games/sprint">
              <Sprint />
            </Route>
            <Route path="/dashboard/games/audiocall">
              <AudioCall />
            </Route>
            <Route path="/dashboard/games/owngame">
              <Puzzle />
            </Route>
            <Route path="/dashboard/games">
              <Games />
            </Route>
            <Route path="/dashboard/stats">
              <Stats />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
