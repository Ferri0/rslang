import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './components/App';
import { WordsService } from './services';
import { Context } from './components/word-service-context';
import { ErrorBoundry } from './components/Error-boundry';

import './scss/base.scss';

const wordsService = new WordsService();
wordsService
  .getWords()
  .then((result) => {
    console.log(result[5].audio);
  })
  .catch((err) => {
    console.error(err);
  });
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <Context.Provider value={wordsService}>
          <App />
        </Context.Provider>
      </ErrorBoundry>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
