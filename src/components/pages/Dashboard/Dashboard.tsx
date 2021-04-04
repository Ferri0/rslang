import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { DashboardMenu } from '../../menus/Dashboard-menu';
import { Textbook } from '../../Textbook';
import { Games } from '../../Games';
import { Stats } from '../../Stats';
import style from './Dashboard.module.scss';
import { Savanna } from '../../Games/Savanna';
import { Sprint } from '../../Games/Sprint';
import { AudioCall } from '../../Games/Audio-call';
import { OwnGame } from '../../Games/Own-game';
import { DashboardStartPage } from './Dasboard-start-page';

export function Dashboard() {
  const location = useLocation();
  let startPage;
  if (location.pathname === '/dashboard') startPage = <DashboardStartPage />;

  return (
    <div className={style.dashboardContainer}>
      <div className={style.dashboardPage}>
        <DashboardMenu />
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
            <Route path="/dashboard/dictionary/learning">Изучаемые слова</Route>
            <Route path="/dashboard/dictionary/difficult">Сложные слова</Route>
            <Route path="/dashboard/dictionary/deleted">Удаленные слова</Route>
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
    </div>
  );
}
