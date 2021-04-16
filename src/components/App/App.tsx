import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from '../pages/Main';
import { Dashboard } from '../pages/Dashboard';
import { RegistrationPage } from '../pages/Registration';
import { LoginPage } from '../pages/Login';
import style from './App.module.scss';

export function App(): JSX.Element {
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
            <RegistrationPage />
            <LoginPage />
            <Dashboard />
          </Route>
          <Route
            render={() => <h2>Error, you made a mistake in the url path</h2>}
          />
        </Switch>
      </div>
    </Router>
  );
}
