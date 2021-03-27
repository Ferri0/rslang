import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './components/App';
import { ErrorBoundry } from './components/Error-boundry';

import './scss/base.scss';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
