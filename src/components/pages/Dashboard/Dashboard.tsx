import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardMenu } from '../../menus/Dashboard-menu';
import { Textbook } from '../../Textbook';
import { Games } from '../../Games';
import { Stats } from '../../Stats';
import style from './Dashboard.module.scss';

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
