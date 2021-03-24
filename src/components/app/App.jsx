import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage, Dashboard } from '../pages';
import RegistrationPage from '../registration-page';
import style from './app.module.scss';

export default function App() {
  return (
    <Router>
      <div className={style.wrapper}>
        <Switch>
          <Route exact path="/">
            <RegistrationPage />
            <MainPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
