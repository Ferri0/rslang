import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardMenu } from '../../menus/Dashboard-menu';
import { Textbook } from '../../Textbook';
import { Games } from '../../Games';
import { Stats } from '../../Stats';
import style from './Dashboard.module.scss';

export function Dashboard() {
  return (
    <div className={style.dashboardPage}>
      <DashboardMenu />
      <div>
        <Switch>
          <Route exact path="/dashboard/textbook/unit1">
            <Textbook unit={0} />
          </Route>
          <Route exact path="/dashboard/textbook/unit2">
            <Textbook unit={1} />
          </Route>
          <Route exact path="/dashboard/textbook/unit3">
            <Textbook unit={2} />
          </Route>
          <Route exact path="/dashboard/textbook/unit4">
            <Textbook unit={3} />
          </Route>
          <Route exact path="/dashboard/textbook/unit5">
            <Textbook unit={4} />
          </Route>
          <Route exact path="/dashboard/textbook/unit6">
            <Textbook unit={5} />
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
