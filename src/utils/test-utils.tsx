import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ErrorBoundry } from '../components/Error-boundry';
import { Context } from '../components/word-service-context';
import { WordsService } from '../service';
import { store } from '../store';

const wordsService = new WordsService();

const render = (ui: JSX.Element): any => {
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <ErrorBoundry>
        <Context.Provider value={wordsService}>{children}</Context.Provider>
      </ErrorBoundry>
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper });
};

export * from '@testing-library/react';
export { render };
