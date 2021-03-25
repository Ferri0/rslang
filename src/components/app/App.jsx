import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from '../pages/Main';
import { Dashboard } from '../pages/Dashboard';
import { RegistrationPage } from '../pages/Registration';
import style from './App.module.scss';

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
