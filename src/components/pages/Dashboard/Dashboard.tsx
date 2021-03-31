import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardMenu } from '../../menus/Dashboard-menu';
import { Textbook } from '../../Textbook';
import { Games } from '../../Games';
import { Stats } from '../../Stats';
import style from './Dashboard.module.scss';
import { Savanna } from '../../Games/Savanna';
import { Sprint } from '../../Games/Sprint';
import { AudioCall } from '../../Games/Audio-call';
import { OwnGame } from '../../Games/Own-game';

export function Dashboard() {
  return (
    <div className={style.dashboardPage}>
      <DashboardMenu />
      <div>
        Dashboard Page
        <Switch>
          <Route exact path="/dashboard/textbook">
            <Textbook />
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
            <OwnGame />
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
  );
}
