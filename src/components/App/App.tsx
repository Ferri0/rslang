import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from '../pages/Main';
import { Dashboard } from '../pages/Dashboard';
import { Savanna } from '../Games/Savanna';
import { Sprint } from '../Games/Sprint';
import { AudioCall } from '../Games/Audio-call';
import { OwnGame } from '../Games/Own-game';
import { RegistrationPage } from '../pages/Registration';
import { LoginPage } from '../pages/Login';
import style from './App.module.scss';

export function App() {
  return (
    <Router>
      <div className={style.wrapper}>
        <Switch>
          <Route exact path="/">
            <RegistrationPage />
            <LoginPage />
            <MainPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/savanna">
            <Savanna />
          </Route>
          <Route exact path="/sprint">
            <Sprint />
          </Route>
          <Route exact path="/audiocall">
            <AudioCall />
          </Route>
          <Route exact path="/owngame">
            <OwnGame />
          </Route>
          <Route
            render={() => <h2>Error, you made a mistake in the url path</h2>}
          />
        </Switch>
      </div>
    </Router>
  );
}
