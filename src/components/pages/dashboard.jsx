import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardMenu } from '../menus';
import { Textbook } from '../textbook';
import { Games } from '../games';
import { Stats } from '../stats';
import style from './dashboard.module.scss';

function Dashboard() {
  return (
    <div className={style.dashboardPage}>
      <DashboardMenu />
      <div>
        Dashboard Page
        <Switch>
          <Route exact path="/dashboard/textbook">
            <Textbook />
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

export { Dashboard };
