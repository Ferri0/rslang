import React from 'react';
import { render, screen, cleanup } from '../../utils/test-utils';

import { App } from './App';

describe('App', () => {
  afterEach(cleanup);
  it('should contain app name', () => {
    render(<App />);
    expect(screen.getAllByText(/Easy English/i)).toBeDefined();
  });
});
